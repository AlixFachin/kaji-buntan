import List from '@mui/material/List';
import TaskCategoryListItem from './taskCategoryListItem';


export default function TaskCategoryList(props) {
    const handleChange = (event) => {
        props.onChange(event);
    }
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
            {props.taskTree.map((d, idx) => {
                return <TaskCategoryListItem key={idx} index={idx} onChange={handleChange} taskCategory={d}></TaskCategoryListItem>
            })}
      </List>        
    )
}
