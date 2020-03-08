import React from 'react';
import IconFont from '../components/iconFont';
import TitleBlock from '../components/titleBlock';
import ContainerWrap from '../components/containerWrap';
import Typography from '@material-ui/core/Typography';
import Banner from '../components/banner';
import FeatureLogo from '../components/featuedLogo';
import cc from '../content/camping';
import withLayout from '../components/withLayout';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
// import Divider from '@material-ui/core/Divider';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import ImageText from '../components/imageText';

const index: React.SFC = () => {
  return (
    <>
      <Banner
        title="Pembrokeshire Camping"
        subtitle="Camping in West Wales"
        body="Providing just enough luxury to keep you comfortable and content, but not too much that you forget you’re camping in nature"
        ctaText="Book Now"
        ctaLink="/contact-us"
        url="pembrokeshire-camping-coastal-view.jpg"
      />

      <FeatureLogo />

      <ContainerWrap invert>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              Why Pembrokeshire Camping?
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
            title="Pembrokeshire Camping"
            reverseOrder
            body={[cc.f_2_1, cc.f_2_2]}
            imageURL="campsite-fire-wales.jpg"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <ImageText
            title="Bathroom & Facilities"
            body={[cc.f_3_1, cc.f_3_2]}
            cta="dog"
            imageURL="/bathroom-facilities.png"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap>
        <Grid container spacing={5}>
          <ImageText
            title="Picnic Areas"
            reverseOrder
            body={cc.f_4_1}
            cta="dog"
            imageURL="/picnic-area.png"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <ImageText
            title="Animals and Wildlife"
            body={[cc.f_5_1, cc.f_5_2]}
            cta="dog"
            imageURL="/animals-wildlife-campsite.png"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap>
        <Grid container spacing={5}>
          <ImageText
            title="Pembrokeshire Local Area"
            reverseOrder
            body={[cc.f_6_1, cc.f_6_2]}
            cta="dog"
            imageURL="/the-local-area.png"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <ImageText
            title="Welsh Adventure Activities"
            body={[cc.f_7_1, cc.f_7_2]}
            cta="dog"
            imageURL="/adventure-activities.png"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap>
        <Grid container spacing={5}>
          <ImageText
            title="Walking and Cycling"
            body={[cc.f_8_1, cc.f_8_2]}
            cta="dog"
            imageURL="/walking-cycling-pembrokeshire.png"
            reverseOrder
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <ImageText
            title="Getting around & amenities"
            body={[cc.f_9_1, cc.f_9_2]}
            cta="dog"
            imageURL="/pembrokeshire-walking-campsite.jpg"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap>
        <Grid container spacing={5}>
          <ImageText
            title="Children & Dogs"
            body={[cc.f_10_1, cc.f_10_2]}
            cta="dog"
            reverseOrder
            imageURL="/children-dogs.png"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <ImageText
            title="Wooden Fired Pizza"
            body={cc.f_12_1}
            cta="dog"
            imageURL="/pizza-oven-camping.jpg"
            reverseOrder
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap>
        <Grid container spacing={5}>
          <ImageText
            title="Pembrokeshire Camping Summary"
            body={[cc.f_11_1, cc.f_11_2]}
            cta="dog"
            imageURL="/pembrokeshire-camping-summary.png"
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
            How many pitches do you have?
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            We've only got 28 pitches - as we wanted to give each pitch enough
            space and personality to make your holiday feel like you're a
            valuable guest, and not just rammed right next to each other like
            sardines.
          </Typography>
          <Divider style={{ marginTop: 30 }} />
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            How many bathrooms are there?
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            We have one unisex luxury bathroom with combined shower and toilet,
            and then seperate male and female bathrooms, each with three toilets
            and showers - so it should never feel busy.
          </Typography>
          <Divider style={{ marginTop: 30 }} />
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            Do the showers have hot water?
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            This is glamping - of course they have hot water! Our washing
            facitilies also all have hot water.
          </Typography>
          <Divider style={{ marginTop: 30 }} />
          <Typography style={{ marginTop: 40 }} variant="h5" gutterBottom>
            How often is the pizza oven open
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            The pizza oven is open every night, and sometimes for lunch, during
            the high season. We use local products where possible and use oak
            logs to light the fire.
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
  title: 'Pembrokeshire Camping',
};

export default withLayout(index, MetaData);
