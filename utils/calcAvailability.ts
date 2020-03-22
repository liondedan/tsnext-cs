import * as moment from 'moment';
import { extendMoment } from 'moment-range';
const rangeMoment = extendMoment(moment);

interface overlappedProps {
  confirmedBookings: any;
  proposedDate: any;
}

// Given a dataset and 'proposed booking dates' will return an arry of overlapping dates
export const getOverlapDates = ({
  confirmedBookings,
  proposedDate,
}: overlappedProps) => {
  const proposedDateRange = rangeMoment.range(
    new Date(proposedDate.arrivalDate),
    new Date(proposedDate.departureDate)
  );

  // should be a for loop to break early
  let overlappedDates = confirmedBookings.filter((cb: any) => {
    const confirmedBooking = rangeMoment.range(
      new Date(cb.arrivalDate),
      new Date(cb.departureDate)
    );

    if (proposedDateRange.overlaps(confirmedBooking)) {
      return cb;
    }
  });

  return overlappedDates;
};

//
// Given a dataset will return used pitches
export const overlappedPitch = ({
  confirmedBookings,
  proposedDate,
}: overlappedProps) => {
  const occupiedPitches: any = [];
  confirmedBookings.map((cb: any) => {
    proposedDate.map((pd: any) => {
      if (pd.pitch == cb.pitch) {
        occupiedPitches.push(pd.pitch);
      }
    });
  });

  return occupiedPitches;
};

// if (proposedDate.pitch == cb.pitch) {
//   hasOverlaps = true;
// }
