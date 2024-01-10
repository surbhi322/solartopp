import React, { useState } from "react";
import "./MainNavbar.css";
import {
    HamburgetMenuClose,
    HamburgetMenuOpen,
    YoutubeIconsrc,
    FacebookIconsrc,
    InstaIcon,
    TwitterIcon,
    SolarIcon
} from "../../svg/svg";


function MainNavbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbarMain">
                <div className="navMain-container">
                    <div style={{ display: 'flex' }}>
                        <SolarIcon />
                        <span className="top-right-textMain">SOLAR TOPPS</span>
                    </div>
                    <ul className="navMain-menu">
                        <li className="navMain-item">

                            Residential
                        </li>
                        <li className="navMain-item">

                            Commercial
                        </li>
                        <li className="navMain-item">

                            Products
                        </li>
                        <li className="navMain-item">

                            Dealer Network
                        </li>
                        <li className="navMain-item">

                            Services
                        </li>
                        <li className="navMain-item">

                            Resources
                        </li>
                        <li className="navMain-item">

                            About Us
                        </li>
                        <li className="navMain-item">

                            Contact Us
                        </li>
                    </ul>
                    <ul className={click ? "navMain-menu active" : "navMain-menu"}>
                        <li className="navMain-item-left">

                        Schedule a Free Consultation
                        </li>
                        <li className="">

                            <button  className="navMain-item-button">Free Quote</button>
                        </li>
                    </ul>
                    {/* <div className="navMain-icon" onClick={handleClick}>
                        {click ? (
                            <span className="icon">
                                <HamburgetMenuOpen />{" "}
                            </span>
                        ) : (
                            <span className="icon">
                                <HamburgetMenuClose />
                            </span>
                        )}
                    </div> */}
                </div>
            </nav>
        </>
    );
}

export default MainNavbar;