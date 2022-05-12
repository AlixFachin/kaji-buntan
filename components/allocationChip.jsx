import { Chip, Avatar } from "@mui/material"
import { styled } from "@mui/system"
import constants from "../src/constants";

const ListItem = styled("li")(({theme}) => ({margin: theme.spacing(0.5)}))

const allTasks = constants.allTasks
const backgroundColorList = constants.backgroundColorList
const myBackColor = constants.myBackColor
const partnerBackColor = constants.partnerBackColor
const myBackColorBorder = constants.myBackColorBorder
const partnerBackColorBorder = constants.partnerBackColorBorder

export default function AllocationChip(props) {
  // let categoryColor;
  // for (let categoryObject of allTasks) {
  //     for (let taskObject of categoryObject.children) {
  //       if (taskObject.name == props.label){
  //         categoryColor = backgroundColorList[categoryObject.name];
  //       }
  //     }
  // }
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
  //console.log(props.changedList);
  let changedList = props.changedList;
  if (props.current != "current"){
    //console.log(changedList);
    if (changedList.includes(props.label)){
      return (<ListItem><Chip 
        sx = {{
          backgroundColor: backColor,
        }} 
        avatar={<Avatar src = { avatar }></Avatar>}
        label={props.label}>
          </Chip><div><b style={{color: "rgba(237,185,24)"}}>CHANGED</b></div>
          </ListItem>
        )
    }else{
      return (<ListItem><Chip 
        sx = {{
          backgroundColor: backColor,
        }} 
        avatar={<Avatar src = { avatar }></Avatar>}
        label={props.label}>
          </Chip></ListItem>
        )
    }
  }else{
    return (<ListItem><Chip 
      sx = {{
        backgroundColor: backColor,
      }} 
      avatar={<Avatar src = { avatar }></Avatar>}
      label={props.label}>
        </Chip></ListItem>
      )
  }
}