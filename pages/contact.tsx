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
        ctaLink="/book-now"
        url="http://coastalstay.co.uk/wp-content/uploads/2015/02/camping-pembrokeshire.jpg"
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
              Fill out the form below to check our availability or for any
              additional questions
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
                <Grid item xs={12}>
                  <TextField
                    id="fullName"
                    className={classes.input}
                    inputRef={register({ required: true })}
                    name="fullName"
                    label="Full Name"
                    variant="outlined"
                    required
                    error={errors.fullName ? true : false}
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
                    error={errors.emailAddress ? true : false}
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
};

export default withLayout(index, MetaData);
