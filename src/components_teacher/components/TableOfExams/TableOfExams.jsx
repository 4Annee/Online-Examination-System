import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Download from '../PDFfiles/PDFfiles'
import './TableOfExams.css'

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
  ];

export default function BasicTable() {
    return (
        <div className="TableOfExams">
            <TableContainer component={Paper}
            style={{boxShadow: '0px 13px 20px 0px #80808029', backgroundColor: '#F8F9F9', marginTop: '65px', borderRadius: '8px'}}
            >
              <Table sx={{ minWidth: 70 }} aria-label="simple table">
  
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