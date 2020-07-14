import { Booking } from '../types';
import moment from 'moment';
import * as faker from 'faker';

// N days in past
// const recent = faker.date.recent(16);
// N days future
// const soon = faker.date.recent(-16);

// faker.date.between(recent, soon),
// export const fakeData: Booking = {
//   adults: 1,
//   arrivalDate: 1,
//   booking_created: 1,
//   booking_update: 1,
//   bookingType: 'catz',
//   children: 1,
//   confirmationEmail: true,
//   confirmationEmailDate: 1,
//   departureDate: 1,
//   deposit: 1,
//   dogs: 1,
//   email: 'catz',
//   extraInfo: 'catz',
//   firstName: 'catz',
//   hookUp: 1,
//   id: 1,
//   infants: 1,
//   lastName: 'catz',
//   paymentEmail: true,
//   paymentEmailDate: 1,
//   pitch: 1,
//   pitchType: 'catz',
//   remainderPaid: 1,
//   subTotal: 1,
//   total: 1,
// };

const dateSimple = (date: Date) => moment(date).format('YYYY-MM-DD');

export const createFakeBookingDuration = (
  arrivalOffset = 2,
  departureOffset = -2
) => {
  return {
    id: faker.random.number(10),
    pitch: faker.random.number(10),
    arrivalDate: dateSimple(faker.date.recent(arrivalOffset)),
    departureDate: dateSimple(faker.date.recent(departureOffset)),
  };
};

export const createFakeBookingDurations = (number = 2) => {
  const bookingsArray = new Array(number)
    .fill(undefined)
    .map(createFakeBookingDuration);
  return bookingsArray;
};

// export const fakeBooking: Booking = {
//   adults: 3,
//   arrivalDate: faker.date.recent(16),
//   booking_created: faker.date.between('2015-01-01', '2015-12-31'),
//   booking_update: faker.date.between('2015-01-01', '2015-12-31'),
//   bookingType: 'catz',
//   children: 1,
//   confirmationEmail: true,
//   confirmationEmailDate: faker.date.between('2015-01-01', '2015-12-31'),
//   departureDate: faker.date.recent(-17),
//   deposit: 1,
//   dogs: 1,
//   email: 'catz',
//   extraInfo: 'catz',
//   firstName: faker.name.findName(),
//   hookUp: 1,
//   id: 1,
//   infants: 1,
//   lastName: 'catz',
//   paymentEmail: true,
//   paymentEmailDate: faker.date.between('2015-01-01', '2015-12-31'),
//   pitch: 1,
//   pitchType: 'catz',
//   remainderPaid: 1,
//   subTotal: 1,
//   total: 1,
// };
// export const createFakeBooking = () => {
//   return {
//     adults: 3,
//     arrivalDate: faker.date.recent(16),
//     booking_created: faker.date.between('2015-01-01', '2015-12-31'),
//     booking_update: faker.date.between('2015-01-01', '2015-12-31'),
//     bookingType: 'catz',
//     children: 1,
//     confirmationEmail: true,
//     confirmationEmailDate: faker.date.between('2015-01-01', '2015-12-31'),
//     departureDate: faker.date.recent(-17),
//     deposit: 1,
//     dogs: 1,
//     email: 'catz',
//     extraInfo: 'catz',
//     firstName: faker.name.findName(),
//     hookUp: 1,
//     id: 1,
//     infants: 1,
//     lastName: 'catz',
//     paymentEmail: true,
//     paymentEmailDate: faker.date.between('2015-01-01', '2015-12-31'),
//     pitch: 1,
//     pitchType: 'catz',
//     remainderPaid: 1,
//     subTotal: 1,
//     total: 1,
//   };
// };

export const createFakeBooking = () => {
  return {
    adults: 3,
    arrivalDate: faker.date.recent(16),
    booking_created: faker.date.between('2015-01-01', '2015-12-31'),
    booking_update: faker.date.between('2015-01-01', '2015-12-31'),
    bookingType: 'catz',
    children: 1,
    confirmationEmail: true,
    confirmationEmailDate: faker.date.between('2015-01-01', '2015-12-31'),
    departureDate: faker.date.recent(-17),
    deposit: 1,
    dogs: 1,
    email: faker.internet.email(),
    extraInfo: 'catz',
    firstName: faker.name.findName(),
    hookUp: 1,
    id: '1',
    infants: 1,
    paymentEmail: true,
    paymentEmailDate: faker.date.between('2015-01-01', '2015-12-31'),
    pitch: faker.random.number(20),
    pitchType: 'catz',
    remainderPaid: 1,
    subTotal: 1,
    total: 1,
    customerId: 'cus_HAuWP4W8BcOWB6',
  };
};

export const createFakeBookings = (numUsers = 5) => {
  const bookingsArray: Booking[] = new Array(numUsers)
    .fill(undefined)
    .map(createFakeBooking);
  return bookingsArray;
};

export const prefixedBookings = [
  {
    id: 10,
    pitch: 1,
    arrivalDate: '2020-03-19',
    departureDate: '2020-03-20',
  },
  {
    id: 9,
    pitch: 2,
    arrivalDate: '2020-03-24',
    departureDate: '2020-03-29',
  },
  {
    id: 8,
    pitch: 3,
    arrivalDate: '2020-03-19',
    departureDate: '2020-04-02',
  },
  {
    id: 7,
    pitch: 4,
    arrivalDate: '2020-03-22',
    departureDate: '2020-03-24',
  },
  {
    id: 6,
    pitch: 5,
    arrivalDate: '2020-03-20',
    departureDate: '2020-03-27',
  },
  {
    id: 5,
    pitch: 6,
    arrivalDate: '2020-03-20',
    departureDate: '2020-03-21',
  },
  {
    id: 4,
    pitch: 7,
    arrivalDate: '2020-03-25',
    departureDate: '2020-03-28',
  },
  {
    id: 3,
    pitch: 8,
    arrivalDate: '2020-03-19',
    departureDate: '2020-03-20',
  },
  {
    id: 2,
    pitch: 9,
    arrivalDate: '2020-03-19',
    departureDate: '2020-03-21',
  },
  {
    id: 1,
    pitch: 10,
    arrivalDate: '2020-03-20',
    departureDate: '2020-03-21',
  },
];
