import ScatterPlotComponent from "./scatterPlotComponent";
import ResultTableComponent from "./resultTableComponent";
import MakeBarGraph from "./makeBarGraph";
import MakePieChart from "./makePieChart";
import { Box, Grid } from "@mui/material";
import AllocationList from "./allocationList";

export default function ResultDashboard(props) {
  return (
    <Box>
      <Grid container spacing={0.5} sx={{alignItems: "flex-start", borderBottom: 1, borderColor: "divider"} } >
    <Grid item xs={6} cellHeight={200} width ={350} justifyContent="flex-end">
      <h2>私</h2>
      <MakePieChart head="私"  value={props.value}></MakePieChart>
      <AllocationList head="私" data={props.mydata}></AllocationList>
      </Grid>
    <Grid item xs={6} cellHeight={200} width ={350} justifyContent="flex-end">
       <h2>パートナー</h2>
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
