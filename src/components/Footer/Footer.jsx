// Footer.js
import React from 'react';
import './Footer.css';
import { APlus, BIcon, FacebookIconsrc, InstaIcon, Location, NABCEP, Phone, SolarWhiteSvg, TwitterIcon, YoutubeIconsrc } from '../../svg/svg';
import { Box } from '@mui/material';
// import { Tesla } from './assets/Images/Tesla.png'
// import teslaLogo from '../assets/Images/Tesla.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div style={{ display: 'flex', flexWrap:'wrap' }}>
                        <div style={{ marginTop: "13px" }}><SolarWhiteSvg /></div>
                        <h4 style={{ color: "#FFFFFF" }}>SOLAR TOPPS</h4>
                    </div>
                    <ul>
                        <li>
                            <div style={{ display: "flex" }}>
                                <Phone />
                                <span style={{ color: "#F6992E", marginLeft: "5px" }}>(480) 940-1201</span>
                            </div>
                        </li>
                        <li>102 S. 28th St.,
                            Phoenix, AZ 85034</li>
                        <li>
                            <div style={{ display: "flex" }}>
                                <Location />
                                <span style={{ color: "#F6992E", marginLeft: "5px" }}>Get Directions</span>
                            </div>
                        </li>
                        <li><NABCEP /></li>
                        <li>
                            <img src='/Images/Clip path group.png' alt="BBB" />
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 style={{ color: "#F6992E" }}>Everything Topps</h4>
                    <ul>
                        <li>Residential</li>
                        <li>Commercial</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li><h4 style={{ color: "#F6992E" }}>Opportunities</h4></li>
                        <li>Careers</li>
                        <li>Join Dealer Network</li>

                    </ul>
                </div>
                <div className="footer-section">
                    <h4 style={{ color: "#F6992E" }}>Resources</h4>
                    <ul>
                        <li>FAQs</li>
                        <li>Blogs</li>
                        <li>Projects</li>
                        <li>Topps Talk</li>
                        <li><h4 style={{ color: "#F6992E" }}>Our Customers</h4></li>
                        <li>Reviews</li>
                        <li>Customer Spotlight</li>

                    </ul>
                </div>
                <div className="footer-section">
                    <h4 style={{ color: "#F6992E" }}>Services</h4>
                    <ul>
                        <li>Removal and Reinstall</li>
                        <li>Roof Leak Investigation</li>
                        <li>Adding to an Existing System</li>
                        <li>Maintenance and Repair</li>
                        <li>Major Component Replacement</li>
                        <li>System Troubleshooting</li>
                        <li>System Inspection</li>
                        <li>Pest Abatement</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 style={{ color: "#F6992E" }}>Contact Us</h4>
                    <ul>
                        <li>Make a Referral</li>
                        <li>Leave a Review</li>
                        <li>Project Update</li>
                        <li>Support Request</li>
                        <li>Billing Inquiry</li>
                        <li>Transfer System</li>
                        <li>UCC Request</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-logo d-flex " style={{ display: 'flex', flexWrap:'wrap' }}>
                   <Box> <img className='footer-images' src="/Images/Tesla.png" alt="Tesla Logo" /></Box>
                   <Box> <img className='footer-images' src="/Images/ein-gold-badge.png" alt="Tesla Logo" /></Box>
                   <Box><img className='footer-images' src="/Images/REC-certified.png" alt="Tesla Logo" /></Box>
                   <Box><img className='footer-images' src="/Images/SEIA-logo.png" alt="Tesla Logo" /></Box>
                   <Box><img className='footer-images' src="/Images/srp-solar.png" alt="Tesla Logo" /></Box>
                </div>
            </div>
            <div className="footer-bottom">
                <Box sx={{ gap: '8px', display:"flex" }} >



                    <Box>
                        <YoutubeIconsrc />
                    </Box>

                    <Box>   <FacebookIconsrc /></Box>


                    <Box>   <InstaIcon /></Box>


                    <Box>  <TwitterIcon /></Box>
                  <Box>  © 2023 Solar Topps LLC, All Rights Reserved | AZ ROC 264968 </Box>

                </Box>
                

                <div className="footer-links">
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
