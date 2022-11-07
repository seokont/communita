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

function createData(name, phone, group, link) {
  return { name, phone, group, link };
}

const rows = [
  createData("Максим Кравчук", "0973055477", "1", " tel:0973055477"),
  createData("Людмила Кравчук", "0939028646", "1", " tel:0939028646"),

  createData("Юрій Бондарчук", "0963802787", "2", "tel:0963802787"),
  createData("Аліна Бондарчук", "0939333633", "2", "tel:0939333633"),

  createData("Леонід Янішевський", "0984988849", "3", "tel:0984988849"),
  createData("Юля Янішевська", "0965677644", "3", "tel:0965677644"),

  createData("Володимир Юхімчук", "0635609455", "4", " tel:0635609455"),
  createData("Агата Юхімчук", "0632007996", "4", " tel:0632007996"),

  createData("Євгеній Добржанський", "0972108360", "5", " tel:0972108360"),
  createData("Людмила Власюк", "0980085403", "5", " tel:0980085403"),
];

export default function Responsible() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Ім'я</TableCell>
            <TableCell align="center">Група</TableCell>
            <TableCell align="right">Телефон</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.group}</TableCell>
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
