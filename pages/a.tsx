import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Banner from '../components/banner';
import withLayout from '../components/withLayout';
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import StyleCard from '../components/card';

const featureSection = ({ title, body }: any) => (
  <Grid item xs={12} sm={4}>
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

const trophy = <FontAwesomeIcon icon={faTrophy} />;
// const trophy = <FontAwesomeIcon icon={faTrophy} />;
// const trophy = <FontAwesomeIcon icon={faTrophy} />;
//
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
          {testimonialIcon('tripadvisor.png')}
          {testimonialIcon('rb.png')}
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
              title: 'Rural Bliss',
              icon: trophy,
              body:
                'We pride ourselves on a laid back camping pembrokeshire atmosphere and aim to provide a back-to-nature intimate experience for all the family.',
            })}
            {featureSection({
              title: 'Pembrokeshire Coastline',
              body:
                'Uninterrupted views of the north Pembrokeshire Coast National Park, located in a National Trust Conservation area, our pitches are based around a natural spring fed lake.',
            })}
            {featureSection({
              title: 'Award Winning',
              body:
                'Four star rating by the Welsh tourism board and one of the most popular camping pembrokeshire site on coolcamping & pitchup.',
            })}
          </Grid>
        </Container>
      </div>
      <Container style={{ marginTop: 40 }} maxWidth="md">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <StyleCard
              imgURL="http://coastalstay.co.uk/wp-content/uploads/2015/12/coastal-stay-features-min.png"
              title="Some title"
              body="We pride ourselves on a laid back camping pembrokeshire atmosphere and
            aim to provide a back-to-nature intimate experience for all the family."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyleCard
              imgURL="http://coastalstay.co.uk/wp-content/uploads/2015/12/where-is-coastal-stay-min.png"
              title="Some title"
              body="We pride ourselves on a laid back camping pembrokeshire atmosphere and
            aim to provide a back-to-nature intimate experience for all the family."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyleCard
              imgURL="http://coastalstay.co.uk/wp-content/uploads/2015/12/coastal-stay-features-min.png"
              title="Some title"
              body="We pride ourselves on a laid back camping pembrokeshire atmosphere and
            aim to provide a back-to-nature intimate experience for all the family."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyleCard
              imgURL="http://coastalstay.co.uk/wp-content/uploads/2015/12/coastal-stay-features-min.png"
              title="Some title"
              body="We pride ourselves on a laid back camping pembrokeshire atmosphere and
            aim to provide a back-to-nature intimate experience for all the family."
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const MetaData = {
  title: 'Coastal Stay Home',
};

export default withLayout(index, MetaData);
