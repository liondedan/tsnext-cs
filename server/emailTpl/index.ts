// import sgMail from '@sendgrid/mail';
// import basicContact from './basicContact';
// sgMail.setApiKey(process.env.SG_MAIL || '');

// const emailHtml = basicContact(req.body);
// console.log(req.body);

// const msg = {
//   to: 'info@coastalstay.co.uk',
//   from: 'info@coastalstay.co.uk',
//   subject: 'Coastal Stay: Your Booking Confirmation',
//   text: 'Coastal Stay: Your Booking Confirmation',
//   html: emailHtml,
// };




// export const sendEmail = ({recipient, message, subject,  }) => {
//     sgMail
//     .send(msg)
//     .then(() => {
//       res.status(200);
//       res.send('Oh uh, something went wrong');
//     })
//     .catch((error: any) => {
//       console.log(error);
//       res.status(404);
//       res.send('There was an error sending the email', error);
//     });
// }

export const cat = "cart";