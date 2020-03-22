import React, { useState } from 'react';
// import { Booking } from '../types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { Booking } from '../types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { createFakeBooking } from '../test';
// import { format } from 'date-fns';
// import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        display: 'flex',
        flexWrap: 'wrap',
      },
    },
    input: {
      marginBottom: 30,
      width: '100%',
    },
    datePicker: {},
  })
);

// const fakeData = {
//   adults: 1,
//   arrivalDate: 1,
//   booking_created: 1,
//   booking_update: 1,
//   bookingType: 'catz',
//   children: 1,
//   confirmationEmail: true,
//   confirmationEmailDate: 1,
//   departureDate: 1,
//   deposit: 1,
//   dogs: 1,
//   email: 'catz',
//   extraInfo: 'catz',
//   firstName: 'catz',
//   hookUp: 1,
//   id: 1,
//   infants: 1,
//   lastName: 'catz',
//   paymentEmail: true,
//   paymentEmailDate: 1,
//   pitch: 1,
//   pitchType: 'catz',
//   remainderPaid: 1,
//   subTotal: 1,
//   total: 1,
// };

const index: React.SFC = () => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  console.log(error);
  const { errors, register, handleSubmit } = useForm<Booking>();
  const today = format(new Date(), 'yyyy-MM-dd');

  const onSubmit = handleSubmit((booking: Booking) => {
    let fakeData = createFakeBooking();
    console.log(booking);
    fetch(`/api/bookings`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(fakeData),
    })
      .then(response => response)
      .then(result => {
        console.log(result);
      })
      .catch((error: any) => {
        console.log(error);
        setError(true);
      });
  });
  return (
    <form className={classes.root} noValidate onSubmit={onSubmit}>
      <Grid item xs={12}>
        <TextField
          id="firstName"
          className={classes.input}
          inputRef={register({ required: true })}
          name="firstName"
          label="First Name"
          variant="outlined"
          required
          error={errors.firstName ? true : false}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className={classes.input}
          id="email"
          inputRef={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address',
            },
          })}
          required
          name="emailAddress"
          label="Email Address"
          variant="outlined"
        />
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            type="date"
            style={{ width: '85%' }}
            id="startDate"
            inputRef={register}
            className={classes.input}
            name="startDate"
            label="Start Date"
            variant="outlined"
            defaultValue={today}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.input}
            type="date"
            id="endDate"
            inputRef={register}
            name="endDate"
            defaultValue={today}
            label="End Date"
            variant="outlined"
            style={{ width: '85%' }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          multiline
          id="message"
          inputRef={register}
          className={classes.input}
          name="message"
          label="Message"
          variant="outlined"
          rows={4}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          type="submit"
          color="secondary"
          size="large"
          variant="contained"
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default index;
