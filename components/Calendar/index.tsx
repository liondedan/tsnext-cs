import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Cell } from './tableCell';
import { HeaderCell } from './headerCell';
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

interface IRowHeaders {
  headers: moment.Moment[] | [];
}

export interface IColumnHeadingsWithDates {
  [key: string]: Booking[] | IDummyBooking[];
}

export interface IDummyBooking {
  pitch: number;
}

interface IRowToPush {
  pitch: number;
  pitches: Booking[] | IDummyBooking[];
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const index: React.SFC<Calendar> = ({ bookingData }) => {
  const TODAY = moment();
  const [rowHeaders, setRowHeaders] = useState<IRowHeaders>();
  const [today, setToday] = useState(moment());
  const prevTodayRef = useRef(today);
  const [dataByHeading, setDataByHeading] = useState<
    IColumnHeadingsWithDates[]
  >();
  const classes = useStyles();

  useEffect(() => {
    prevTodayRef.current = today;
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
    let nextSevenDays: moment.Moment[] = generateHeaderDates(today);
    setRowHeaders({ headers: nextSevenDays });

    let columnHeadingWithDates: IColumnHeadingsWithDates | [] = [];
    // Look through each column header
    for (let i = 0; i < nextSevenDays.length; i++) {
      // Get all dates assosiated with column header
      let headingBookings = getHeadingBookings(nextSevenDays[i]);
      // Set all asosiated bookings to column header
      //@ts-ignore
      let headingBookingSubset = { [nextSevenDays[i]]: headingBookings };
      //@ts-ignore
      columnHeadingWithDates.push(headingBookingSubset);
    }

    setDataByHeading(columnHeadingWithDates);
  };

  const generateTableData = () => {
    if (!rowHeaders) {
      return;
    }

    let rowToPush: IRowToPush[] = [];
    for (var i = 0; i < 15; i++) {
      let rowData: IRowToPush = { pitch: i, pitches: [] };
      // map each header
      rowHeaders.headers.forEach((rowHeader: moment.Moment, index: number) => {
        // Add pitch value to first row
        if (index == 0) {
          //@ts-ignore
          rowData.pitches.push({ pitch: i + 1 });
        }

        //find dataset that exists within that header
        if (dataByHeading) {
          Object.values(dataByHeading).forEach(
            (e: IColumnHeadingsWithDates) => {
              // get header as formatted moment
              let dataSet = moment(Object.keys(e)[0]).format();

              // it's the data set that matches the header
              if (dataSet == rowHeader.format()) {
                // @ts-ignore
                let pitchForSlot = Object.values(e)[0][i];
                // @ts-ignore
                rowData.pitches.push(pitchForSlot);
              }
            }
          );
        }

        if (index + 1 == rowHeaders.headers.length) {
          rowToPush.push(rowData);
        }
      });
    }

    return rowToPush;
  };

  const createRow = () => {
    const tableData = generateTableData();
    if (!tableData) {
      return <p>No Bookings</p>;
    }

    return tableData.map((row: IRowToPush) => (
      //@ts-ignore
      <TableRow>{row.pitches.map((column: Booking) => Cell(column))}</TableRow>
    ));
  };

  const createHeaderRow = () => {
    if (!dataByHeading) {
      return <p>No Header data</p>;
    }

    return dataByHeading.map((e: IColumnHeadingsWithDates, index: number) =>
      HeaderCell(e, index)
    );
  };

  const incrementDate = (diff: number | string) => {
    if (diff == 'today') {
      setToday(TODAY);
      assignBookingToHeader(TODAY);
      return;
    }
    let dateAdded = today.add(diff, 'day');
    setToday(dateAdded);
    assignBookingToHeader(dateAdded);
  };

  return (
    <>
      <button onClick={() => incrementDate(-5)}>Prev Week</button>
      <button onClick={() => incrementDate(5)}>Next Week</button>
      <button onClick={() => incrementDate('today')}>Today</button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="a dense table">
          <TableHead>
            <TableRow>{createHeaderRow()}</TableRow>
          </TableHead>
          <TableBody>{dataByHeading && createRow()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default index;
