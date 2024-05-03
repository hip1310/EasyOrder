import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#333",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    companyName: string,
    contactPersonMame: string,
    email: string,
) {
    return { companyName, contactPersonMame, email, };
}

const rows = [
    //   createData('Frozen yoghurt', 159, 6.0),
    //   createData('Ice cream sandwich', 237, 9.0),
    //   createData('Eclair', 262, 16.0),
    //   createData('Cupcake', 305, 3.7),
    //   createData('Gingerbread', 356, 16.0),
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Company Name</StyledTableCell>
                        <StyledTableCell align="center">Contact Person name</StyledTableCell>
                        <StyledTableCell align="center">Contact Person email</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {rows.map((row) => (
            <StyledTableRow key={row.companyName}>
              <StyledTableCell>
                {row.companyName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.contactPersonMame}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
            </StyledTableRow>
          ))} */}
                    <StyledTableRow >
                        <StyledTableCell>
                            Company123
                        </StyledTableCell>
                        <StyledTableCell align="center">{"John"}</StyledTableCell>
                        <StyledTableCell align="center">{"john.doe2924@yopmail.com"}</StyledTableCell>
                        <StyledTableCell align="center" style={{color:"green"}}>Approved</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow >
                        <StyledTableCell>
                            Company1234
                        </StyledTableCell>
                        <StyledTableCell align="center">{"John1"}</StyledTableCell>
                        <StyledTableCell align="center">{"john1.doe1924@yopmail.com"}</StyledTableCell>
                        <StyledTableCell align="center" style={{color:"green"}}>Approved</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow >
                        <StyledTableCell>
                            Company12345
                        </StyledTableCell>
                        <StyledTableCell align="center">{"John2"}</StyledTableCell>
                        <StyledTableCell align="center">{"john2.doe1924@yopmail.com"}</StyledTableCell>
                        <StyledTableCell align="center" style={{color:"red"}}>Rejected</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
