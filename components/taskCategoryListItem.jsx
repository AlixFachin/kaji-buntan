import { useState } from "react";
import { Checkbox, Collapse, List, ListItemIcon, ListItemButton, ListItemText } from "@mui/material"
import TaskListItem from "./taskListItem"
import { ExpandMore, ExpandLess } from "@mui/icons-material";

export default function TaskCategoryListItem(props) {
    const computeCheckState = () => {
        const cnt = props.taskCategory.children.reduce((p, c) => p + c.checked, 0);
        return (cnt === props.taskCategory.children.length?1:((cnt === 0)?-1:0))
    }
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(computeCheckState());
    const [keys, setKeys] = useState(props.taskCategory.children.map(() => {return Math.random()}));
    const handleClick = () => {
        setOpen(!open);
    }
    const handleCheck = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const newValue = checked === 1?-1:1;
        setChecked(newValue);
        props.taskCategory.children.forEach((d, i) => {
            props.onChange({index: props.index, child: {index: i, checked: newValue === 1}});
        });
        setKeys(props.taskCategory.children.map(() => {return Math.random()}));
    }
    const handleChangeState = (event) => {
        props.onChange({index: props.index, child: event});
        setChecked(computeCheckState());
    }
    return (<>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <Checkbox onClick={handleCheck} checked={checked === 1} indeterminate={checked === 0}></Checkbox>
            </ListItemIcon>
            <ListItemText primary={props.taskCategory.name} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open}>
            <List>
                {props.taskCategory.children.map((d, idx) => {
                    return <TaskListItem key={keys[idx]} index={idx} task={d} onChangeState={handleChangeState}></TaskListItem>
                })}
            </List>
        </Collapse>
    </>)
}
