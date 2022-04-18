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

    const getAllInputComponents = (taskArray, personKey) => {

        const returnArray = [];

        for (let category of taskArray) {
            let activeTasks = category.children.filter(task => task.checked).map((taskObject, index) => 
                <InputItem label={taskObject.name} key={ `${taskObject.name}${index}` } person={personKey}
                    onTaskChange={setTaskRepartition} initialValue={ getTaskRepartition(personKey, taskObject.name) }/>
            );
            if (activeTasks.length > 0) {
                returnArray.push(
                    <div className={ styles.categorySection } key={personKey[0] + category.name}>
                        <h2 className={ styles.categoryHeader }>{ category.name }</h2>
                        { activeTasks }
                    </div>
                );
            }
        }

        return returnArray;
    }

    // Functions regarding the task repartition state -=-=-=-=-=-=-=-
    // Creating the initial value
    function getInitialTaskRepartition() {
        const myTasks = {};
        const partnerTasks = {};

        for (let categoryObject of allTasks) {
            for (let taskObject of categoryObject.children) {
                myTasks[taskObject.name] = {
                    participates: false,
                    effort: 0,
                    duration : 10,
                };
                partnerTasks[taskObject.name] = {
                    participates: false,
                    effort: 0,
                    duration : 10,
                }
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
        for (let category of allTasks) {
            for (let task of category.children) {
                const myTask = getTaskRepartition('me',task.name);
                if (myTask && myTask.participates) {
                    console.log(`Saving task ${task} for duration ${myTask.duration}`)
                    await addDoc(collection(firebaseStore, "tasks"), {
                        userId: user.uid,
                        startDate: DateTime.now().toJSDate(),
                        endDate: DateTime.now().plus({ minutes: myTask.duration }).toJSDate(),
                        category: category.name,
                        taskName: task.name,
                        description: '',
                    })
                    console.log(`Success in Saving task ${task} for duration ${myTask.duration}`)                    
                }
                const partnerTask = getTaskRepartition('partner',task.name);
                if (partnerTask && partnerTask.participates) {
                    console.log(`Saving partner task ${task} for duration ${partnerTask.duration}`)
                    await addDoc(collection(firebaseStore, "tasks"), {
                        userId: user.uid,
                        startDate: DateTime.now().toJSDate(),
                        endDate: DateTime.now().plus({ minutes: partnerTask.duration }).toJSDate(),
                        category: category.name,
                        taskName: task.name,
                        description: '',
                        partner: true,
                    })
                }
            }
        }

    }
      
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
                { getAllInputComponents(allTasks, 'me') }
            </TabPanel>
            <TabPanel value={ currentTab } index={2} sx={{ width: 1}}>
                <h2>パートナーのタスク入力</h2>
                { getAllInputComponents(allTasks, 'partner') }
            </TabPanel>
            <TabPanel value={ currentTab } index={3} sx={{ width: 1}}>
                <h3>アルゴリズムの結果</h3>
            </TabPanel>

            <div className={styles.buttonRow}>
                <Link href="/" passHref={true}><button>Cancel</button></Link>
                <button>Next</button>
            </div>
        </div>
    );
}