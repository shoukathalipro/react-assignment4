import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

import { Table } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
    {
      name : "John",
      age : 26,
      course : "MERN",
      batch : "October",
      edit : "Edit"
    },
    {
      name : "Doe",
      age : 25,
      course : "MERN",
      batch : "November",
      edit : "Edit"
    },
    {
      name : "Biden",
      age : 26,
      course : "MERN",
      batch : "September",
      edit : "Edit"
    },
    {
      name : "Barar",
      age : 22,
      course : "Christ",
      batch : "September",
      edit : "Edit"
    },
    {
      name : "Elent",
      age : 23,
      course : "MERN",
      batch : "October",
      edit : "Edit"
    }
];

const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right"><NavLink to="#">{row.edit}</NavLink></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
