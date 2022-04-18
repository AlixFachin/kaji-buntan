import styles from '../styles/input.module.css';

import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import constants from "../src/constants";
import TaskCategoryList from "../components/taskCategoryList";
import InputItem from '../components/inputItem';

const allTasksObject = {
    Cooking: ['朝ご飯', '弁当', '昼ご飯', '夕ご飯', '買い物'],
    Cleaning: ['リビング', 'お風呂場', 'トイレ'],
    Kids: ['音読', '宿題', 'お迎え', '病院連れ', 'お迎え'],
};

const allTasks = constants.allTasks

export default function InputPage() {

    const getAllInputRows = taskArray => {
        return taskArray.map((taskName, index) => <InputItem  label={taskName} key={ `${taskName}${index}` }/>)
    }
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeTasks = (event) => {
        allTasks[event.index].children[event.child.index].checked = event.child.checked;
    }
    return (
        <Box sx={{ }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="">
              <Tab label="家事選択" value="1" />
              <Tab label="私の評価" value="2" />
              <Tab label="パートナーの評価" value="3" />
              <Tab label="結果" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
              <TaskCategoryList taskTree={allTasks} onChange={handleChangeTasks}></TaskCategoryList>
          </TabPanel>
          <TabPanel value="2">
            <div className={styles.inputPanel}>
                <h1>Bulk Input Page</h1>
                { Object.keys(allTasksObject).map( categoryName => (
                    <div className={ styles.categorySection } key={categoryName}> 
                        <h2 className={ styles.categoryHeader }>{ categoryName }</h2>
                        { getAllInputRows(allTasksObject[categoryName]) }
                    </div>)) }
                <div className={styles.buttonRow}>
                    <button>Cancel</button>
                    <button>Record</button>
                </div>
            </div>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item 4</TabPanel>
        </TabContext>
      </Box>
    );
}