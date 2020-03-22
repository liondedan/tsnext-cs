import React, { useState } from 'react';
import moment from 'moment';
import { Booking } from '../types';
// import useApiClient from '../hooks/useApiClient';

interface Calendar {
  bookingData?: Booking[];
}

const index: React.SFC<Calendar> = ({ bookingData }) => {
  const [bookingsByDate] = useState();
  // const [dataSet, setDataSet] = useState<DataSetProps>();

  // useEffect(() => {
  //   assignBookingToHeader();
  // }, []);

  const generateHeaderDates = () => {
    const columnHeaders = [];
    for (let i = 0; i < 6; i++) {
      // not setting it at block level modified 'today' for all other iterations
      let today = moment();
      const addDay = today.add(i, 'day');
      columnHeaders.push(addDay);
    }
    return columnHeaders;
  };

  const getHeadingBookings = (columnHeading: any) => {
    //@ts-ignore
    let columnBookings = bookingData.filter(e => {
      let bookingOnDay = columnHeading.isBetween(
        e.arrivalDate,
        e.departureDate
      );

      if (bookingOnDay) {
        return e;
      }
      return bookingOnDay;
    });

    return columnBookings;
  };

  const assignBookingToHeader = () => {
    let nextSevenDays = generateHeaderDates();
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
    return columnHeadingWithDates;
  };

  console.log(bookingsByDate);
  // const mapShapedBookings = () => {
  //   bookingsByDate.map((heading: any) => {
  //     debugger;
  //     console.log(heading);
  //   });
  // };

  const cat = () => {
    const dog = assignBookingToHeader();

    const returnDog = dog.map(e => {
      //@ts-ignore
      let bookingData = Object.values(e)[0].map((b: any) => (
        <div>
          {b.arrivalDate} - {b.departureDate}
        </div>
      ));

      return (
        <>
          <h5>{Object.keys(e)[0]}</h5>
          {bookingData}
        </>
      );
    });

    return returnDog;
  };

  return <>{cat()}</>;
};

export default index;
