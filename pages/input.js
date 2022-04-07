import styles from '../styles/input.module.css';

import InputItem from '../components/inputItem';

const allTasksObject = {
    Cooking: ['朝ご飯', '弁当', '昼ご飯', '夕ご飯', '買い物'],
    Cleaning: ['リビング', 'お風呂場', 'トイレ'],
    Kids: ['音読', '宿題', 'お迎え', '病院連れ', 'お迎え'],
};

export default function InputPage() {

    const getAllInputRows = taskArray => {
        return taskArray.map((taskName, index) => <InputItem  label={taskName} key={ `${taskName}${index}` }/>)
    }

    return (
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
    );
}