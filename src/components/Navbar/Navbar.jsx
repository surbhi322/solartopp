// import React, { useState } from "react";
// import "./Navbar.css";
// import { HamburgetMenuClose,HamburgetMenuOpen, YoutubeIconsrc, FacebookIconsrc, InstaIcon, TwitterIcon} from "../../svg/svg";
// import useMediaQuery  from '@mui/material/useMediaQuery';

// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//             <span className="top-right-text">Call or Text Us Today (480) 940-1201</span>
//           <ul className="nav-menu">
//             <li className="nav-item">
              
//             Careers
//             </li>
//             <li className="nav-item">
              
//             Login
//             </li>
//             <li className="nav-item">
              
//                 <YoutubeIconsrc />
//             </li>
//             <li className="nav-item">
              
//                 <FacebookIconsrc />
//             </li>
//             <li className="nav-item">
              
//               <InstaIcon />
//           </li>
//           <li className="nav-item">
              
//               <TwitterIcon />
//           </li>
//           </ul>
//           {/* <div className="nav-icon" onClick={handleClick}>
//             {click ? (
//               <span className="icon">
//                 <HamburgetMenuOpen />{" "}
//               </span>
//             ) : (
//               <span className="icon">
//                 <HamburgetMenuClose />
//               </span>
//             )}
//           </div> */}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;


import * as React from 'react';
import "./Navbar.css";
import {
    HamburgetMenuClose,
    HamburgetMenuOpen,
    YoutubeIconsrc,
    FacebookIconsrc,
    InstaIcon,
    TwitterIcon,
    SolarIcon
} from "../../svg/svg";
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
import useMediaQuery from '@mui/material/useMediaQuery';
import AdbIcon from '@mui/icons-material/Adb';


const pages = ['Call or Text Us Today (480) 940-1201'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MainNavbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    return (
        <AppBar position="static" sx={{ backgroundColor: '#015030', color: "black" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        {/* <SolarIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                        <span className="top-right-textMain">SOLAR TOPPS</span> */}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'black' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
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
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                color: "#6A6A6A"
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ color: 'black' }}>
                                    <Typography textAlign="center" sx={{ color: '#6A6A6A' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {/* <SolarIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                        <span className="top-right-textMain">SOLAR TOPPS</span> */}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#FFFF', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip>
                            <IconButton  sx={{ p: 0 }}>
                                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                                <Box className="nav-item">

                                    Career
                                </Box>
                                <Box className="nav-item">

                                Login
                                </Box>
                                <Box className="nav-item">

                                <YoutubeIconsrc />
                                </Box>

                                <Box className="nav-item">

                                <FacebookIconsrc />
                                </Box>
                                <Box className="nav-item">

                                <InstaIcon />
                                </Box>
                                <Box className="nav-item">

                                <TwitterIcon />
                                </Box>



                            </IconButton>
                        </Tooltip>
                        {/* <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default MainNavbar;


