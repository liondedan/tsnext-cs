// import moment from 'moment';
// import { extendMoment } from 'moment-range';

// const checkAvailability = ({queryArrivalDay, queryDepartureDay, querypitch, data, ignoreID}) => {
//     var keys = Object.keys(data);
//     console.log(ignoreID);
//     var isBookedForDay = false;

//     for (var i = 0; i < keys.length; i++) {
//       var k = keys[i];
//       var arrival = data[k].arrivalDate;
//       var departureDate = data[k].departureDate;
//       var pitch = data[k].pitch;

//       if (k == ignoreID) {
//         console.log(k + ' is equal to ' + ignoreID.id);
//         continue
//       }

//       if (moment(queryArrivalDay) <= departureDate && moment(queryDepartureDay) >= arrival) {
//         if (querypitch === pitch) {
//           console.log(data[k].firstName + " " + data[k].lastName + ' booked during this duration');
//           isBookedForDay = true;
//           break;
//         }
//       }

//       const momentRange = extendMoment(moment);
//       var a = queryArrivalDay;
//       var c = queryDepartureDay;
//       var b = arrival;
//       var d = departureDate;
//       var range1 = momentRange.range(a, c);
//       var range2 = momentRange.range(b, d);

//       if (range1.overlaps(range2)) {
//         if (querypitch === pitch) {
//           console.log(data[k].firstName + " " + data[k].lastName + ' booked during this duration');
//           isBookedForDay = true;
//           break;
//         }
//       }
//     }

//     if (isBookedForDay) {
//       return false
//     } else {
//       return true
//     }
//   }
//   return {
//   1
//   }
//
//
export default () => 1;
