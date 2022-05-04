import { Chip } from "@mui/material"
import { styled } from "@mui/system"
import constants from "../src/constants";

const ListItem = styled("li")(({theme}) => ({margin: theme.spacing(0.5)}))

const allTasks = constants.allTasks
const backgroundColorList = constants.backgroundColorList


export default function AllocationChip(props) {
  console.log(props);
  let categoryColor;
  for (let categoryObject of allTasks) {
      for (let taskObject of categoryObject.children) {
        if (taskObject.name == props.label){
          console.log("dddddddddd");
          categoryColor = backgroundColorList[categoryObject.name];
        }
      }
  }
  console.log(categoryColor);
  return (<ListItem><Chip 
  sx = {{
    backgroundColor: categoryColor,
  }} 
  label={props.label}>
    </Chip></ListItem>
  )
}