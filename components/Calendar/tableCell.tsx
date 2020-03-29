import { Booking } from '../../types';
import moment from 'moment';
import TableCell from '@material-ui/core/TableCell';
export const Cell = (cell: Booking) => {
  let { arrivalDate, departureDate } = cell;

  if (arrivalDate) {
    //@ts-ignore
    arrivalDate = moment(arrivalDate).format('DD-MM-YYYY');
  }

  if (departureDate) {
    //@ts-ignore
    departureDate = moment(departureDate).format('DD-MM-YYYY');
  }

  let decorate = () => `${arrivalDate} - ${departureDate}`;
  return (
    <TableCell component="th" scope="row">
      {arrivalDate && departureDate && decorate()}
      {cell.email}
      {cell.pitch}
    </TableCell>
  );
};
