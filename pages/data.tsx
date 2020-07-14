import React from 'react';
import useAuth from '../hooks/useAuth';
import useCheckAvailability from '../hooks/useCheckAvailability';
import Calendar from '../components/Calendar/index';
import ContainerWrap from '../components/containerWrap';
import Typography from '@material-ui/core/Typography';
import withLayout from '../components/withLayout';
import Grid from '@material-ui/core/Grid';

const index: React.SFC = () => {
  useAuth();

  const { result, error, loading } = useCheckAvailability();

  return (
    <>
      <ContainerWrap>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Bookings
            </Typography>
            {result && <Calendar bookingData={result} />}
            {error && error}
            {loading && loading}

            <Typography
              variant="body1"
              style={{ paddingTop: 10 }}
              component="h6"
              gutterBottom
            ></Typography>
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
