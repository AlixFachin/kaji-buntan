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
            return "まずは家事を選択してね";
        }else if (props.tabnumber == 1){
            return "あなたの ・担当家事 ・好き嫌い ・かかる時間 を教えてね";
        }else if (props.tabnumber == 2){
            return "パートナーの ・好き嫌い ・かかる時間 を教えてね 　　　";
        }else {
            if (props.tabtabnumber == 0){
                if (props.changeOrUnchageLeast=='unchanged'){
                    return "今の家事分担です";
                }else{
                    return "今の家事分担です";
                }
            }else if (props.tabtabnumber==1){
                if (props.changeOrUnchageLeast == 'unchanged'){
                    return "今の分担は既におおよそ公平です\n\n下のアイコンをクリックすると自分で入替られるよ";
                }else{
                    let category = categoryShow(props.changedListLeast[0]);
                    return `少し変更しました\n「${ category }」の見直しはどうでしょう\n\n下のアイコンをクリックすると自分で入替られるよ`;
                }
            }else{
                if (props.changeOrUnchageLeast == 'unchanged' && props.changeOrUnchageAW == 'unchanged'){
                    return "今の分担は既におおよそ公平です\n\n下のアイコンをクリックすると入替られるよ";
                }else if (props.changeOrUnchageLeast == 'unchanged' && props.changeOrUnchageAW == 'changed'){
                    return "例えば、これが理想の分担のひとつです\nこちらも公平ですね\n\n下のアイコンをクリックすると自分で入替られるよ";
                }else{
                    return "例えば、これが理想の分担のひとつです\n\n下のアイコンをクリックすると自分で入替られるよ";
                }
            }
        }        
    }
    
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'start', marginBottom: '1.5em'}}>
            <Image alt="introduction" src={sensei} width={102} height={102}></Image>
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
