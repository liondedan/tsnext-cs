import React from 'react';
import { format } from 'date-fns';
import TitleBlock from '../components/titleBlock';
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
      marginBottom: 20,
    },
    datePicker: {},
  })
);

const index: React.SFC = () => {
  const classes = useStyles();
  const { errors, register, handleSubmit } = useForm<Booking>();
  const today = format(new Date(), 'yyyy-MM-dd');
  const onSubmit = handleSubmit((booking: Booking) => {
    fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then(response => response)
      .then(result => {
        console.log(result);
      });
  }); //

  return (
    <>
      <Banner
        title="Camping in Pembrokeshire"
        subtitle="Award Winning Campsite"
        body="Escape to a beautifully finished campsite small-holding located in a National Trust Conservation area with uninterrupted views of the north Pembrokeshire Coast National Park. Relax and experience the magic of a holiday in the heart of Wales"
        ctaText="Book Now"
        ctaLink="/book-now"
        url="http://coastalstay.co.uk/wp-content/uploads/2015/02/camping-pembrokeshire.jpg"
      />
      <FeatureLogo />
      <TitleBlock
        title="Camping in Pembrokeshire"
        titleVariant="h2"
        invert
        body="Get in touch with us and we can "
      >
        <Grid container spacing={5}>
          {FeatureSection({
            title: 'Location',
            icon: ocean,
            body: '',
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
      </TitleBlock>
      <ContainerWrap>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={8}>
            <form className={classes.root} noValidate onSubmit={onSubmit}>
              <Grid item xs={12}>
                <TextField
                  id="fullName"
                  inputRef={register({ required: true })}
                  name="fullName"
                  label="Full Name"
                  variant="outlined"
                  style={{ width: '100%' }}
                  error={errors.fullName ? true : false}
                  helperText="Please enter your full name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '100%' }}
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
                  helperText="Please enter a valid email address"
                  label="Email Address"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '100%' }}
                  type="date"
                  id="start_date"
                  inputRef={register}
                  name="state_date"
                  label="Start Date"
                  variant="outlined"
                  defaultValue={today}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: '100%' }}
                  type="date"
                  id="end_date"
                  inputRef={register}
                  name="end_date"
                  defaultValue={today}
                  label="End Date"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button type="submit">Hi</Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </ContainerWrap>
    </>
  );
};

const MetaData = {
  title: 'Get in touch',
};

export default withLayout(index, MetaData);
