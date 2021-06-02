import React, { useState } from 'react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import ContainerWrap from '../components/containerWrap';
import FeatureSection from '../components/featuredSection';
import FeatureLogo from '../components/featuedLogo';
import Banner from '../components/banner';
import withLayout from '../components/withLayout';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Booking } from '../types';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import { faWater, faTrophy, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const trophy = <FontAwesomeIcon style={{ width: '14px' }} icon={faTrophy} />;
const ocean = <FontAwesomeIcon style={{ width: '14px' }} icon={faWater} />;
const wildlife = <FontAwesomeIcon style={{ width: '14px' }} icon={faLeaf} />;

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
  const [success, setSuccess] = useState(false);
  const { errors, register, handleSubmit } = useForm<Booking>();
  const today = format(new Date(), 'yyyy-MM-dd');

  interface Input {
    label: string;
    id: string;
    inputRef?: any;
    errorMessage?: string;
    type?: 'text' | 'date' | 'number';
    defaultValue?: any;
    style?: any;
    props?: any;
    mobileWidth?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    desktopWidth?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
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
    mobileWidth = 12,
    desktopWidth = 12,
  }: Input) => {
    return (
      <Grid item xs={mobileWidth} md={desktopWidth}>
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

  const PORT = process.env.NODE_ENV == 'development' ? 3000 : process.env.PORT;
  console.log(PORT);
  console.log(process.env.PORT);

  const onSubmit = handleSubmit((booking: Booking) => {
    fetch(`/api/contact`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then(response => response)
      .then(result => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error: any) => {
        console.log(error);
        setError(true);
      });
  });

  return (
    <>
      <Banner
        height={60}
        title="Get in touch"
        subtitle="Award Winning Campsite"
        body=""
        ctaText="Book Now"
        ctaLink="/contact-us"
        url="camping-pembrokeshire-header.jpg"
      />
      <FeatureLogo />
      <ContainerWrap>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={8}>
            <Typography
              style={{ marginBottom: 50 }}
              variant="body1"
              component="h5"
            >
              Fill out the booking form below to find out our availability.
            </Typography>
            {success && (
              <Typography
                style={{ marginBottom: 50 }}
                variant="body1"
                component="h5"
              >
                Thanks for getting in touch - your request has been sent and you
                should receive a reply shortly.
              </Typography>
            )}
            {error && <p>Sorry there has been an issue</p>}

            {!success && (
              <form className={classes.root} noValidate onSubmit={onSubmit}>
                <Grid spacing={2} container style={{ margin: '0px' }}>
                  <Grid item xs={12}>
                    <TextField
                      id="fullName"
                      className={classes.input}
                      inputRef={register({ required: true })}
                      name="fullName"
                      label="Full Name"
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
                      error={errors.email ? true : false}
                      required
                      name="emailAddress"
                      label="Email Address"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid spacing={2} container style={{ margin: '0px' }}>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="pitchSetup">Pitch Setup</InputLabel>
                    <Select
                      native
                      id="pitchSetup"
                      name="pitchSetup"
                      className={classes.input}
                      inputRef={register({
                        required: true,
                      })}
                    >
                      <option aria-label="None" value="" />
                      <option value="Small Tent">Small Tent</option>
                      <option value="Large Tent">Large Tent</option>
                      <option value="Van">Van</option>
                      <option value="Motorhome">Motorhome</option>
                      <option value="Caravan">Caravan</option>
                    </Select>
                  </Grid>
                </Grid>

                <Grid spacing={2} container style={{ margin: '0px' }}>
                  {generateInput({
                    errorMessage: 'Please select an arrival date',
                    label: 'Arrival Date',
                    type: 'date',
                    mobileWidth: 6,
                    defaultValue: today,
                    desktopWidth: 6,
                    id: 'arrivalDate',
                    inputRef: register({
                      required: true,
                    }),
                  })}

                  {generateInput({
                    label: 'Departure Date',
                    mobileWidth: 6,
                    desktopWidth: 6,
                    type: 'date',
                    defaultValue: today,
                    id: 'departureDate',
                    inputRef: register({
                      required: false,
                    }),
                  })}
                </Grid>

                <Grid spacing={2} container style={{ margin: '0px' }}>
                  {generateInput({
                    errorMessage: 'Please select a number of adults',
                    defaultValue: 1,
                    label: 'Adults',
                    type: 'number',
                    mobileWidth: 6,
                    desktopWidth: 6,
                    id: 'adults',
                    inputRef: register({
                      required: true,
                    }),
                  })}

                  {generateInput({
                    defaultValue: 0,
                    label: 'Children',
                    mobileWidth: 6,
                    desktopWidth: 6,
                    type: 'number',
                    id: 'children',
                    inputRef: register({
                      required: false,
                    }),
                  })}
                </Grid>

                <Grid spacing={2} container style={{ margin: '0px' }}>
                  {generateInput({
                    defaultValue: 0,
                    type: 'number',
                    mobileWidth: 6,
                    desktopWidth: 6,
                    label: 'Dogs',
                    id: 'dogs',
                    inputRef: register({
                      required: false,
                    }),
                  })}

                  {generateInput({
                    defaultValue: 0,
                    type: 'number',
                    mobileWidth: 6,
                    desktopWidth: 6,
                    label: 'Hook Up',
                    id: 'hookUp',
                    inputRef: register({
                      required: false,
                    }),
                  })}
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
            )}
          </Grid>
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          {FeatureSection({
            title: 'Location',
            icon: ocean,
            body: 'Coastal Stay, Noddfa Farm, Pembrokeshire, Sa626DP',
          })}
          {FeatureSection({
            title: 'Email',
            icon: wildlife,
            body: 'info@coastalstay.co.uk',
          })}
          {FeatureSection({
            title: 'Call Us',
            icon: trophy,
            body: '01348 837822',
          })}
        </Grid>
      </ContainerWrap>
    </>
  );
};

const MetaData = {
  title: 'Get in touch',
  url: 'www.coastalstay.co.uk/contact-us',
  description:
    "There's a reason that Pembrokeshire camping is so popular, camping near the sea overlooking the coast. If this all sounds good, contact us before we are fully booked! ",
};

export default withLayout(index, MetaData);
