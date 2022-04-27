import { Grid } from "@mui/material";
import SingleResultTable from "./singleResultTable";

export default function ResultTableComponent(props) {
   //props.value.myTasks[k]).filter(d => d.participates).map(d => 
   const myTasks = [];
   Object.keys(props.value.myTasks).map(k  => {
       if (props.value.myTasks[k].participates){
            myTasks.push({
                name: k,
                participates: props.value.myTasks[k].participates,
                effort: props.value.myTasks[k].effort,
                duration: props.value.myTasks[k].duration,
            })
        }
    });
   console.log("aaa",myTasks);
   const partnerTasks = [];
   Object.keys(props.value.partnerTasks).map(k => {
       if (props.value.partnerTasks[k].participates){
            partnerTasks.push({
                name: k,
                participates: props.value.partnerTasks[k].participates,
                effort: props.value.partnerTasks[k].effort,
                duration: props.value.partnerTasks[k].duration,
            })
        }
    });
   return (
     <Grid container spacing={2} sx={{alignItems: "center", borderBottom: 1, borderColor: "divider", width: "100%"}}>
       <Grid item xs={6}>
         <SingleResultTable name="私" data={myTasks}></SingleResultTable>
       </Grid>
       <Grid item xs={6}>
         <SingleResultTable name="パートナー" data={partnerTasks}></SingleResultTable>
       </Grid>
     </Grid>
   );
}