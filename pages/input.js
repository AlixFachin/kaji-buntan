import styles from '../styles/input.module.css';

import Link from 'next/link';

import React from 'react';
import TaskCategoryList from "../components/taskCategoryList";
import InputItem from '../components/inputItem';
import  Tab from '@mui/material/Tab';
import  Tabs from '@mui/material/Tabs';
import { Box } from '@mui/material';
import { useContext, useState } from 'react';

import { firebaseStore } from 'src/firebaseApp';
import { addDoc, collection } from 'firebase/firestore';
import { AuthContext } from 'src/authContext';

import { DateTime } from 'luxon';

import constants from "../src/constants";
import ResultDashboard from 'components/resultDashboard';

const allTasksObject = {
    Cooking: ['朝ご飯', '弁当', '昼ご飯', '夕ご飯', '買い物'],
    Cleaning: ['リビング', 'お風呂場', 'トイレ'],
    Kids: ['音読', '宿題', 'お迎え', '病院連れ', 'お迎え'],
};

// TabPanel -> https://mui.com/material-ui/react-tabs/
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            { ...other }
        >
            {
                value === index && (
                    <Box sx={{width: '100%'}}>
                        { children }
                    </Box>
                )
            }
        </div>
    )
}
const allTasks = constants.allTasks

export default function InputPage() {

    const [ currentTab, setCurrentTab ] = useState(0);
    const [ currentTaskRepartition, setAllTaskRepartition ] = useState(getInitialTaskRepartition());

    const { user } = useContext(AuthContext);

    const getAllInputRows = (taskArray, personKey) => {
        return taskArray.map((taskName, index) => <InputItem  label={taskName} key={ `${taskName}${index}` } person={personKey}
            onTaskChange={setTaskRepartition} initialValue={ getTaskRepartition(personKey, taskName) }/>)
    }

    // Functions regarding the task repartition state -=-=-=-=-=-=-=-
    // Creating the initial value
    function getInitialTaskRepartition() {
        const myTasks = {};
        const partnerTasks = {};

        for (let category in allTasksObject) {
            for (let taskName of allTasksObject[category]) {
                myTasks[taskName] = { 
                    participates: false,
                    effort: 0,
                    duration : 10,
                };
                partnerTasks[taskName] = {
                    participates: false,
                    effort: 0,
                    duration : 10,
                };
            }
        }
        return { myTasks: myTasks, partnerTasks: partnerTasks};
    }

    function getTaskRepartition(person, taskName) {
        const personKey = (person == 'me' ? 'myTasks' : 'partnerTasks');
        return currentTaskRepartition[personKey][taskName];
    }
    
    function setTaskRepartition(person, taskName, taskRepartitionItem) {
        const personKey = (person == 'me' ? 'myTasks' : 'partnerTasks');           
        
        currentTaskRepartition[personKey][taskName] = taskRepartitionItem;
        setAllTaskRepartition(currentTaskRepartition);

    }

    // Function to record the current task repartition (with set date = today)
    // in the firestore database
    async function saveRepartitionToFireStore() {

        console.log('Saving task repartition!')
        for (let category of Object.keys(allTasksObject)) {
            for (let task of allTasksObject[category]) {
                const myTask = getTaskRepartition('me',task);
                if (myTask && myTask.participates) {
                    console.log(`Saving task ${task} for duration ${myTask.duration}`)
                    await addDoc(collection(firebaseStore, "tasks"), {
                        userId: user.uid,
                        startDate: DateTime.now().toJSDate(),
                        endDate: DateTime.now().plus({ minutes: myTask.duration }).toJSDate(),
                        category: category,
                        taskName: task,
                        description: '',
                    })
                    console.log(`Success in Saving task ${task} for duration ${myTask.duration}`)                    
                }
                const partnerTask = getTaskRepartition('partner',task);
                if (partnerTask && partnerTask.participates) {
                    console.log(`Saving partner task ${task} for duration ${partnerTask.duration}`)
                    await addDoc(collection(firebaseStore, "tasks"), {
                        userId: user.uid,
                        startDate: DateTime.now().toJSDate(),
                        endDate: DateTime.now().plus({ minutes: partnerTask.duration }).toJSDate(),
                        category: category,
                        taskName: task,
                        description: '',
                        partner: true,
                    })
                }
            }
        }

    }
    
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeTasks = (event) => {
        allTasks[event.index].children[event.child.index].checked = event.child.checked;
    }
    return (
        <div className={styles.inputPanel}>

            <Tabs value={currentTab} onChange={ (_, newValue) => setCurrentTab(newValue) }>
                <Tab label="家事選択" />
                <Tab label="私の評価" />
                <Tab label="パートナーの評価"/>
                <Tab label="結果"/>
            </Tabs>
            
            <TabPanel value={ currentTab } index={0} sx={{ width: 1}}>
                <TaskCategoryList taskTree={allTasks} onChange={handleChangeTasks}></TaskCategoryList>
            </TabPanel>        
            <TabPanel value={ currentTab } index={1} sx={{ width: 1}} >
                <h2>私のタスクを入力</h2>
                { Object.keys(allTasksObject).map( categoryName => (
                    <div className={ styles.categorySection } key={'m' + categoryName}> 
                        <h2 className={ styles.categoryHeader }>{ categoryName }</h2>
                        { getAllInputRows(allTasksObject[categoryName], 'me') }
                    </div>)) }
            </TabPanel>
            <TabPanel value={ currentTab } index={2} sx={{ width: 1}}>
                <h2>パートナーのタスク入力</h2>
                { Object.keys(allTasksObject).map( categoryName => (
                        <div className={ styles.categorySection } key={'p' + categoryName}> 
                            <h2 className={ styles.categoryHeader }>{ categoryName }</h2>
                            { getAllInputRows(allTasksObject[categoryName], 'partner') }
                        </div>)) }
            </TabPanel>
            <TabPanel value={ currentTab } index={3} sx={{ width: 1}}>
                <h3>アルゴリズムの結果</h3>
                <ResultDashboard value={ currentTaskRepartition }></ResultDashboard>
            </TabPanel>

            <div className={styles.buttonRow}>
                <Link href="/" passHref={true}><button>Cancel</button></Link>
                <button>Next</button>
            </div>
        </div>
    );
}