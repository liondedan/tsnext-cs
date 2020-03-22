import React from 'react';
import moment from 'moment';
import { Booking } from '../types';

interface Calendar {
  bookingData?: Booking[];
}

const index: React.SFC<Calendar> = ({ bookingData }) => {
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
            debugger;
            isBooked = true;
            break;
          }
        }

        if (isBooked) {
          debugger;
          filledEmpty.push(columnBookings[j]);
          debugger;
        } else {
          debugger;
          filledEmpty.push({ pitch: i });
          debugger;
        }
      }

      debugger;
      return filledEmpty;

      // return filledEmpty.sort((a: any, b: any) => a.pitch - b.pitch);
    }
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

  const mapBookingsByHeading = () => {
    const dog = assignBookingToHeader();

    const returnDog = dog.map(e => {
      //@ts-ignore
      let bookingData = Object.values(e)[0].map((b: any) => (
        <div>
          {b.pitch} - {b.arrivalDate} - {b.departureDate}
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

  return <>{mapBookingsByHeading()}</>;
};

export default index;
