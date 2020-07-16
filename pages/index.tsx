import React from 'react';
import IconFont from '../components/iconFont';
import TitleBlock from '../components/titleBlock';
import ContainerWrap from '../components/containerWrap';
import FeatureSection from '../components/featuredSection';
import FeatureLogo from '../components/featuedLogo';
import Typography from '@material-ui/core/Typography';
import Banner from '../components/banner';
import HomePage from '../content/home';
import withLayout from '../components/withLayout';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '../components/bannerButton';
import Divider from '@material-ui/core/Divider';
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

const trophy = <FontAwesomeIcon style={{ width: '14px' }} icon={faTrophy} />;
const ocean = <FontAwesomeIcon style={{ width: '14px' }} icon={faWater} />;
const wildlife = <FontAwesomeIcon style={{ width: '14px' }} icon={faLeaf} />;

const index: React.SFC = () => {
  return (
    <>
      <Banner
        title="Camping in Pembrokeshire"
        subtitle="Award Winning Campsite"
        body="Escape to a peaceful campsite tucked away on a small-holding with uninterrupted views of the Pembrokeshire Coast National Park. Relax and experience the magic of a holiday in the heart of Wales"
        ctaText="Book Now"
        ctaLink="/contact-us"
        url="camping-pembrokeshire-header.jpg"
      />

      <FeatureLogo />
      <TitleBlock
        title="Camping in Pembrokeshire"
        titleVariant="h2"
        invert
        body="If you are looking for a hi-tech holiday park then we are probably
                not for you, but if you want your children to know how to build a
                den or forage for blackberries, then our Pembrokeshire camping site
                will be exactly what you’re looking for.
    "
      >
        <Grid container spacing={5}>
          {FeatureSection({
            title: 'Pembrokeshire Coastline',
            icon: ocean,
            body:
              'Uninterrupted views of the north Pembrokeshire Coast National Park, located in a National Trust Conservation area, our pitches are based around a natural spring fed lake.',
          })}
          {FeatureSection({
            title: 'Rural Bliss',
            icon: wildlife,
            body:
              'We pride ourselves on a laid back camping pembrokeshire atmosphere and aim to provide a back-to-nature intimate experience for all the family.',
          })}
          {FeatureSection({
            title: 'Award Winning',
            icon: trophy,
            body:
              'Four star rating by the Welsh tourism board and one of the most popular camping pembrokeshire site on coolcamping & pitchup.',
          })}
        </Grid>
      </TitleBlock>
      <ContainerWrap>
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
            {IconFont(
              faCheckCircle,
              'Explore the historic ancient city of St Davids'
            )}
            {IconFont(
              faCheckCircle,
              'Walk the Pembrokeshire Coast National Path'
            )}
            {IconFont(faCheckCircle, "Try coasteering in it's birth place")}
            {IconFont(faCheckCircle, 'Learn to surf in blue flag award waters')}
            {IconFont(faCheckCircle, 'Cycle the challenging coastal roads')}
            {IconFont(
              faCheckCircle,
              'Take a boat to visit wildlife on Ramsey or Skomer'
            )}
          </Grid>
          <Grid item xs={12}>
            <ButtonBase url="/contact-us" />
          </Grid>
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <ImageText
            title="Where are we located?"
            reverseOrder
            body={HomePage.feature_2}
            cta="dog"
            imageURL="pembrokeshire-camping-location.jpg"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap>
        <Grid container spacing={5}>
          <ImageText
            title="What is there to do nearby?"
            body={HomePage.feature_3}
            cta="dog"
            imageURL="/things_to_do_small.png"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid>
          <Typography
            style={{ marginTop: 40, textAlign: 'center' }}
            variant="h4"
            gutterBottom
          >
            Frequently Asked Questions
          </Typography>
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            Is the campsite close to St Davids
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            We are a 15 minute drive from St Davids, the smallest city in
            Britain, with its wealth of restaurants, local shops and the famous
            St Davids Cathedral – a site of pilgrimage and worship for more than
            800 years. In the opposite direction we are six miles from Fishguard
            and the harbour of Goodwich, also the location of the Irish ferry
            crossing.
          </Typography>
          <Divider style={{ marginTop: 30 }} />
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            Is the campsite close to Sea?
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            The campsite is just under a mile to the coast via road and has
            uninterrupted views of the north Pembrokeshire Coast National Park.
            There is a footpath that leads you down to the beach that can be
            accessed from just ourside the campsite.
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
          <Divider style={{ marginTop: 30 }} />
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            How can we get around?
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            A frequent bus service stops directly outside the campsite and runs
            to and from St Davids, Fishguard and Haverfordwest.{' '}
          </Typography>
          <Divider style={{ marginTop: 30 }} />
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            How suitable are the roads for cycle?
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            Bring your bikes and enjoy miles of quiet backroads and wilderness.
            There are handfuls of back road routes to discover, most of which
            end up at a blue flag awarded beach. If you're looking for
            challanging routes there are lots of strava runs which will have you
            climbing some pretty big hills{' '}
          </Typography>
          <Divider style={{ marginTop: 30 }} />
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            What is the best way to see the coastline?
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            If you’ve brought along a canoe or two, or even a boat, these can be
            launched at Abereiddy or a mile down the road at Porthgain. There is
            some great coastline to be discovered including untouched beaches
            which can only be accessed via the sea.
          </Typography>
        </Grid>
      </ContainerWrap>

      <TitleBlock
        justifyContent
        title="Ready to go camping in Pembrokeshire?"
        body="Feel free to get in touch if you have any other questions, we are more than happy to chat. You can check our availability here, we fill up fast for Easter, Summer and Christmas, so book early to save dissapointment."
        ctaText="Book your camping trip"
        ctaLink="/contact-us"
      />
    </>
  );
};

const MetaData = {
  title: 'Camping in Pembrokeshire: Coastal National Park',
  url: "www.coastalstay.co.uk"
};

export default withLayout(index, MetaData);
