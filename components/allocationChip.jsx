import { Chip, Avatar } from "@mui/material"
import { styled } from "@mui/system"
import constants from "../src/constants";

const ListItem = styled("li")(({theme}) => ({margin: theme.spacing(0.5)}))

const allTasks = constants.allTasks
const backgroundColorList = constants.backgroundColorList
const myBackColor = constants.myBackColor
const partnerBackColor = constants.partnerBackColor

export default function AllocationChip(props) {
  let categoryColor;
  for (let categoryObject of allTasks) {
      for (let taskObject of categoryObject.children) {
        if (taskObject.name == props.label){
          categoryColor = backgroundColorList[categoryObject.name];
        }
      }
  }
  let backColor;
  let avatar;
  if (props.myORpartner == '私'){
    backColor = myBackColor;
    avatar = '../avatar/myAvatar.png';
  }else if(props.myORpartner == 'パートナー'){
    backColor = partnerBackColor;
    avatar = '../avatar/partnerAvatar.png';
  }
  //console.log(backColor);
  return (<ListItem><Chip 
  sx = {{
    backgroundColor: backColor,
  }} 
  avatar={<Avatar src = { avatar }></Avatar>}
  label={props.label}>
    </Chip></ListItem>
  )
}