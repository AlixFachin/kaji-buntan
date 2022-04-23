import { Chip } from "@mui/material"
import { styled } from "@mui/system"

const ListItem = styled("li")(({theme}) => ({margin: theme.spacing(0.5)}))

export default function AllocationChip(props) {
  return <ListItem><Chip label={props.label}></Chip></ListItem>
}