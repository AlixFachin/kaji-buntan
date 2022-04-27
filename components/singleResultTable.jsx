import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function SingleResultTable(props) {
  return (
    <TableContainer>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>{ props.name }</TableCell>
            <TableCell align="center">好み</TableCell>
            <TableCell align="center">時間</TableCell>
            <TableCell align="center">貢献度</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.effort===0?"😐":(row.effort===-1)?"😰":"😀"}</TableCell>
              <TableCell align="center">{row.duration}(分)</TableCell>
              <TableCell align="center">{(- row.effort + 2) * row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
