import { Router } from 'express';
// import fetch from 'node-fetch';
const router = Router();

// const mapBooking = (booking: any) => {
//   return booking.results.map((booking: any) => {
//     const id = booking.id;
//     return {
//       id,
//     };
//   });
// };

// router.post('/', async () => {

// });

// router.get('/', async () => {
// fetch('https://www.pitchup.com/rest/api/booking/?after=2020-02-02&status=3', {
//   headers: {
//     Authorization: 'token 3476581f85a42a7318445f225d638dabf9457bab',
//     'Content-Type': 'application/json',
//   },
// })
//   .then(res => res.json())
//   .then(json => {
//     console.log(mapBooking(json));
//   });
// getAllBookings();
// });

// const getAllBookings = async () => {
//   const bookings = await fetch(
//     'https://www.pitchup.com/rest/api/booking/?after=2020-02-02&status=3',
//     {
//       headers: {
//         Authorization: 'token 3476581f85a42a7318445f225d638dabf9457bab',
//         'Content-Type': 'application/json',
//       },
//     }
//   );

//   const bookingData = await bookings.json();
//   console.log(bookingData);
// };

// const getEntireUserList = async function(pageNo = 1) {
//   const results = await getUsers(pageNo);
//   console.log("Retreiving data from API for page : " + pageNo);
//   if (results.length>0) {
//     return results.concat(await getEntireUserList(pageNo+1));
//   } else {
//     return results;
//   }
// };

//router.get('/', verifyToken, async ({ res }: any) => {
//  //@ts-ignore
//  const bookings = await models.Booking.find();
//  return res.send(bookings);
//});

//router.get('/:bookingId', async (req, res) => {
//  const booking = await models.Booking.findById(req.params.bookingId);
//  return res.send(booking);
//});

//router.delete('/:bookingId', async (req, res) => {
//  const booking = await models.Booking.findById(req.params.bookingId);
//  let result = null;
//  if (booking) {
//    result = await booking.remove();
//  }
//  return res.send(result);
//});

// router.post('/', async ({ res, next }: any) => {
//   try {
//     const booking = new models.Booking(fakeData);
//     // @ts-ignore
//     const ret = await booking.save();
//     console.log(ret);
//     res.status(200).send(ret);
//   } catch (error) {
//     // Passes errors into the error handler
//     console.log(error);
//     return next(error);
//   }
// });

export default router;
