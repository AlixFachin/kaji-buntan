import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import { useState } from "react";
import ResultDashboard from "./resultDashboard";
import AllocationList from "./allocationList";
import GuideTalk from 'components/guideTalk';
import detectAllocationChange from "src/detectAllocationChange";

export default function ResultTabComponent(props) {

  //console.log(detectAllocationChange(props.currentTaskRepartition, props.leastChangeAllocationTaskRepartition));
  //console.log(detectAllocationChange(props.currentTaskRepartition, props.adjustedWinnerTaskRepartition));
  let [changeOrUnchageLeast, changedListLeast] = detectAllocationChange(props.currentTaskRepartition, props.leastChangeAllocationTaskRepartition);
  let [changeOrUnchageAW, changedListAW] = detectAllocationChange(props.currentTaskRepartition, props.adjustedWinnerTaskRepartition);

  const [tabNum, setTabNum] = useState("1");
  const handleChangeTab = (_, newValue) => {
    setTabNum(newValue);
  }
  console.log(changedListLeast);
  return (
    <TabContext value={tabNum}>
      <TabList onChange={handleChangeTab}>
        <Tab label="今の家事分担" value="1" />
        <Tab label="少しだけ変更" value="2" />
        <Tab label="全家事で理想的な分担" value="3" />
      </TabList>
      <TabPanel value="1" sx={{ width: 1}}>
      <GuideTalk tabnumber = {3} tabtabnumber={0} changeOrUnchageLeast={changeOrUnchageLeast}></GuideTalk>
        <ResultDashboard value={ props.currentTaskRepartition} mydata={props.currentAliceAllocation} partnerdata={props.currentBobAllocation} current={"current"}></ResultDashboard>
        {/* <AllocationList head="私" data={props.currentAliceAllocation}></AllocationList>
        <AllocationList head="パートナー" data={props.currentBobAllocation}></AllocationList> */}
      </TabPanel>
      <TabPanel value="2" sx={{ width: 1}}>
      <GuideTalk tabnumber = {3} tabtabnumber={1} changeOrUnchageLeast={changeOrUnchageLeast} changedListLeast={changedListLeast}></GuideTalk>
        <ResultDashboard value={ props.leastChangeAllocationTaskRepartition } mydata={props.leastChangeAliceAllocation} partnerdata={props.leastChangeBobAllocation} changedList={changedListLeast} current={"not current"}></ResultDashboard>
        {/* <AllocationList head="私" data={props.leastChangeAliceAllocation}></AllocationList>
        <AllocationList head="パートナー" data={props.leastChangeBobAllocation}></AllocationList> */}
      </TabPanel>
      <TabPanel value="3" sx={{ width: 1}}>
      <GuideTalk tabnumber = {3} tabtabnumber={2} changeOrUnchageLeast={changeOrUnchageLeast} changeOrUnchageAW={changeOrUnchageAW}></GuideTalk>
        <ResultDashboard value={ props.adjustedWinnerTaskRepartition } mydata={props.adjustedWinnerAliceAllocation} partnerdata={props.adjustedWinnerBobAllocation} changedList={changedListAW} current={"not current"}></ResultDashboard>
        {/* <AllocationList head="私" data={props.adjustedWinnerAliceAllocation}></AllocationList>
        <AllocationList head="パートナー" data={props.adjustedWinnerBobAllocation}></AllocationList> */}
      </TabPanel>
    </TabContext>
  )
}