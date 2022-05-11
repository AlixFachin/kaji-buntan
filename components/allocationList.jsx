import { Grid, Box, Typography } from "@mui/material";
import AllocationChip from "./allocationChip";

export default function AllocationList(props) {
  return <Grid container sx={{alignItems: "center", borderBottom: 1, borderColor: "divider"}}>
    {/* <Grid item xs={2}>
      <Typography>
        {props.head}
      </Typography>
    </Grid>
    <Grid item xs={10}> */}
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        listStyle: "none",
        m: 0.5,
        p: 0
      }} component="ul">
        {
          props.data.map((d, i) => <AllocationChip key={i} label={d} myORpartner = {props.head} ></AllocationChip>)
        }
      </Box>
    </Grid>
  // </Grid>
}
