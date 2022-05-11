import ScatterPlotComponent from "./scatterPlotComponent";
import ResultTableComponent from "./resultTableComponent";
import MakeBarGraph from "./makeBarGraph";
import MakePieChart from "./makePieChart";
import { Box, Grid } from "@mui/material";
import AllocationList from "./allocationList";

export default function ResultDashboard(props) {
  return (
    <Box>
      <Grid container sx={{alignItems: "center", borderBottom: 1, borderColor: "divider"}}>
    <Grid item xs={6}>
        私
      <MakePieChart head="私"  value={props.value}></MakePieChart>
      <AllocationList head="私" data={props.mydata}></AllocationList>
      </Grid>
    <Grid item xs={6}>
        パートナー
        <MakePieChart head="パートナー" value={props.value}></MakePieChart>
        <AllocationList head="パートナー" data={props.partnerdata}></AllocationList>
      </Grid>
    </Grid>
    {/* <ResultTableComponent value={props.value}></ResultTableComponent> */}
      {/* <MakeBarGraph value={props.value}></MakeBarGraph> */}
      {/* <ScatterPlotComponent value={props.value}></ScatterPlotComponent> */}
    </Box>
  )
}
