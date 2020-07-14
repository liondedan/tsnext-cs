import { config } from '../config';
import moment from 'moment';
import { Booking } from '../types';

const year = moment();

export const highSeasonStart = (): moment.Moment => {
  let month = config.highSeason.startDate.month;
  let day = config.highSeason.startDate.day;
  let build = `${year.year()}-${month}-${day}`.toString();
  let buildFormat = moment(build, 'YYYY-MM-DD');
  return buildFormat;
};

export const highSeasonEnd = (): moment.Moment => {
  let month = config.highSeason.endDate.month;
  let day = config.highSeason.endDate.day;
  let build = `${year.year()}-${month}-${day}`.toString();
  let buildFormat = moment(build, 'YYYY-MM-DD');
  return buildFormat;
};

export const isHighSeason = (queryDate: any) => {
  let highSeasonStartVal = highSeasonStart();
  let highSeasonEndVal = highSeasonEnd();

  if (
    moment(queryDate).isBetween(highSeasonStartVal, highSeasonEndVal, 'day')
  ) {
    return true;
  } else {
    return false;
  }
};

export const calcPrice = (booking: Booking) => {
  let {
    adults,
    children,
    dogs,
    hookUp,
    infants,
    pitchType,
    arrivalDate,
    departureDate,
  } = booking;

  let pitchAugment = pitchType == 'Standard Pitch' ? 'standard' : 'forest';
  let season = isHighSeason(booking.arrivalDate);
  let pricing = season
    ? //@ts-ignore
      //@ts-ignore
      config.pricing.high[pitchAugment]
    : //@ts-ignore
      //@ts-ignore
      config.pricing.low[pitchAugment];

  let a = adults * pricing.adult;
  let c = children * pricing.children;
  let i = infants * pricing.infant;
  let h = hookUp * pricing.hookUp;
  let d = dogs * pricing.dog;
  let subTotal = a + c + i + h + d;
  let arrive = moment(arrivalDate);
  let depart = moment(departureDate);
  let noDays = depart.diff(arrive, 'days');
  let total = subTotal * noDays;
  return { total, subTotal };
};
