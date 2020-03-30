import { Booking } from '../../types';
import TableCell from '@material-ui/core/TableCell';

export const HeaderCell = (cell: Booking, index: number) => {
  // Add pitches column
  if (index == 0) {
    return (
      <>
        <TableCell component="th" scope="row">
          Pitches
        </TableCell>
        <TableCell component="th" scope="row">
          {Object.keys(cell)[0]}
        </TableCell>
      </>
    );
  }

  return (
    <TableCell component="th" scope="row">
      {Object.keys(cell)[0]}
    </TableCell>
  );
};
