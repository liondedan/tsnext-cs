import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import useAuth from '../hooks/useAuth';
import { Booking } from '../types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { calcPrice } from 'utils';

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
  useAuth();
  const classes = useStyles();
  const [error] = useState(false);
  console.log(error);
  const { errors, register, handleSubmit } = useForm<Booking>();
  const today = format(new Date(), 'yyyy-MM-dd');
  let tomorrowUF = new Date();
  tomorrowUF.setDate(tomorrowUF.getDate() + 1);
  const tomorrow = format(tomorrowUF, 'yyyy-MM-dd');

  const createCheckoutSession = (price: number, booking: Booking) => {
    debugger;
    return fetch('/api/checkout/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: price,
        booking: booking,
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

  const hiddenFormData = {
    booking_created: new Date(),
    booking_updated: null,
    booking_type: 'Coastal Stay',
    confirmationEmail: false,
    confirmationEmailDate: null,
    remainderPaid: null,
    deposit: 0,
    paymentEmail: false,
    paymentEmailDate: null,
    pitch: 1,
  };

  const onSubmit = handleSubmit((booking: Booking) => {
    let bookingWithHiddenFields = { ...booking, ...hiddenFormData };
    let price = calcPrice(booking);
    // let fakeData = createFakeBooking();
    debugger;
    // @ts-ignore
    let stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY);
    createCheckoutSession(price.total, bookingWithHiddenFields).then(function(
      data
    ) {
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

    // let fakeData = createFakeBooking();
    // console.log(booking);
    // fetch(`/api/bookings`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(fakeData),
    // })
    //   .then(response => response)
    //   .then(result => {
    //     // debugger;
    //     console.log(result);
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //     setError(true);
    //   });
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
    <Grid container>
      <Grid item xs={12} md={6}>
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

          {generateInput({
            errorMessage: 'Please select a number of adults',
            defaultValue: 'Standard Pitch',
            label: 'Pitch Type',
            id: 'pitchType',
            inputRef: register({
              required: true,
            }),
          })}

          {generateInput({
            errorMessage: 'Please select a number of adults',
            defaultValue: 0,
            label: 'Children',
            id: 'children',
            inputRef: register({
              required: true,
            }),
          })}

          {generateInput({
            errorMessage: 'Please select a number of adults',
            defaultValue: 0,
            label: 'Infants',
            id: 'infants',
            inputRef: register({
              required: true,
            }),
          })}

          {generateInput({
            errorMessage: 'Please select a number of adults',
            defaultValue: 0,
            label: 'Dogs',
            id: 'dogs',
            inputRef: register({
              required: true,
            }),
          })}

          {generateInput({
            errorMessage: 'Please select a number of adults',
            defaultValue: 0,
            label: 'Hook Up',
            id: 'hookUp',
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
      </Grid>
      <Grid item md={6}>
        RHS summary
      </Grid>
    </Grid>
  );
};

export default index;
