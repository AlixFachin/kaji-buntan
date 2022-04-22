import { Grid } from "@mui/material";
import Item from "./centeredGridItem";

export default function ScatterPlotLegend(props) {
    return (
    <Grid container alignItems="center">
      <Grid item xs={6} justifyContent="center">
        <Item><svg width={20} height={20}><circle cx={10} cy={10} r={10} fill={props.myColor}></circle></svg> 私</Item>
      </Grid>
      <Grid item xs={6}>
        <Item><svg width={20} height={20}><circle cx={10} cy={10} r={10} fill={props.partnerColor}></circle></svg> パートナー</Item>
      </Grid>
    </Grid>
  )
}