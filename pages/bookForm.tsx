import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { Booking } from '../types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { createFakeBooking } from '../test';

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

const index: React.SFC = () => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  console.log(error);
  const { errors, register, handleSubmit } = useForm<Booking>();
  const today = format(new Date(), 'yyyy-MM-dd');
  let tomorrowUF = new Date();
  tomorrowUF.setDate(tomorrowUF.getDate() + 1);
  const tomorrow = format(tomorrowUF, 'yyyy-MM-dd');

  const createCheckoutSession = () => {
    debugger;
    return fetch('/api/checkout/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity: 10,
        locale: 'en',
      }),
    })
      .then(function(result) {
        debugger;
        return result.json();
      })
      .catch((error: any) => {
        debugger;
        console.log(error);
      });
  };

  const onSubmit = handleSubmit((booking: Booking) => {
    debugger;
    // @ts-ignore
    let stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY);
    createCheckoutSession().then(function(data) {
      //@ts-ignore
      debugger;
      stripe
        .redirectToCheckout({
          sessionId: data.sessionId,
        })
        .then((e: any) => {
          console.log(e);
          debugger;
        });
    });

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
        // debugger;
        console.log(result);
      })
      .catch((error: any) => {
        console.log(error);
        setError(true);
      });
  });

  interface Input {
    label: string;
    id: string;
    inputRef?: any;
    errorMessage?: string;
    type?: 'text' | 'date';
    defaultValue?: any;
    style?: any;
    props?: any;
  }

  const generateInput = ({
    defaultValue = '',
    type = 'text',
    label,
    id,
    inputRef,
    errorMessage,
    style,
    props,
  }: Input) => {
    return (
      <Grid item xs={12}>
        <TextField
          style={{ ...style }}
          type={type}
          id={id}
          className={classes.input}
          inputRef={inputRef}
          defaultValue={defaultValue}
          name={id}
          label={label}
          variant="outlined"
          // @ts-ignore
          error={errors[id] ? true : false}
          // @ts-ignore
          helperText={errors[id] ? errorMessage : null}
          {...props}
        />
      </Grid>
    );
  };

  return (
    <form className={classes.root} noValidate onSubmit={onSubmit}>
      {generateInput({
        label: 'First Name',
        id: 'firstName',
        errorMessage: 'Please enter a first name',
        inputRef: register({ required: true }),
      })}

      {generateInput({
        errorMessage: 'Please enter a valid email address',
        label: 'Email',
        id: 'email',
        inputRef: register({
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        }),
      })}

      <Grid container>
        <Grid item xs={6}>
          {generateInput({
            errorMessage: 'Please select a valid arrival date',
            label: 'Arrival Date',
            id: 'arrivalDate',
            type: 'date',
            style: { width: '85%' },
            defaultValue: today,
            inputRef: register({
              required: true,
            }),
          })}
        </Grid>

        <Grid item xs={6}>
          {generateInput({
            errorMessage: 'Please select a valid departure date',
            label: 'Departure Date',
            id: 'departureDate',
            type: 'date',
            style: { width: '85%' },
            defaultValue: tomorrow,
            inputRef: register({
              required: true,
            }),
          })}
        </Grid>
      </Grid>

      {generateInput({
        label: 'Message',
        id: 'extraInfo',
        inputRef: register({}),
      })}

      {generateInput({
        errorMessage: 'Please select a number of adults',
        defaultValue: 1,
        label: 'Adults',
        id: 'adults',
        inputRef: register({
          required: true,
        }),
      })}

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
