import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
const featureLogo = () => (
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
);

export default featureLogo;
