import styles from '../styles/record.module.css';
import { useState, useEffect, useRef, useContext } from 'react';
import { DateTime } from 'luxon';
import Link from 'next/link';

import { firebaseStore } from '../firebase/clientApp';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { AuthContext } from '../context/authContext';

export default function RecordPage() {

    const [ isRecording, setIsRecording ] = useState(false);
    const [ startTime, setStartTime ] = useState(null);
    const [ endTime, setEndTime ] = useState(0);

    const categoryInput = useRef(null);
    const taskNameInput = useRef(null);
    const descriptionInput = useRef(null);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        let interval = null;

        if (isRecording) {
            console.log('Running the timer: ' + DateTime.now().toFormat('HH:mm:ss'));
            interval = setInterval(() => {
               setEndTime(DateTime.now());
            }, 500);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [  isRecording ])

    // -=-=-=-=-=-=-=-=-=-=-=-=- FIRESSTORE DATABASE SAVE -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    // validateInput
    // Will check that all mandatory fields are filled, and that the app is not still recording
    const validateInput = () => {
        let nbError = 0;

        if (categoryInput.current.value === '') {
            nbError++;
            categoryInput.current.classList.add('errorField');
        }

        if (taskNameInput.current.value === '') {
            nbError++;
            taskNameInput.current.classList.add('errorField');
        }

        if (descriptionInput.current.value === '') {
            nbError++;
            descriptionInput.current.classList.add('errorField');
        }

        if (nbError > 0) {
            return nbError;
        }

        // No error - cleaning the statuses of fields
        categoryInput.current.classList.remove('errorField');
        taskNameInput.current.classList.remove('errorField');
        descriptionInput.current.classList.remove('errorField');

        return nbError;

    }

    const saveRecording = async () => {

        const nbError = validateInput();
        if (nbError > 0) {
            return;
        }

        try {
            const docRef = await addDoc(collection(firebaseStore, "tasks"), {
                userId: user.uid,
                startDate: startTime.toJSDate(),
                endDate: endTime.toJSDate(),
                category: categoryInput.current.value,
                taskName: taskNameInput.current.value,
                description: descriptionInput.current.value,
            })
            
            console.log('Document added successfully in the database!')

        } catch (e) {
            console.error('Error Adding document:' + e);
        }

    }

    // -=-=-=-=-=-=-=-=-=-=-=-=- TIME RECORDING PARAMETERS -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    const startRecording = () => {
        setStartTime(DateTime.now());
        setIsRecording(true);
    }

    const stopRecording = () => {
        if (isRecording) {
            setIsRecording(false);
        }
    }

    const getEndTimeLabel = () => {
        if (endTime) {
            return endTime.toFormat('dd LLL yyyy HH:mm:ss');
        }

        return 'this is the end time';
    }

    const getDurationLabel = () => {
        if (!endTime || !startTime) {
            return '?';
        }

        const taskDuration = endTime.diff(startTime, ['hours', 'minutes','seconds']);
        
        return `${taskDuration.hours}:${Math.round(taskDuration.minutes)}:${Math.round(taskDuration.seconds)}`;

    }


    return ( 
        <main>
            <div className={styles.recordPanel}>
                <h1 className={styles.wideCol}>Record new task</h1>
                <label htmlFor="category">Category</label><input name="category" ref={categoryInput}></input>
                <label htmlFor="taskname">Task Name</label><input name="taskname" ref={taskNameInput}></input>
                <label className={styles.wideCol}>Description</label>
                <textarea ref={descriptionInput} className={styles.wideCol + ' ' + styles.wideRow} name="taskdescription"></textarea>
                <p className={styles.infoLabel}>start time</p>
                <p className={styles.infoLabel}>
                    { startTime ? startTime.toFormat('dd LLL yyyy HH:mm:ss') : 'this is the start time' }
                </p>
                <p className={styles.infoLabel}>end time</p>
                <p className={styles.infoLabel}>
                    { getEndTimeLabel() }
                </p>
                <p className={styles.infoLabel}>duration</p>
                <p className={styles.infoLabel}>
                    { getDurationLabel() }
                </p>
                <button onClick={ startRecording }>Start</button>
                <button onClick={ stopRecording }>Stop</button>
                <Link href="/" passHref={ true }><button>Cancel</button></Link> 
                <button onClick={ saveRecording }>Save</button>
            </div>
        </main>
    )
}