import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: 80,
    marginBottom: 20,
  },
});

const Footer: React.SFC = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography align="center" variant="body1">
        Copyright Coastal Stay 2020
      </Typography>
    </div>
  );
};

export default Footer;
