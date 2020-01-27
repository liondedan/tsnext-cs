import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';

const Logo = styled.img`
  flex-grow: 1;
  height: 50px;
  width: 68px;
`;

const LogoWrap = styled.div`
  flex-grow: 1;
  height: 50px;
  width: 68px;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {},
    MuiPaper: {
      background: 'transparent',
      boxShadow: 'none',
    },
    button: {
      marginLeft: '16px',
      color: 'white',
    },
  })
);

const ButtonAppBar: React.SFC = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.MuiPaper}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <LogoWrap>
            <Logo
              style={{ height: 50 }}
              src="coastal-stay-logo-white-min.png"
            />
          </LogoWrap>
          <Typography>
            <Link
              href="#"
              className={classes.button}
              color="inherit"
              variant="body2"
            >
              Home
            </Link>
            <Link
              href="#"
              className={classes.button}
              color="inherit"
              variant="body2"
            >
              Pembrokeshire Camping
            </Link>
            <Link
              href="#"
              className={classes.button}
              color="inherit"
              variant="body2"
            >
              Glamping
            </Link>
            <Link
              href="#"
              color="inherit"
              className={classes.button}
              variant="body2"
            >
              Book Now
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
