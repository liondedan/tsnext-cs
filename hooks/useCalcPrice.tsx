import React from 'react';
import { config } from '../config';
// import { BookingCalc } from '../types';
import { isHighSeason } from 'utils';

//@ts-ignore
export const useCalcPrice: React.SFC = cat => {
  let highSeason = isHighSeason(cat);

  //@ts-ignore
  let prices = config[highSeason ? 'highSeason' : 'low'];
  console.log(prices);

  return <p>Helo</p>;
};

// var season = this.props.calcSeason(data.arrivalDate);
//     if (season) {
//       if (this.state.pitchType == 'Forest Pitch') {
//         var price = this.props.bookingPrice.in_season.forest;
//       } else {
//         var price = this.props.bookingPrice.in_season;
//       }

//     } else {
//       if (this.state.pitchType == 'Forest Pitch') {
//         var price = this.props.bookingPrice.out_season.forest;
//       } else {
//         var price = this.props.bookingPrice.out_season;
//       }
//     }

//     var noDays = this._calcDayDiff(data.departureDate, data.arrivalDate)
//     var a = (data.adults * price.adults);
//     var c = (data.children * price.children);
//     var i = (data.infants * price.infants);
//     var h = (data.hookUp * price.hookUp);
//     var d = (data.dogs * price.dogs);
//     var subTotal = a + c + i + h + d;
//     var total = subTotal * noDays;
//     return {totalVal: total, subVal: subTotal, days: noDays, price: price}
