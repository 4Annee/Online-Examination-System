import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TableExams.css'

function createData(ModuleName, Place, Day, StartTime, EndTime) {
  return { ModuleName, Place, Day, StartTime, EndTime };
}

const rows = [
  createData('ABDD', 'Amphi D', 'Sat', '08:00 AM', '10:00 AM'),
  createData('Intergiciel', 'Amphi D', 'Sun', '10:00 AM', '12:00 AM'),
  createData('Sécurité', 'Amphi D', 'Mon', '08:00 AM', '10:00 AM'),
  createData('Multimedia', 'Amphi D', 'Tue', '10:00 AM', '12:00 AM'),
  createData('Dev Web', 'Amphi D', 'Wed', '08:00 AM', '10:00 AM'),
  createData('Dev Mobile', 'Amphi D', 'Thu', '10:00 AM', '12:00 AM'),
  createData('AND', 'Amphi D', 'Sun', '08:00 AM', '10:00 AM'),
  createData('Sys Embarque', 'Amphi D', 'Mon', '10:00 AM', '12:00 AM'),
];

export default function BasicTable() {
  return (
      <div className="tableExams">
          <h3>Exam Schedule</h3>
          <TableContainer component={Paper}
          style={{ backgroundColor: '#F8F9F9', marginTop: '15px', borderRadius: '8px'}}
          >
            <Table sx={{ minWidth: 70 }} aria-label="simple table">
              
              <TableBody className="table">
                {rows.map((row) => (
                  <TableRow
                    key={row.ModuleName}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className="row"
                  >
                    <TableCell component="th" scope="row" className="cell">
                      {row.ModuleName}
                    </TableCell>
                    <TableCell align="left" className="cell">{row.Place}</TableCell>
                    <TableCell align="left" className="cell">{row.Day}</TableCell>
                    <TableCell align="left" className="cell">{row.StartTime}</TableCell>
                    <TableCell align="left" className="cell">{row.EndTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </div>
  );
}
