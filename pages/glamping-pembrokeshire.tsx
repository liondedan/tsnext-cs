import React from 'react';
import Container from '@material-ui/core/Container';
import IconFont from '../components/iconFont';
import TitleBlock from '../components/titleBlock';
import ContainerWrap from '../components/containerWrap';
import Typography from '@material-ui/core/Typography';
import Banner from '../components/banner';
import cc from '../content/glamping';
import withLayout from '../components/withLayout';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
// import Divider from '@material-ui/core/Divider';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import ImageText from '../components/imageText';

const testimonialIcon = (iconURL: string) => (
  <Grid item xs={4} sm={2}>
    <img src={iconURL} style={{ width: '100%', maxWidth: '90px' }} />
  </Grid>
);

const alignFlexIcons = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const index: React.SFC = () => {
  return (
    <>
      <Banner
        title="Pembrokeshire Glamping"
        subtitle="Camping in West Wales"
        body="Providing just enough luxury to keep you comfortable and content, but not too much that you forget you’re camping in nature"
        ctaText="Book Now"
        ctaLink="/contact-us"
        url="bell-tent-glamping.jpg"
      />

      <Container maxWidth="lg" style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Grid container style={alignFlexIcons} spacing={2}>
          {testimonialIcon('cool-camping-logo.png')}
          {testimonialIcon('dm.png')}
          {testimonialIcon('ng.png')}
          {testimonialIcon('tripadvisor.png')}
          {testimonialIcon('red-bull-approved.png')}
          {testimonialIcon('tgo.png')}
        </Grid>
      </Container>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              Why Glamping in Pembrokeshire?
            </Typography>

            <Typography
              variant="body1"
              style={{ paddingTop: 10 }}
              component="h6"
              gutterBottom
            >
              {cc.f_1_1}
            </Typography>
            <Typography
              variant="body1"
              style={{ paddingTop: 10 }}
              component="h6"
              gutterBottom
            >
              {cc.f_1_2}
            </Typography>
          </Grid>
          <Grid style={{ marginTop: 45 }} item xs={12} sm={6}>
            {IconFont(
              faCheckCircle,
              'Spacious pitches with plenty of room to spread out'
            )}
            {IconFont(faCheckCircle, "Each pitch has it's own fire pit")}
            {IconFont(
              faCheckCircle,
              'Overlooking the sea and the Pembrokeshire coastline'
            )}
            {IconFont(
              faCheckCircle,
              'Adventure on the doorstop - Surfing, Coasteering etc. '
            )}
            {IconFont(
              faCheckCircle,
              'Farm small holding with Goats and Chickens'
            )}
          </Grid>
        </Grid>
      </ContainerWrap>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube-nocookie.com/embed/VcCivz7xW_g?controls=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <ContainerWrap>
        <Grid container spacing={5}>
          <ImageText
            title="Pembrokeshire Glamping"
            reverseOrder
            body={[cc.f_2_1, cc.f_2_2]}
            imageURL="/bell-tent-glamping.jpg"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <ImageText
            title="Just bring yourselves"
            body={[cc.f_3_1, cc.f_3_2]}
            cta="dog"
            imageURL="tipi_sea_view.png"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap>
        <Grid container spacing={5}>
          <ImageText
            title="Bathroom & Facilities"
            reverseOrder
            body={[cc.f_4_1, cc.f_4_2]}
            cta="dog"
            imageURL="bathroom-facilities-glamping.png"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <ImageText
            body={[cc.f_5_1, cc.f_5_2]}
            title="Animals & Wildlife"
            imageURL="/bell_tell_interior_view.png"
            cta="dog"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap>
        <Grid container spacing={5}>
          <ImageText
            title="The Local Area"
            reverseOrder
            body={[cc.f_6_1, cc.f_6_2]}
            cta="dog"
            imageURL="tipi_sunset_glamping.png"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <ImageText
            title="Pembrokeshire Glamping Bell Tent"
            body={[cc.f_10_1, cc.f_10_2]}
            cta="dog"
            imageURL="/things_to_do.png"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap>
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
  title: 'Pembrokeshire Glamping: Bell Tent',
  url: "www.coastalstay.co.uk/glamping-Pembrokeshire",
  description: "Our traditional bell tents offer a unique “wild glamping” holiday experience in Pembrokeshire, comfortable and hassle-free, allowing you to fully enjoy the camping experience."
};

export default withLayout(index, MetaData);