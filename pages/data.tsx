import React from 'react';
import useAuth from '../hooks/useAuth';
import ContainerWrap from '../components/containerWrap';
import Typography from '@material-ui/core/Typography';
import withLayout from '../components/withLayout';
import Grid from '@material-ui/core/Grid';

const index: React.SFC = () => {
  useAuth();
  return (
    <>
      <ContainerWrap>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              Cats
            </Typography>

            <Typography
              variant="body1"
              style={{ paddingTop: 10 }}
              component="h6"
              gutterBottom
            >
              Dogs
            </Typography>
          </Grid>
        </Grid>
      </ContainerWrap>
    </>
  );
};

const MetaData = {
  title: 'Data',
};

export default withLayout(index, MetaData);
