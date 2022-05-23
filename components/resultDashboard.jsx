import ScatterPlotComponent from "./scatterPlotComponent";
import ResultTableComponent from "./resultTableComponent";
import MakeBarGraph from "./makeBarGraph";
import MakePieChart from "./makePieChart";
import { Box, Grid } from "@mui/material";
import AllocationList from "./allocationList";

import myillust from '../public/images/myillust.png';
import partnerillust from '../public/images/partnerillust.png';
import Image from 'next/image';

import detectAllocationChange from "src/detectAllocationChange";
import makeAliceBobUtility from "/src/mainAlgorithm";


function makeBothAllocation(TaskRepartition, allTasks){
  let aliceAllocation = [];
  let bobAllocation = [];
  for (let category of allTasks){
      for (let task of category.children){
          if (task.checked){
              const myTask1 = TaskRepartition['myTasks'][task.name];
              const partnerTask1 = TaskRepartition['partnerTasks'][task.name];
              if (myTask1 && myTask1.participates){
                  aliceAllocation.push(task.name);
              }else if (partnerTask1 && partnerTask1.participates){
                  bobAllocation.push(task.name);
              }
          }
      }
  }
  return [aliceAllocation,bobAllocation];
}

export default function ResultDashboard(props) {
  let [changeOrUnchage, changedList] = detectAllocationChange(props.currentTaskRepartition, props.value);
  return (
    <Box>
      <Grid container spacing={0.5} sx={{alignItems: "flex-start", borderBottom: 1, borderColor: "divider"} } >
    <Grid item xs={6} cellHeight={200} width ={350} justifyContent="flex-end">
      <b><font size="6">私</font></b><Image alt="introduction" src={myillust} width={52} height={52}></Image>
      <MakePieChart head="私"  value={props.value} changedList={changedList} current={props.current}></MakePieChart>
      <AllocationList 
        head="私" 
        data={props.mydata} 
        changedList={changedList} 
        current={props.current}
        tabtabnumber={props.tabtabnumber}
        repartition={props.repartition}
      ></AllocationList>
      </Grid>
    <Grid item xs={6} cellHeight={200} width ={350} justifyContent="flex-end">
       <b><font size="6">パートナー</font></b><Image alt="introduction" src={partnerillust} width={52} height={52}></Image>
        <MakePieChart head="パートナー" value={props.value} changedList={changedList} current={props.current}></MakePieChart>
        <AllocationList 
          head="パートナー" 
          data={props.partnerdata}
          changedList={changedList} 
          current={props.current}
          tabtabnumber={props.tabtabnumber}
          repartition={props.repartition}
        ></AllocationList>
      </Grid>
    </Grid>
    {/* <ResultTableComponent value={props.value}></ResultTableComponent> */}
      {/* <MakeBarGraph value={props.value}></MakeBarGraph> */}
      {/* <ScatterPlotComponent value={props.value}></ScatterPlotComponent> */}
    </Box>
  )
}
