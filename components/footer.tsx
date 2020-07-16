import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ContainerWrap from '../components/containerWrap';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    marginBottom: 0,
  },
});

const testimonialIcon = (iconURL: string, link: string) => (
  <Grid item xs={4} sm={2}>
    <a href={link}>
      <img src={iconURL} style={{ height: '24px', width: '24px' }} />
    </a>
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
      {testimonialIcon('camping-facebook.png', 'http://www.facebook.com/coastalstay')}
      {testimonialIcon('camping-twitter.png', 'http://www.twitter.com/staycoastal')}
      {testimonialIcon('camping-instagram.png', 'http://www.instagram.com/coastalstay')}
      {testimonialIcon('camping-telegram.png', 'mailto:info@coastalstay.co.uk')}
    </Grid>
  </Container>
);

const Footer: React.SFC = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ContainerWrap invert>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography style={{ marginTop: 10 }} variant="h5" gutterBottom>
            <a href="/glamping-pembrokeshire">Glamping in Pembrokeshire</a>
            </Typography>
            <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
              We've setup our campsite so that each designated pitches has been thoughtfully planned, each pitch has enough room to fully spread out and feel the freedom.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography style={{ marginTop: 10 }} variant="h5" gutterBottom>
          <a href="/pembrokeshire-camping">Pemrokeshire Camping</a>
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            There's a reason that <a href="/pembrokeshire-camping">Pembrokeshire camping</a> is so popular, camping near the sea with views overlooking the coast
          </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography style={{ marginTop: 10 }} variant="h5" gutterBottom>
          <a href="/pembrokeshire-activities">Pemrokeshire Activites</a>
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            Our campsite was voted as one of the <a href="https://www.redbull.com/gb-en/beachside-campsites-in-uk">top campsites in the UK</a> for adventure activites and it's a great base to visit the Pembrokeshire activites and attractions.
          </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography style={{ marginTop: 10 }} variant="h5" gutterBottom>
          <a href="/contact-us">Get in touch</a>
          </Typography>
          <Typography style={{ marginTop: 10 }} variant="body2" gutterBottom>
            If this all sounds good, <a href="/contact-us">contact us</a> before we are fully booked! You can also call on 01348 837822.
          </Typography>
          </Grid>
        </Grid>
        
      </ContainerWrap>

      
      <Container>
      <Grid item xs={12}>
      <Typography style={{ marginTop: 20   }} align="center" variant="body1">
        {featureLogo()}
      </Typography>
      <Divider style={{ marginTop: 0 }} />
      </Grid>
      <Grid item xs={12}>
        <Typography style={{ marginTop: 20, textAlign: "center", marginBottom: 10 }} variant="body2" gutterBottom>
            Email: info@coastalstay.co.uk  -  Address: Coastal Stay, Llanrhian, Pembrokeshire, SA626DP. 
        </Typography>
        </Grid>
    </Container>
    </div>
  );
};

export default Footer;
