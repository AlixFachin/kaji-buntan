import { Box } from "@mui/material";
import ScatterPlotLegend from "./scatterPlotLegend";
import ScatterPlot from "./scatterPlot";

export default function ScatterPlotComponent(props) {
  const myColor = "rgba(255, 0, 0, 0.5)";
  const partnerColor = "rgba(0, 0, 255, 0.5)";
  return (
    <Box>
      <ScatterPlot width={400} height={400} value={props.value} myColor={myColor} partnerColor={partnerColor}></ScatterPlot>
      <ScatterPlotLegend myColor={myColor} partnerColor={partnerColor}></ScatterPlotLegend>
    </Box>
  )
}