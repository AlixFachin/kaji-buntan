import ScatterPlotComponent from "./scatterPlotComponent";
import { Box } from "@mui/material";

export default function ResultDashboard(props) {
  
  return (
    <Box>
      <ScatterPlotComponent value={props.value}></ScatterPlotComponent>
    </Box>
  )
}
