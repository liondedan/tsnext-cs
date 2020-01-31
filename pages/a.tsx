import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Banner from '../components/banner';
import HomePage from '../content/home';
import withLayout from '../components/withLayout';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '../components/bannerButton';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import {
  faWater,
  faCheckCircle,
  faTrophy,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';
import ImageText from '../components/imageText';

const iconFont = (icon: any, text: string) => (
  <Typography variant="body1" component="h6" gutterBottom>
    <FontAwesomeIcon
      style={{
        width: '12px',
        marginRight: 12,
        color: '#4caf50',
        marginTop: 14,
      }}
      icon={icon}
    />
    {text}
  </Typography>
);

const featureSection = ({ title, body, icon }: any) => (
  <Grid item xs={12} sm={4}>
    {icon}
    <Typography variant="h4" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" component="h6" gutterBottom>
      {body}
    </Typography>
  </Grid>
);

const testimonialIcon = (iconURL: string) => (
  <Grid item xs={4} sm={2}>
    <img src={iconURL} style={{ width: '100%', maxWidth: '90px' }} />
  </Grid>
);

const trophy = <FontAwesomeIcon style={{ width: '20px' }} icon={faTrophy} />;
const ocean = <FontAwesomeIcon style={{ width: '20px' }} icon={faWater} />;
const wildlife = <FontAwesomeIcon style={{ width: '20px' }} icon={faLeaf} />;
const alignFlexIcons = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const index: React.SFC = () => {
  return (
    <>
      <Banner />
      <Container maxWidth="lg">
        <Grid container style={alignFlexIcons} spacing={4}>
          {testimonialIcon('cool-camping-logo.png')}
          {testimonialIcon('dm.png')}
          {testimonialIcon('pitchup-hori.png')}
          {testimonialIcon('ng.png')}
          {testimonialIcon('tripadvisor.png')}
          {testimonialIcon('red-bull-approved.png')}
          {testimonialIcon('tgo.png')}
          {/* {testimonialIcon('pu.png')} */}
        </Grid>
      </Container>
      <div
        style={{
          backgroundColor: '#F7F7F7',
          paddingTop: 10,
          paddingBottom: 60,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            style={{ marginBottom: 80, marginTop: 60 }}
            align="center"
            component="h2"
            gutterBottom
          >
            Camping in Pembrokeshire
          </Typography>
          <Grid container spacing={5}>
            {featureSection({
              title: 'Pembrokeshire Coastline',
              icon: ocean,
              body:
                'Uninterrupted views of the north Pembrokeshire Coast National Park, located in a National Trust Conservation area, our pitches are based around a natural spring fed lake.',
            })}
            {featureSection({
              title: 'Rural Bliss',
              icon: wildlife,
              body:
                'We pride ourselves on a laid back camping pembrokeshire atmosphere and aim to provide a back-to-nature intimate experience for all the family.',
            })}
            {featureSection({
              title: 'Award Winning',
              icon: trophy,
              body:
                'Four star rating by the Welsh tourism board and one of the most popular camping pembrokeshire site on coolcamping & pitchup.',
            })}
          </Grid>
        </Container>
      </div>
      <Container style={{ marginTop: 40 }} maxWidth="md">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              Why camping in Pembrokeshire
            </Typography>
            <Typography
              variant="body1"
              style={{ paddingTop: 10 }}
              component="h6"
              gutterBottom
            >
              {HomePage.feature_1}
            </Typography>
          </Grid>
          <Grid style={{ marginTop: 45 }} item xs={12} sm={6}>
            {iconFont(
              faCheckCircle,
              'Explore the historic ancient city of St Davids'
            )}
            {iconFont(
              faCheckCircle,
              'Walk the Pembrokeshire Coast National Path'
            )}
            {iconFont(faCheckCircle, "Try coasteering in it's birth place")}
            {iconFont(faCheckCircle, 'Learn to surf in blue flag award waters')}
            {iconFont(faCheckCircle, 'Cycle the challenging coastal roads')}
            {iconFont(
              faCheckCircle,
              'Take a boat to visit wildlife on Ramsey or Skomer'
            )}
          </Grid>

          <ImageText
            title="Why camping in Pembrokeshire?"
            body={HomePage.feature_1}
            cta="dog"
            imageURL="http://coastalstay.co.uk/wp-content/uploads/2015/12/coastal-stay-features-min.png"
          />
          <ImageText
            title="Where are we located?"
            reverseOrder
            body={HomePage.feature_2}
            cta="dog"
            imageURL="https://www.visitpembrokeshire.com/wp-content/uploads/28-Whitesands_Ramsey_Carn_Llidi-1500x1000.jpg"
          />
          <ImageText
            title="What is there to do nearby?"
            body={HomePage.feature_3}
            cta="dog"
            imageURL="/things_to_do.png"
          />
        </Grid>
      </Container>
      <Container style={{ marginTop: 40 }} maxWidth="md">
        <Typography
          style={{ marginTop: 60, marginBottom: 30, textAlign: 'center' }}
          variant="h4"
          gutterBottom
        >
          What is there to do nearby
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" component="h6" gutterBottom>
              Listing a home on Airbnb has never been easier or more
              customisable. You’re just a few steps away from earning money and
              reaching millions of global travellers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        <Grid>
          <Typography
            style={{ marginTop: 40, textAlign: 'center' }}
            variant="h4"
            gutterBottom
          >
            Frequently Asked Questions
          </Typography>
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            How close is the campsite to St Davids
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            We are a 15 minute drive from St Davids, the smallest city in
            Britain, with its wealth of restaurants, local shops and the famous
            St Davids Cathedral – a site of pilgrimage and worship for more than
            800 years.
          </Typography>
          <Divider style={{ marginTop: 30 }} />
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            How close is the campsite to the coast?
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            The campsite is just under a mile to the coast and has uninterrupted
            views of the north Pembrokeshire Coast National Park
          </Typography>
          <Divider style={{ marginTop: 30 }} />
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            What are the nearest beaches to the campsite?
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            Abereiddy is our nearest beach, the home of the blue lagoon. A
            fifteen minute walk from Abereiddy along the coast takes you to a
            secluded beach which is unaccesable to vechiles. If you take a drive
            towards St Davids, Whitesands beach is 4 miles away form the
            campsite.
          </Typography>
          <Divider style={{ marginTop: 30 }} />
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            Where can we eat nearby?
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            Porthgain, a small fishing village, is under a mile away from the
            campsite and has great a fantastic fish restaurant called 'The Shed'
            and a cozy pub 'The Sloop'. If you take a drive into St Davids a
            fantastic restaurant is 'The Cwtch' (which means to hug in Welsh).
          </Typography>
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            How can we get around?
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            Porthgain, a small fishing village, is under a mile away from the
            campsite and has great a fantastic fish restaurant called 'The Shed'
            and a cozy pub 'The Sloop'. If you take a drive into St Davids a
            fantastic restaurant is 'The Cwtch' (which means to hug in Welsh).
          </Typography>
        </Grid>
        <ButtonBase url="/b" />
      </Container>
      <Container
        style={{ justifyContent: 'center', textAlign: 'center' }}
        maxWidth="md"
      >
        <Grid>
          <Divider style={{ marginTop: 40 }} />
          <Typography
            style={{ marginTop: 40, textAlign: 'center' }}
            variant="h4"
            gutterBottom
          >
            How to start hosting
          </Typography>
          <Button
            style={{
              marginTop: 20,
              justifyContent: 'center',
              textAlign: 'center',
            }}
            variant="contained"
            color="secondary"
            size="large"
          >
            Book your camping trip
          </Button>
        </Grid>
      </Container>
    </>
  );
};

const MetaData = {
  title: 'Coastal Stay Home',
};

export default withLayout(index, MetaData);
