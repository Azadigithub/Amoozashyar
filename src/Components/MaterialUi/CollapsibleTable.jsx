import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "1401/02/14",
        customerId: "4012589633",
        amount: "34,000,000",
        sum: "34,000,000",
      },
      {
        date: "1401/02/19",
        customerId: "2585898741",
        amount: "54,850,255",
        sum: "54,850,255",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                تراکنش ها
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell> تاریخ</TableCell>
                    <TableCell>شماره پیگیری</TableCell>
                    <TableCell align="right">مبلغ پرداختی (ریال) </TableCell>
                    <TableCell align="right"> جمع کل</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                  {historyRow.sum}
                        {/* {Math.round(historyRow.amount * row.price * 100) / 100} */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "نیمسال اول تحصیلی1401-1402 ",
    "4011",
    "ثبت نام عادی/ ترم عادی",
    "25,310,000",
    "18,240,000",
    "43,550,000",
    3.99,
  ),
  createData(
    "نیمسال دوم تحصیلی1401-1402 ",
    "4021",
    "ثبت نام عادی/ ترم عادی",
    9.0,
    37,
    4.3,
    4.99,
  ),
  createData(
    "نیمسال اول تحصیلی1402-1403 ",
    "4031",
    "ثبت نام عادی/ ترم عادی",
    24,
    6.0,
    3.79,
  ),
  createData(
    "نیمسال دوم تحصیلی1402-1403 ",
    "4041",
    "ثبت نام عادی/ ترم عادی",
    3.7,
    67,
    4.3,
    2.5,
  ),
  createData(
    "نیمسال اول تحصیلی1403-1404 ",
    "4012",
    "ثبت نام عادی/ ترم عادی",
    16.0,
    49,
    3.9,
    1.5,
  ),
  createData(
    "نیمسال دوم تحصیلی 1403-1404 ",
    "4022",
    "ثبت نام عادی/ ترم عادی",
    16.0,
    49,
    3.9,
    1.5,
  ),
];

const headerStyle = {
  fontSize: "16px",
  fontWeight: "bold",
};

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="collapsible table"
        sx={{
          fontFamily: "Vazir, sans-serif",
          "& th": {
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: "Vazir, sans-serif",
          },
          "& td": {
            fontFamily: "Vazir, sans-serif",
          },
        }}
      >
        <TableHead>
          <TableRow sx={headerStyle}>
            <TableCell />
            <TableCell align="right"> عنوان ترم تحصیلی</TableCell>
            <TableCell align="right"> کد ترم</TableCell>
            <TableCell align="right">آخرین وضعیت دانشجو در ترم</TableCell>
            <TableCell align="right">شهریه ثابت ترم</TableCell>
            <TableCell align="right">جمع شهریه متغیر ترم</TableCell>
            <TableCell align="right">جمع شهریه ثابت و متغیر</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
