import React from 'react';
import ContainerWrap from '../components/containerWrap';
import withLayout from '../components/withLayout';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// @ts-ignore
import { faWater, faTrophy, faLeaf } from '@fortawesome/free-solid-svg-icons';
/* import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'; */

/* const useStyles = makeStyles((theme: Theme) => */
/*   createStyles({ */
/*     root: { */
/*       '& > *': { */
/*         margin: theme.spacing(1), */
/*         display: 'flex', */
/*         flexWrap: 'wrap', */
/*       }, */
/*     }, */
/*     input: { */
/*       marginBottom: 30, */
/*       width: '100%', */
/*     }, */
/*     datePicker: {}, */
/*   }) */
/* ); */

const index: React.SFC = () => {
  /* const classes = useStyles(); */

  return (
    <>
      <ContainerWrap>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={8}>
            <Typography
              style={{ marginBottom: 50 }}
              variant="body1"
              component="h5"
            >
              <Typography style={{ marginTop: 10 }} variant="h4" gutterBottom>
                Bank Transfer Details
              </Typography>
              <p>
                <strong>Account Name:</strong> Mrs Marilyn Macalast
              </p>
              <p>
                <strong>Sort Code: </strong> 20-37-82
              </p>
              <p>
                <strong>Account No.</strong> 20964395
              </p>
            </Typography>
          </Grid>
        </Grid>
      </ContainerWrap>
    </>
  );
};

const MetaData = {
  title: 'Payment Info',
  url: 'www.coastalstay.co.uk/payment-info',
  description:
    'Payment Information, pay for your pitch to reserve your booking',
};

export default withLayout(index, MetaData, true);
