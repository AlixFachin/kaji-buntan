import List from '@mui/material/List';
import TaskCategoryListItem from './taskCategoryListItem';
// import sensei from '../public/images/sensei.png';
import { Box, Button, Container, Grid, Tooltip } from '@mui/material';
// import Image from 'next/image';

//import constants from "../src/constants";
import constants from "../src/constantsEng";
const allTasks = constants.allTasks

function categoryShow(task){
    let category;
    for (let categoryObject of allTasks) {
        for (let taskObject of categoryObject.children) {
            if (taskObject.name == task){
                category = categoryObject.name;
            }
        }
    }
    return category;
}



export default function GuideTalk(props) {

    function getSaying() {
        if (props.tabnumber == 0){
            return "Select houseworks.";
        }else if (props.tabnumber == 1){
            return "Tell me (who is in charge), and your (like or dislike) and (time needed).                                                                  ";
        }else if (props.tabnumber == 2){
            return "Tell me your partner's (like or dislike) and (time needed).                                                            ";
        }else {
            if (props.tabtabnumber == 0){
                if (props.changeOrUnchageLeast=='unchanged'){
                    return "This is current sharing.";
                }else{
                    return "This is current sharing.";
                }
            }else if (props.tabtabnumber==1){
                if (props.changeOrUnchageLeast == 'unchanged'){
                    return "Current sharing satidfies EF1, which means almost fair.";
                }else{
                    let category = categoryShow(props.changedListLeast[0]);
                    return `Current sharing is slightly modified.\n How about considering ''${ category }''?`;
                }
            }else{
                if (props.changeOrUnchageLeast == 'unchanged' && props.changeOrUnchageAW == 'unchanged'){
                    return "Current sharing satidfies EF1, which means almost fair.";
                }else if (props.changeOrUnchageLeast == 'unchanged' && props.changeOrUnchageAW == 'changed'){
                    return "This is another allocation satisfies EF1.";
                }else{
                    return "This is one of the allocations satisfies EF1 and PO, which means almost fair.";
                }
            }
        }        
    }
    
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'start', marginBottom: '1.5em'}}>
            {/* <Image alt="introduction" src={sensei} width={102} height={102}></Image> */}
            <Box sx={{
                backgroundColor: 'lightgrey',
                borderRadius: '5px',
                marginLeft: '1.5em',
                paddingY: '0.5em',
                paddingX: '1em',
                position: 'relative',
            }}>
                <b className='text'><font size="5">{ getSaying() }</font></b>
                <Box sx={{
                    boxSizing: 'content-box',
                    backgroundColor: 'transparent',
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    borderRight: '10px solid lightgrey',
                    position: 'absolute',
                    left: '-10px',
                    top: '15px',
                    height: '0px',
                    width: '0px'
                }}></Box>
            </Box>
            <h1></h1>
        </Box>
     );

}
