import React from 'react';
import IconFont from '../components/iconFont';
import TitleBlock from '../components/titleBlock';
import ContainerWrap from '../components/containerWrap';
import Typography from '@material-ui/core/Typography';
import Banner from '../components/banner';
import FeatureLogo from '../components/featuedLogo';
import cc from '../content/activities';
import withLayout from '../components/withLayout';
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import ImageText from '../components/imageText';

const index: React.SFC = () => {
  return (
    <>
      <Banner
        title="Pembrokeshire Activities"
        subtitle="Find your epic"
        body=""
        ctaText="Book Now"
        ctaLink="/contact-us"
        url="pembrokeshire-camping-coastal-view.jpg"
      />

      <FeatureLogo />

      <ContainerWrap invert>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              Activities in pembrokeshire
            </Typography>

            <Typography
              variant="body1"
              style={{ paddingTop: 10 }}
              component="h6"
              gutterBottom
            >
              {cc.f_1_1}
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
            title="The St Davids Cathedral"
            reverseOrder
            body={[cc.f_2_1, cc.f_2_2]}
            imageURL="/st-davids-cathedral.jpg"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <ImageText
            title="Walking in Pembrokeshire"
            body={[cc.f_3_1, cc.f_3_2, cc.f_3_3]}
            cta="dog"
            imageURL="/pembrokeshire-activities.jpg"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap>
        <Grid container spacing={5}>
          <ImageText
            title="Surfing in Pembrokeshire"
            reverseOrder
            body={[cc.f_4_1, cc.f_4_2, cc.f_4_3]}
            cta="dog"
            imageURL="/surfing-pembrokeshire.jpg"
          />
        </Grid>
      </ContainerWrap>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <ImageText
            title="Coasteering in Pembrokeshire"
            body={[cc.f_5_1, cc.f_5_2]}
            cta="dog"
            imageURL="/pembrokeshire-coasteering.jpg"
          />
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
  title: 'Pembrokeshire Activites: What to do in Pembrokeshire?',
};

export default withLayout(index, MetaData);
