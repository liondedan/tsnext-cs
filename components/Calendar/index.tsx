import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Cell } from './tableCell';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Booking } from '../../types';

interface Calendar {
  bookingData?: Booking[];
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const index: React.SFC<Calendar> = ({ bookingData }) => {
  const [rowHeaders, setRowHeaders] = useState();
  const [today, setToday] = useState(moment());
  const prevTodayRef = useRef(today);
  const [dataByHeading, setDataByHeading] = useState();
  const classes = useStyles();
  console.log(today);

  useEffect(() => {
    prevTodayRef.current = today;
    debugger;
    if (today) debugger;
    setToday(today);
    assignBookingToHeader(today);
  }, []);

  const generateHeaderDates = (today: moment.Moment) => {
    const columnHeaders = [];
    for (let i = 0; i < 6; i++) {
      // not setting it at block level modified 'today' for all other iterations
      const addDay = today.clone().add(i, 'day');
      columnHeaders.push(addDay);
    }

    return columnHeaders;
  };

  const getHeadingBookings = (columnHeading: moment.Moment) => {
    if (bookingData) {
      let columnBookings = bookingData.filter((e: Booking) => {
        let bookingOnDay = columnHeading.isBetween(
          e.arrivalDate,
          e.departureDate
        );

        if (bookingOnDay) {
          return e;
        }

        return bookingOnDay;
      });

      let filledEmpty = [];

      for (let i = 1; i < 21; i++) {
        let isBooked = false;

        for (var j = 0; j < columnBookings.length; j++) {
          if (i == columnBookings[j].pitch) {
            isBooked = true;
            break;
          }
        }

        if (isBooked) {
          filledEmpty.push(columnBookings[j]);
        } else {
          filledEmpty.push({ pitch: i });
        }
      }

      return filledEmpty;
    }
  };

  const assignBookingToHeader = (today: moment.Moment) => {
    debugger;

    let nextSevenDays: moment.Moment[] = generateHeaderDates(today);
    debugger;
    setRowHeaders(nextSevenDays);

    let columnHeadingWithDates = [];
    // Look through each column header
    for (let i = 0; i < nextSevenDays.length; i++) {
      // Get all dates assosiated with column header
      let headingBookings = getHeadingBookings(nextSevenDays[i]);
      // Set all asosiated bookings to column header
      // @ts-ignore
      let headingBookingSubset = { [nextSevenDays[i]]: headingBookings };
      columnHeadingWithDates.push(headingBookingSubset);
    }

    setDataByHeading(columnHeadingWithDates);
  };

  const generateTableData = () => {
    let rowToPush: any = [];
    for (var i = 1; i < 15; i++) {
      let rowData = { pitch: i, pitches: [] };
      // map each header
      rowHeaders.forEach((rowHeader: moment.Moment, index: number) => {
        //find dataset that exists within that header
        Object.values(dataByHeading).forEach((e: any) => {
          // get header as formatted moment
          let dataSet = moment(Object.keys(e)[0]).format();

          // it's the data set that matches the header
          if (dataSet == rowHeader.format()) {
            // @ts-ignore
            let pitchForSlot = Object.values(e)[0][i];
            // @ts-ignore
            rowData.pitches.push(pitchForSlot);
          }
        });

        if (index + 1 == rowHeaders.length) {
          rowToPush.push(rowData);
        }
      });
    }

    return rowToPush;
  };

  const createRow = () => {
    const tableData = generateTableData();
    return tableData.map((row: any) => (
      <TableRow>{row.pitches.map((column: any) => Cell(column))}</TableRow>
    ));
  };

  const mapBookingsByHeading = () => {
    const tableToRender = dataByHeading.map((e: any) => {
      return <TableCell>{Object.keys(e)[0]}</TableCell>;
    });

    // debugger;
    // console.log(tableData);
    console.log(tableToRender);
    // console.log(createRowData);
    return tableToRender;
  };

  const incrementDate = (diff: number) => {
    let dateAdded = today.add(diff, 'day');
    setToday(dateAdded);
    assignBookingToHeader(dateAdded);
  };

  return (
    <>
      <button onClick={() => incrementDate(-5)}>Prev Week</button>
      <button onClick={() => incrementDate(5)}>Next Week</button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="a dense table">
          <TableHead>
            <TableRow>{dataByHeading && mapBookingsByHeading()}</TableRow>
          </TableHead>
          <TableBody>{dataByHeading && createRow()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default index;
