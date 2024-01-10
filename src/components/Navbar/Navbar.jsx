import React, { useState } from "react";
import "./Navbar.css";
import { HamburgetMenuClose,HamburgetMenuOpen, YoutubeIconsrc, FacebookIconsrc, InstaIcon, TwitterIcon} from "../../svg/svg";


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
            <span className="top-right-text">Call or Text Us Today (480) 940-1201</span>
          <ul className="nav-menu">
            <li className="nav-item">
              
            Careers
            </li>
            <li className="nav-item">
              
            Login
            </li>
            <li className="nav-item">
              
                <YoutubeIconsrc />
            </li>
            <li className="nav-item">
              
                <FacebookIconsrc />
            </li>
            <li className="nav-item">
              
              <InstaIcon />
          </li>
          <li className="nav-item">
              
              <TwitterIcon />
          </li>
          </ul>
          {/* <div className="nav-icon" onClick={handleClick}>
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

export default NavBar;