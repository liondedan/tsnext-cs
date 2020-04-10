import moment from 'moment';
import { Booking } from '../../types';
import { IDummyBooking } from './index';
import TableCell from '@material-ui/core/TableCell';
export const Cell = (cell: IDummyBooking | Booking) => {
  if ((cell as Booking).arrivalDate) {
    const booking = cell as Booking;
    let { arrivalDate, departureDate, email, pitch } = booking;
    let arrivalDateF = moment(arrivalDate).format('DD-MM-YYYY');
    let departureDateF = moment(departureDate).format('DD-MM-YYYY');
    let decorate = () => `${arrivalDateF} - ${departureDateF}`;
    return (
      <TableCell component="th" scope="row">
        {decorate()}
        {email}
        {pitch}
      </TableCell>
    );
  } else if (cell as IDummyBooking) {
    return (
      <TableCell component="th" scope="row">
        {cell.pitch}
      </TableCell>
    );
  }
};
