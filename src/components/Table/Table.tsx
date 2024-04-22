import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

interface Row {
  name: string;
  trackingId: number;
  date: string;
  status: string;
}

function createData(name: string, trackingId: number, date: string, status: string): Row {
  return { name, trackingId, date, status };
}

const rows: Row[] = [
  createData("Bluetooth headset", 18908424, "2 March 2022", "Approved"),
  createData("Pocket PC ", 18908424, "2 March 2022", "Pending"),
  createData("Handheld Gaming Console", 18908424, "2 March 2022", "Approved"),
  createData("Headset", 18908421, "2 March 2022", "Delivered"),
];

const makeStyle = (status: string) => {
  if (status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  } else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    };
  }
};

const BasicTable: React.FC = () => {
  return (
    <div className="Table">
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
        }}
      >
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>PRODUCT</TableCell>
              <TableCell align="left">TRACKING ID</TableCell>
              <TableCell align="left">DATE</TableCell>
              <TableCell align="left">STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};


export default BasicTable;
