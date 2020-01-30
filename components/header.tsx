import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

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
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <div className={classes.root}>
      <Drawer open={state.open} onClose={toggleDrawer(false)}>
        content
      </Drawer>
      <AppBar position="absolute" className={classes.MuiPaper}>
        <Toolbar>
          <Hidden smUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <LogoWrap>
            <Logo
              style={{ height: 50 }}
              src="coastal-stay-logo-white-min.png"
            />
          </LogoWrap>
          <Hidden only="xs">
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
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
