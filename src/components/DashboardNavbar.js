import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar as MuiAppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';

const drawerWidth = 240;

// Style
const DashboardNavbar = ({
  onMobileNavOpen, drawerWidth, handleToggle, ...rest
}) => {
  const [notifications] = useState([]);

  const AppBar = useMemo(() => styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => {
    const r = ({
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    });
    console.log('opeennn', open, r, theme.transitions.duration);
    return r;
  }), []);

  const StyledIconButton = styled(IconButton)`
    width: 40px;
    height: 40px;
    box-shadow: 0 2px 40px -5px #2196f3;
    background-color: #E3F2FD;
    color: #2196F3;
  `;

  return (
    <AppBar
      elevation={0}
      {...rest}
      position="fixed"
    >
      <Toolbar>
        <StyledIconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleToggle}
          edge="start"
          // sx={{
          //   marginRight: '36px',
          //   ...(open && { display: 'none' }),
          // }}
        >
          <MenuIcon />
        </StyledIconButton>
        {/* <RouterLink to="/">
          <Logo />
        </RouterLink> */}
        <Box sx={{ flexGrow: 1 }} />
        <Hidden xlDown>
          <IconButton color="inherit" size="large">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" size="large">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
  drawerWidth: PropTypes.number,
};

export default DashboardNavbar;
