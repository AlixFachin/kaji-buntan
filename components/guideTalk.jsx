import List from '@mui/material/List';
import TaskCategoryListItem from './taskCategoryListItem';
import sensei from '../public/images/sensei.png';
import { Box, Button, Container, Grid, Tooltip } from '@mui/material';
import Image from 'next/image';

import constants from "../src/constants";
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
            return "まずは家事を選択！";
        }else if (props.tabnumber == 1){
            return "あなたの担当家事、好き嫌い、かかる時間を教えてね";
        }else if (props.tabnumber == 2){
            return "パートナーの好き嫌い、かかる時間を教えてね";
        }else {
            if (props.tabtabnumber == 0){
                if (props.changeOrUnchageLeast=='unchanged'){
                    return "今の家事分担です";
                }else{
                    return "今の家事分担です";
                }
            }else if (props.tabtabnumber==1){
                if (props.changeOrUnchageLeast == 'unchanged'){
                    return "少し変更しました．既におおよそ公平でした！";
                }else{
                    let category = categoryShow(props.changedListLeast[0]);
                    return `少し変更しました．「${ category }」の見直しはどうでしょう`;
                }
            }else{
                if (props.changeOrUnchageLeast == 'unchanged' && props.changeOrUnchageAW == 'unchanged'){
                    return "理想的な分担です．既におおよそ公平でした";
                }else if (props.changeOrUnchageLeast=='unchanged' && props.changeOrUnchageAW=='changed'){
                    return "理想的な分担です．こちらも公平ですね";
                }else{
                    return "理想的な分担です";
                }
            }
        }        
    }
    
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'start', marginBottom: '1.5em'}}>
            <Image alt="introduction" src={sensei} width={102} height={72}></Image>
            <Box sx={{
                backgroundColor: 'lightgrey',
                borderRadius: '5px',
                marginLeft: '1.5em',
                paddingY: '0.5em',
                paddingX: '1em',
                position: 'relative',
            }}>
                <font size="5.5">{ getSaying() }</font>
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