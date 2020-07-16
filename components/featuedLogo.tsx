import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const testimonialIcon = (iconURL: string, alt:string) => (
  <Grid item xs={4} sm={2}>
    <img src={iconURL} style={{ width: '100%', maxWidth: '90px' }} alt={alt} />
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
      {testimonialIcon('cool-camping-logo.png', 'cool camping pembrokeshire camping')}
      {testimonialIcon('dm.png', 'daily mail pembrokeshire camping popularity')}
      {testimonialIcon('ng.png', 'national geographic glamping in pembrokeshire')}
      {testimonialIcon('tripadvisor.png', 'trip advisor pembrokeshire camping')}
      {testimonialIcon('red-bull-approved.png', 'red bull top uk campsites for adventure activites')}
      {testimonialIcon('tgo.png', 'the telepgrah on top pembrokeshire campsites')}
    </Grid>
  </Container>
);

export default featureLogo;
