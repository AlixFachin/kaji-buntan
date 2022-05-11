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
        <Tab label="全家事で理想的な分担" value="3" />
      </TabList>
      <TabPanel value="1" sx={{ width: 1}}>
        <ResultDashboard value={ props.currentTaskRepartition} mydata={props.currentAliceAllocation} partnerdata={props.currentBobAllocation} ></ResultDashboard>
        {/* <AllocationList head="私" data={props.currentAliceAllocation}></AllocationList>
        <AllocationList head="パートナー" data={props.currentBobAllocation}></AllocationList> */}
      </TabPanel>
      <TabPanel value="2" sx={{ width: 1}}>
        <ResultDashboard value={ props.leastChangeAllocationTaskRepartition } mydata={props.leastChangeAliceAllocation} partnerdata={props.leastChangeBobAllocation} ></ResultDashboard>
        {/* <AllocationList head="私" data={props.leastChangeAliceAllocation}></AllocationList>
        <AllocationList head="パートナー" data={props.leastChangeBobAllocation}></AllocationList> */}
      </TabPanel>
      <TabPanel value="3" sx={{ width: 1}}>
        <ResultDashboard value={ props.adjustedWinnerTaskRepartition } mydata={props.adjustedWinnerAliceAllocation} partnerdata={props.adjustedWinnerBobAllocation} ></ResultDashboard>
        {/* <AllocationList head="私" data={props.adjustedWinnerAliceAllocation}></AllocationList>
        <AllocationList head="パートナー" data={props.adjustedWinnerBobAllocation}></AllocationList> */}
      </TabPanel>
    </TabContext>
  )
}