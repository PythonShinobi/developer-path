// client/src/navbar/Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

import "./Navbar.css";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation(); // Get the current location pathname

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Function to check if a link is active based on pathname
  const isLinkActive = (link) => {
    return location.pathname === link;
  };

  return (
    <div className='nav-container'>
      <AppBar position="fixed" sx={{ top: 0, bgcolor: '#263238', boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', paddingLeft: '16px', paddingRight: '16px' }}>
          {/* Logo */}
          <Typography variant="h6" component="div">
            <Button color="inherit" component={Link} to="/" sx={{ fontSize: '1.1rem', color: '#FFC107' }}>Developer Path</Button>
          </Typography>
          {/* Menu Icon for Mobile */}
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: 'block', md: 'none' } }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
          {/* Desktop Menu */}
          {!isMobile && (
            <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button color="inherit" component={Link} to="/" sx={isLinkActive('/') ? { fontWeight: 'bold', color: '#FFC107' } : { color: '#FFF' }}>Home</Button>
              <Button color="inherit" component={Link} to="/developer-paths" sx={isLinkActive('/developer-paths') ? { fontWeight: 'bold', color: '#FFC107' } : { color: '#FFF' }}>Careers</Button>
              <Button color="inherit" component={Link} to="/about" sx={isLinkActive('/about') ? { fontWeight: 'bold', color: '#FFC107' } : { color: '#FFF' }}>About</Button>
              <Button color="inherit" component={Link} to="/contact" sx={isLinkActive('/contact') ? { fontWeight: 'bold', color: '#FFC107' } : { color: '#FFF' }}>Contact</Button>
            </div>
          )}
          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem component={Link} to="/" sx={isLinkActive('/') ? { fontWeight: 'bold', color: '#FFC107' } : { color: '#263238' }} onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem component={Link} to="/developer-paths" sx={isLinkActive('/developer-paths') ? { fontWeight: 'bold', color: '#FFC107' } : { color: '#263238' }} onClick={handleMenuClose}>Careers</MenuItem>
            <MenuItem component={Link} to="/about" sx={isLinkActive('/about') ? { fontWeight: 'bold', color: '#FFC107' } : { color: '#263238' }} onClick={handleMenuClose}>About</MenuItem>
            <MenuItem component={Link} to="/contact" sx={isLinkActive('/contact') ? { fontWeight: 'bold', color: '#FFC107' } : { color: '#263238' }} onClick={handleMenuClose}>Contact</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
