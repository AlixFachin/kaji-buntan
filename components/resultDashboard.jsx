import ScatterPlotComponent from "./scatterPlotComponent";
import ResultTableComponent from "./resultTableComponent";
import MakeBarGraph from "./makeBarGraph";
import { Box } from "@mui/material";

export default function ResultDashboard(props) {
  return (
    <Box>
      {/* <ResultTableComponent value={props.value}></ResultTableComponent> */}
      <MakeBarGraph value={props.value}></MakeBarGraph>
      {/* <ScatterPlotComponent value={props.value}></ScatterPlotComponent> */}
    </Box>
  )
}
