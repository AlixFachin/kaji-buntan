import ScatterPlotComponent from "./scatterPlotComponent";
import MakeBarGraph from "./makeBarGraph";
import { Box } from "@mui/material";

export default function ResultDashboard(props) {
  return (
    <Box>
      <MakeBarGraph value={props.value}></MakeBarGraph>
      <ScatterPlotComponent value={props.value}></ScatterPlotComponent>
    </Box>
  )
}
