import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 380,
  },
});

function createData(name, phone, link, data) {
  return { name, phone, link, data };
}

const rows = [
  createData("Петро Яблонец", "0638004398", " tel:0638004398", "23.06.1965"),
  createData("Андрій Педай", "0962015985", " tel:0962015985", "25.05.1980"),
  createData("Віктор Приходько", "0967504514", " tel:0967504514", "08.02.1979"),
];

export default function Presvitery() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Ім'я</TableCell>

            <TableCell>Д/Н</TableCell>

            <TableCell align="right">Телефон</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell component="th" scope="row">
                {row.data}
              </TableCell>

              <TableCell align="right">
                <a href={row.link}>{row.phone}</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
