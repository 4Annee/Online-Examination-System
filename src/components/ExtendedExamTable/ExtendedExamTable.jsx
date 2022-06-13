import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Download from '../PDFfiles/PDFfiles'
import './ExtendedExamTable.css'

function createData(ExamName, Year, pdffile) {
    return {ExamName, Year, pdffile};
  }
  
  const rows = [
    createData('Examen 1 ', '2018'),
    createData('Examen 2 ', '2018'),
    createData('Examen 1', '2019'),
    createData('Examen 2', '2019'),
    createData('Examen 1', '2017'),
    createData('Examen 2', '2017'),
    createData('Examen 1', '2016'),
    createData('Examen 2', '2016'),
    createData('Examen 1', '2020'),
    createData('Examen 2', '2020'),
    createData('Examen 1', '2021'),
    createData('Examen 2', '2021'),
  ];

export default function BasicTable() {
    return (
        <div className="ExtendedExamTable">
            <TableContainer component={Paper}
            style={{boxShadow: '0px 13px 20px 0px #80808029', backgroundColor: '#F8F9F9', marginTop: '65px', borderRadius: '8px', marginLeft: '15px'}}
            >
              <Table sx={{ minWidth: 70 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ textTransform: 'uppercase'}}>Exam Name</TableCell>
                    <TableCell sx={{ textTransform: 'uppercase'}}>Year of Exam</TableCell>
                    <TableCell sx={{ textTransform: 'uppercase'}}>File</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.ExamName}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      className="rowTable"
                    >
                      <TableCell component="th" scope="row" className="cellTable">{row.ExamName}</TableCell>
                      <TableCell align="left" className="cell">{row.Year}</TableCell>
                      <TableCell align="left" className="cell"><Download/></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
      </div>
    );
  }