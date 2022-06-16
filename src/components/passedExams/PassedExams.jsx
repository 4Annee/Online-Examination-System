import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './PassedExams.css'
import Download from '../PDFfiles/PDFfiles'

function createData(moduleName, profName, pdffile) {
  return {moduleName, profName, pdffile};
}

const rows = [
  createData('ABDD', 'Kechar Mohamed'),
  createData('Intergiciel', 'Malki Abdelhamid'),
  createData('Sécurité', 'Khaldi'),
  createData('Multimedia', 'Kazi'),
  createData('Dev Web', 'Bencherif Khayra'),
  createData('Dev Mobile', 'Elouali Nadia'),
  createData('AND', 'Keskes Nabil'),
  createData('Sys Embarqué', 'Bensnane'),
];

export default function BasicTable() {
  return (
      <div className="passedExams">
          <h3>Passed Exams</h3>
          <TableContainer component={Paper}
          style={{boxShadow: '0px 13px 20px 0px #80808029', backgroundColor: '#F0F0F0', marginTop: '15px', borderRadius: '8px'}}
          >
            <Table sx={{ minWidth: 70 }} aria-label="simple table">

              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.moduleName}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className="rowTable"
                  >
                    <TableCell component="th" scope="row" className="cellTable">{row.moduleName}</TableCell>
                    <TableCell align="left" className="cell">{row.profName}</TableCell>
                    <TableCell align="left" className="cell"><Download/></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </div>
  );
}
