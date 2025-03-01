import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom';

const pages = ['Home', 'Services', 'Blog', 'About', 'Contact'];
const settings = ['Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const location = useLocation(); // Get current location

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getButtonStyle = (page) => {
    // Add active class styling for the button
    const isActive = location.pathname === `/${page.toLowerCase()}`;
    return {
      color: isActive ? '#ff5d1b' : 'white', // Active color
      textTransform: 'none',
      padding: '5px 16px',
      borderBottom: isActive ? '2px solid #ff5d1b' : 'none', // Active underline
      fontSize: 'medium', // Set font size to medium
      fontFamily: '"Changa", sans-serif', // Updated font-family
    };
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: "#000", 
        marginLeft: -1, 
        marginRight: -1, 
        width: 'auto', 
        marginTop: '-8px', 
        fontFamily: '"Changa", sans-serif' // Updated font-family
      }}
    >
      <Container maxWidth="xl" sx={{ paddingLeft: 0, paddingRight: 0, paddingTop:'5px', paddingBottom:'5px' }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo Image */}
            <img
              src="https://i.ibb.co/gMKsF5Fd/image-1.webp"
              alt="Logo"
              style={{
                height: '70px',
                marginRight: '10px',
                padding: '15px',
                objectFit: 'contain',
              }}
            />

            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 3 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={getButtonStyle(page)} // Apply the dynamic style
                >
                  <Link to={`/${page.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Typography sx={{ textAlign: 'center', fontSize: 'medium', fontWeight: '500', fontFamily: '"Changa", sans-serif' }}>
                      {page}
                    </Typography>
                  </Link>
                </Button>
              ))}
            </Box>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Typography sx={{ textAlign: 'center', fontSize: 'medium', fontWeight: '500', fontFamily: '"Changa", sans-serif' }}>
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Right Section with Profile and Track Order Button */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Track Order Button, visible only on larger screens */}
            <Button
              sx={{
                backgroundColor: '#ff5d1b',
                borderRadius: '35px',
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'none',
                padding: '8px 40px',
                marginRight: 4,
                '&:hover': {
                  backgroundColor: '#ff5d1b',
                },
                display: { xs: 'none', sm: 'inline-flex' },
                fontSize: 'smaller', // Set font size to medium
                fontFamily: '"Changa", sans-serif' // Updated font-family
              }}
              component={Link}
              to="/track-order"
            >
              TRACK ORDER
            </Button>

            {/* User Profile */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="https://i.ibb.co/Rk2BPS67/ssmvtnogc7ue0jufjd03h6mj89.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to={`/${setting.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Typography sx={{ textAlign: 'center', fontSize: 'medium', fontWeight: '500', fontFamily: '"Changa", sans-serif' }}>
                      {setting}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
