import ScatterPlotComponent from "./scatterPlotComponent";
import ResultTableComponent from "./resultTableComponent";
import { Box } from "@mui/material";

export default function ResultDashboard(props) {
  return (
    <Box>
      <ResultTableComponent value={props.value}></ResultTableComponent>
      <ScatterPlotComponent value={props.value}></ScatterPlotComponent>
    </Box>
  )
}
