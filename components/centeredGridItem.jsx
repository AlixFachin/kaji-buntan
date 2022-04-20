import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  verticalAlign: 'middle',
}));
export default Item;
