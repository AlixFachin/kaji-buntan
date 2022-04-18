import { useState } from "react";
import { Checkbox, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function TaskListItem(props) {
    const [checked, setChecked] = useState(props.task.checked);
    const handleClick = (event) => {
        event.preventDefault();
        props.onChangeState({index: props.index, checked: !props.task.checked});
        setChecked(props.task.checked);
    }
    return (
        <ListItemButton sx={{ pl: 8 }} onClick={handleClick}>
            <ListItemIcon>
                <Checkbox checked={checked}></Checkbox>
            </ListItemIcon>
            <ListItemText primary={ props.task.name } />
        </ListItemButton>
    )
}
