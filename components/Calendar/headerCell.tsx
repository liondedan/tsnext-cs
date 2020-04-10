import TableCell from '@material-ui/core/TableCell';
import { IColumnHeadingsWithDates } from './index';
import moment from 'moment';

export const HeaderCell = (cell: IColumnHeadingsWithDates, index: number) => {
  let dateF = moment(Object.keys(cell)[0]).format('ddd DD MMM');
  // Add pitches column
  if (index == 0) {
    return (
      <>
        <TableCell component="th" scope="row">
          Pitches
        </TableCell>
        <TableCell component="th" scope="row">
          {dateF}
        </TableCell>
      </>
    );
  }

  return (
    <TableCell component="th" scope="row">
      {dateF}
    </TableCell>
  );
};
