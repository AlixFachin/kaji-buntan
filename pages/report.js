import styles from '../styles/report.module.css';

import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { firebaseStore } from '../firebase/clientApp';
import { AuthContext } from '../context/authContext';
import { useState, useEffect, useContext, Fragment } from 'react';

import { DateTime } from 'luxon';

export default function ReportPage() {

    // Temporary Basic Report 
    // Download the list of all tasks input during the last 10 days

    const [ taskList, setTaskList ] = useState([]);
    const { user } = useContext(AuthContext);

    // Downloading data from firestore DB on first render
    useEffect(() =>  {
        const fetchTasks = async () => {
            console.log(`Trying to download tasks data for user ${user.uid}`)
            const q = query(collection(firebaseStore, "tasks"), where("userId", "==", user.uid), orderBy('startDate', 'desc'), limit(10))
            try {
                const querySnapshot = await getDocs(q);
                const tempTaskList = [];
                querySnapshot.forEach(doc => {
                    tempTaskList.push({ id: doc.id, ...doc.data()});
                });
                setTaskList(tempTaskList);
            } catch(err) {
                console.error(err);
            }
        };
        
        fetchTasks();

    }, [ user ])


    return (
        <div className={styles.taskListGrid}>
            <h1>Database Content</h1>
            <div className={styles.header}>Category</div>
            <div className={styles.header}>Task</div>
            <div className={styles.header}>Duration</div>
            <div className={styles.header}>Effort</div>
            { taskList.map((task, index) => { 
                const startDate = DateTime.fromJSDate(task.startDate.toDate());
                const endDate = DateTime.fromJSDate(task.endDate.toDate());

                return (<Fragment key={ task.id }>
                        <div> { task.category }</div>
                        <div> { task.taskName }</div>
                        <div> { startDate.toLocaleString() }</div>
                        <div> { endDate.diff(startDate,'minutes').toObject()['minutes'] }</div>
                    </Fragment>);
            }
            ) }
        </div>
    )
}