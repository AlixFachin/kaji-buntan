import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import { useState } from "react";
import ResultDashboard from "./resultDashboard";
import AllocationList from "./allocationList";

export default function ResultTabComponent(props) {
  const [tabNum, setTabNum] = useState("1");
  const handleChangeTab = (_, newValue) => {
    setTabNum(newValue);
  }
  return (
    <TabContext value={tabNum}>
      <TabList onChange={handleChangeTab}>
        <Tab label="今の家事分担" value="1" />
        <Tab label="少しだけ変更" value="2" />
        <Tab label="最も公平" value="3" />
      </TabList>
      <TabPanel value="1" sx={{ width: 1}}>
        <AllocationList head="私" data={props.currentAliceAllocation}></AllocationList>
        <AllocationList head="パートナー" data={props.currentBobAllocation}></AllocationList>
        <ResultDashboard value={ props.currentTaskRepartition }></ResultDashboard>
      </TabPanel>
      <TabPanel value="2" sx={{ width: 1}}>
      <AllocationList head="私" data={props.leastChangeAliceAllocation}></AllocationList>
        <AllocationList head="パートナー" data={props.leastChangeBobAllocation}></AllocationList>
        <ResultDashboard value={ props.leastChangeAllocationTaskRepartition }></ResultDashboard>
      </TabPanel>
      <TabPanel value="3" sx={{ width: 1}}>
      <AllocationList head="私" data={props.adjustedWinnerAliceAllocation}></AllocationList>
        <AllocationList head="パートナー" data={props.adjustedWinnerBobAllocation}></AllocationList>
        <ResultDashboard value={ props.adjustedWinnerTaskRepartition }></ResultDashboard>
      </TabPanel>
    </TabContext>
  )
}