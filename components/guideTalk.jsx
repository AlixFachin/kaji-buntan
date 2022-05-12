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
    if (props.tabnumber==0){
        return (
            <Box sx={{ flexGrow: 1 }}>
                <h1></h1>
                <Image alt="introduction" src={sensei} width={102} height={102}></Image>
                <b><font size="5.5">{ "　まずは家事を選択！" }</font></b>
                <h1></h1>
            </Box>
         )
    }else if (props.tabnumber==1){
        return (
            <Box sx={{ flexGrow: 1 }}>
                <h1></h1>
                <Image alt="introduction" src={sensei} width={102} height={102}></Image>
                <b><font size="5.5">{ "　あなたの　・担当家事　・好き嫌い　・かかる時間　を教えてね" }</font></b>
                <h1></h1>
            </Box>
         )
    }else if (props.tabnumber==2){
        return (
            <Box sx={{ flexGrow: 1 }}>
                <h1></h1>
                <Image alt="introduction" src={sensei} width={102} height={102}></Image>
                <b><font size="5.5">{ "　パートナーの　・好き嫌い　・かかる時間　を教えてね　　　　" }</font></b>
                <h1></h1>
            </Box>
         )
    }else {
        if (props.tabtabnumber==0){
            if (props.changeOrUnchageLeast=='unchanged'){
                return (
                    <Box sx={{ flexGrow: 1 }}>
                        <Image alt="introduction" src={sensei} width={102} height={102}></Image>
                        <b><font size="5.5">{ "　今の家事分担です" }</font></b>
                        <h1></h1>
                    </Box>
                 )
            }else{
                return (
                    <Box sx={{ flexGrow: 1 }}>
                        <Image alt="introduction" src={sensei} width={102} height={102}></Image>
                        <b><font size="5.5">{ "　今の家事分担です" }</font></b>
                        <h1></h1>
                    </Box>
                 )
            }
        }else if (props.tabtabnumber==1){
            if (props.changeOrUnchageLeast=='unchanged'){
                return (
                    <Box sx={{ flexGrow: 1 }}>
                        <Image alt="introduction" src={sensei} width={102} height={102}></Image>
                        <b><font size="5.5">{ "　変更は必要なさそうです．既におおよそ公平でした" }</font></b>
                        <h1></h1>
                    </Box>
                 )
            }else{
                let category = categoryShow(props.changedListLeast[0]);
                let saying = '　少し変更した分担です「'+category+'」の見直しはどうでしょう';
                return (
                    <Box sx={{ flexGrow: 1 }}>
                        <Image alt="introduction" src={sensei} width={102} height={102}></Image>
                        <b><font size="5.5">{ saying }</font></b>
                        <h1></h1>
                    </Box>
                 )
            }
        }else{
            if (props.changeOrUnchageLeast=='unchanged' && props.changeOrUnchageAW=='unchanged'){
                return (
                    <Box sx={{ flexGrow: 1 }}>
                        <Image alt="introduction" src={sensei} width={102} height={102}></Image>
                        <b><font size="5.5">{ "　理想的な分担です．既におおよそ公平でした" }</font></b>
                        <h1></h1>
                    </Box>
                 )
            }else if (props.changeOrUnchageLeast=='unchanged' && props.changeOrUnchageAW=='changed'){
                return (
                    <Box sx={{ flexGrow: 1 }}>
                        <Image alt="introduction" src={sensei} width={102} height={102}></Image>
                        <b><font size="5.5">{ "　理想的な分担です．こちらも公平ですね" }</font></b>
                        <h1></h1>
                    </Box>
                 )
            }else{
                return (
                    <Box sx={{ flexGrow: 1 }}>
                        <Image alt="introduction" src={sensei} width={102} height={102}></Image>
                        <b><font size="5.5">{ "　理想的な分担です" }</font></b>
                        <h1></h1>
                    </Box>
                 )
            }
        }
    }
}
