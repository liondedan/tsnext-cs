import '@testing-library/jest-dom/extend-expect';
import { getOverlapDates } from './calcAvailability';
// import { config } from "../config"
// import * as faker from 'faker';

import { prefixedBookings } from '../test/index';

test('it should return the overlapping dates if they exist', async () => {
  const proposedDate = {
    pitch: 2,
    id: 7,
    arrivalDate: '2020-03-18',
    departureDate: '2020-03-20',
  };
  const hasOverlappedDates = getOverlapDates({
    confirmedBookings: prefixedBookings,
    proposedDate,
  });

  expect(hasOverlappedDates.length).toBe(4);
});

test('it should return an empty array if there are no overlapping dates', async () => {
  const proposedDate = {
    id: 7,
    pitch: 2,
    arrivalDate: '2020-03-01',
    departureDate: '2020-03-04',
  };

  const hasOverlappedDates = getOverlapDates({
    confirmedBookings: prefixedBookings,
    proposedDate,
  });

  expect(hasOverlappedDates.length).toBe(0);
});

// test('it should return the used pitches', async () => {
//   const proposedDate = {
//     id: 7,
//     pitch: 2,
//     arrivalDate: '2020-03-01',
//     departureDate: '2020-03-04',
//   };

//   const hasOverlappedDates = getOverlapDates({
//     confirmedBookings: prefixedBookings,
//     proposedDate,
//   });

//   expect(hasOverlappedDates.length).toBe(0);
// });
