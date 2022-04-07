import styles from '../styles/input.module.css';

export default function InputItem(props) {

    return (<div className={styles.inputRow}>
        <div className={ styles.taskLabel }>{ props.label }</div>
        <button className={ styles.actionButton }>する</button>
        <button className={ styles.actionButton }>しない</button>
        <div className={ styles.effortButtonBox }>
            <button>😰</button>
            <button>😐</button>
            <button>😀</button>
        </div>
        <input type="range" list="tickmarks" />
        <datalist id="tickmarks">
            <option value="0" label="5min"></option>
            <option value="1" label="10min"></option>
            <option value="2" label="20min"></option>
            <option value="3" label="30min"></option>
            <option value="4" label="60min"></option>
            <option value="5" label="90min"></option>
        </datalist>

    </div>);
};