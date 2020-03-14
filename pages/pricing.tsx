import React from 'react';
import TitleBlock from '../components/titleBlock';
import IconFont from '../components/iconFont';
import ContainerWrap from '../components/containerWrap';
import FeatureLogo from '../components/featuedLogo';
import PricingTable from '../components/pricingTable';
import Typography from '@material-ui/core/Typography';
import Banner from '../components/banner';
import cc from '../content/camping';
import withLayout from '../components/withLayout';
import Grid from '@material-ui/core/Grid';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const index: React.SFC = () => {
  return (
    <>
      <Banner
        title="Our Camping Prices"
        subtitle="Camping in West Wales"
        body="Providing just enough luxury to keep you comfortable and content, but not too much that you forget you’re camping in nature"
        ctaText="Book Now"
        ctaLink="/contact-us"
        url="pembrokeshire-camping-coastal-view.jpg"
      />
      <FeatureLogo />
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <PricingTable />
        </Grid>
      </ContainerWrap>
      <ContainerWrap>
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
