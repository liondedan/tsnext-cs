import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

export default featureSection;
