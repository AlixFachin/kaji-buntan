import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import { useState } from "react";
import ResultDashboard from "./resultDashboard";

export default function ResultTabComponent(props) {
  const [tabNum, setTabNum] = useState("1");
  const handleChangeTab = (_, newValue) => {
    setTabNum(newValue);
  }
  return (
    <TabContext value={tabNum}>
      <TabList onChange={handleChangeTab}>
        <Tab label="今の家事分担" value="1" />
        <Tab label="分担提案1" value="2" />
        <Tab label="分担提案2" value="3" />
      </TabList>
      <TabPanel value="1" sx={{ width: 1}}>
        私<ul>{<li>{props.currentAliceAllocation}</li>}</ul>
        パートナー<ul>{<li>{props.currentBobAllocation}</li>}</ul>
        <ResultDashboard value={ props.currentTaskRepartition }></ResultDashboard>
      </TabPanel>
      <TabPanel value="2" sx={{ width: 1}}>
        私<ul>{<li>{props.adjustedWinnerAliceAllocation}</li>}</ul>
        パートナー<ul>{<li>{props.adjustedWinnerBobAllocation}</li>}</ul>
        <ResultDashboard value={ props.adjustedWinnerTaskRepartition }></ResultDashboard>
      </TabPanel>
      <TabPanel value="3" sx={{ width: 1}}>
        私<ul>{<li>{props.leastChangeAliceAllocation}</li>}</ul>
        パートナー<ul>{<li>{props.leastChangeBobAllocation}</li>}</ul>
        <ResultDashboard value={ props.leastChangeAllocationTaskRepartition }></ResultDashboard>
      </TabPanel>
    </TabContext>
  )
}