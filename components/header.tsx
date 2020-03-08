import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { Hidden } from '@material-ui/core';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
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
    mobileLink: {
      color: 'rgb(72, 72, 72)',
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
  const route = useRouter();
  const [state, setState] = React.useState({
    open: false,
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (url: string) => {
    route.push(url);
    handleClose();
  };

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

  const sideList = () => (
    <div
      style={{ width: '250px' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link className={classes.mobileLink} href="/">
          <ListItem button>Home</ListItem>
        </Link>
        <Link className={classes.mobileLink} href="/pembrokeshire-camping">
          <ListItem button>Pembrokeshire Camping</ListItem>
        </Link>
        <Link className={classes.mobileLink} href="/glamping-pembrokeshire">
          <ListItem button>Glamping Camping</ListItem>
        </Link>
        <Link className={classes.mobileLink} href="/pricing">
          <ListItem button>Pricing</ListItem>
        </Link>
        <Link className={classes.mobileLink} href="/pembrokeshire-activities">
          <ListItem button>Pembrokeshire Activities</ListItem>
        </Link>
        //{' '}
        <Link className={classes.mobileLink} href="/location">
          // <ListItem button>Location</ListItem>
          //{' '}
        </Link>
        <Divider />
        <Link className={classes.mobileLink} href="/contact-us">
          <ListItem button>Book Now</ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Drawer open={state.open} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
      <AppBar position="absolute" className={classes.MuiPaper}>
        <Toolbar>
          <Hidden smUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
              style={{ color: 'white' }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <LogoWrap>
            <Link
              href="/"
              className={classes.button}
              color="inherit"
              variant="body2"
            >
              <Logo
                style={{ height: 50 }}
                src="coastal-stay-logo-white-min.png"
              />
            </Link>
          </LogoWrap>
          <Hidden only="xs">
            <Typography>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleOptionClick('/pricing')}>
                  Pricing
                </MenuItem>
                <MenuItem
                  onClick={() => handleOptionClick('/pembrokeshire-activities')}
                >
                  Pembrokeshire Adventure
                </MenuItem>
                //{' '}
                <MenuItem onClick={() => handleOptionClick('/location')}>
                  // Location //{' '}
                </MenuItem>
              </Menu>
              <Link
                href="/"
                className={classes.button}
                color="inherit"
                variant="body2"
              >
                Home
              </Link>
              <Link
                href="/pembrokeshire-camping"
                className={classes.button}
                color="inherit"
                variant="body2"
              >
                Pembrokeshire Camping
              </Link>
              <Link
                href="/glamping-pembrokeshire"
                className={classes.button}
                color="inherit"
                variant="body2"
              >
                Glamping
              </Link>
              <Link
                href="#"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                className={classes.button}
                color="inherit"
                variant="body2"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                Information
              </Link>
              <Link
                href="/contact-us"
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
