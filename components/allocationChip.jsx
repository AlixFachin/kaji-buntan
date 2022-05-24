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
  let backColor;
  let avatar;
  if (props.person == '私'){
    backColor = myBackColor;
    avatar = '../avatar/myAvatar.png';
  }else if(props.person == 'パートナー'){
    backColor = partnerBackColor;
    avatar = '../avatar/partnerAvatar.png';
  }
  let changedList = props.changedList;
  if (props.current != "current"){
    if (changedList.includes(props.label)){
      return (<ListItem>
        <Chip 
        sx = {{
          backgroundColor: backColor,
        }} 
        avatar={<Avatar src = { avatar }></Avatar>}
        label={props.label}
        onClick={() => props.repartition(props.person, props.label, props.tabtabnumber)}
        >
        </Chip><div><b style={{color: "rgba(100,185,50)"}}>変更</b></div>
        </ListItem>
        )
    }else{
      return (<ListItem>
        <Chip 
        sx = {{
          backgroundColor: backColor,
        }} 
        avatar={<Avatar src = { avatar }></Avatar>}
        label={props.label}
        onClick={() => props.repartition(props.person, props.label, props.tabtabnumber)}
        >
        </Chip>
        </ListItem>
        )
    }
  }else{
    return (<ListItem>
      <Chip 
      sx = {{
        backgroundColor: backColor,
      }} 
      avatar={<Avatar src = { avatar }></Avatar>}
      label={props.label}
      onClick={() => props.repartition(props.person, props.label, props.tabtabnumber)}
      >
      </Chip>
      </ListItem>
      )
  }
}