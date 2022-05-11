import styles from 'styles/input.module.css';

import { useEffect, useState } from 'react';
import { ToggleButton, ToggleButtonGroup, Slider } from '@mui/material';

export default function InputItem(props) {

    const { person, label, onTaskChange, initialValue } = props;

    const [ isDoingTask, setDoingTask ] = useState(initialValue.participates);
    const [ happyLevel, setHappyLevel ] = useState(initialValue.effort ? initialValue.effort : 0); // Neutral: 0, Unhappy: -1, Happy: +1
    const [ taskTime, setTaskTime ] = useState(initialValue.duration ? initialValue.duration : 30);

    const sliderMarks = [
        {
            value: 10,
            label: '10',
        },
        {
            value: 30,
            label: '30',
        },
        {
            value: 60,
            label: '60',
        },
        {
            value: 90,
            label: '90',
        }
    ];

    useEffect(() => {
        if (onTaskChange && onTaskChange instanceof Function) {
            onTaskChange(person, label, {
                participates: isDoingTask,
                effort: happyLevel,
                duration: taskTime,
                category: initialValue.category
            })
        }
    }, [isDoingTask, happyLevel, taskTime, onTaskChange, label, person ] )

    return (<div className={styles.inputRow}>
        <div className={ styles.taskLabel }>{ props.label }</div>
          
        <ToggleButtonGroup value={isDoingTask} sx={{ gridArea: 'action' }} color="secondary" exclusive
            onChange={ (_, newValue) => {
                        if (newValue !== null) setDoingTask(newValue);
                    }}
            aria-label="タスク担当かどうか">
            <ToggleButton value={true} aria-label="する">する</ToggleButton>
            <ToggleButton value={false} aria-label="しない">しない</ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup value={happyLevel} sx={{ gridArea: 'effort' }} color="secondary" exclusive
            onChange={ (_, newValue) => {
                if (newValue !== null) setHappyLevel(newValue);
            }}>
            <ToggleButton value={-1}>👎</ToggleButton>
            <ToggleButton value={0}>👌</ToggleButton>
            <ToggleButton value={1}>👍</ToggleButton>
        </ToggleButtonGroup>

        <Slider
            value={ taskTime }
            sx={{ gridArea: 'duration', marginLeft: '1em' }}
            step={10}
            marks= { sliderMarks }
            min={10}
            max={90}
            onChange={ (_, newValue) => setTaskTime(newValue) }
            />

    </div>);
};