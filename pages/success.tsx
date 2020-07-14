//@ts-ignore
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import ContainerWrap from '../components/containerWrap';
import Typography from '@material-ui/core/Typography';
import withLayout from '../components/withLayout';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';

const Success: NextPage = () => {
  const router = useRouter();
  let sessionParam = new URLSearchParams(router.asPath.split('?')[1]);
  let sessionId = sessionParam.get('session_id');
  const [session, setSession] = useState({});

  useEffect(() => {
    async function fetchSession() {
      setSession(
        await fetch('/api/checkout/checkout-session?sessionId=' + sessionId)
          .then(res => res.json())
          .then(res => res)
      );
    }

    fetchSession();
  }, [sessionId]);

  return (
    <>
      <ContainerWrap>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Bookings
            </Typography>

            <p>
              <pre>{JSON.stringify(session, null, 2)}</pre>
            </p>
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

export default withLayout(Success, MetaData);
