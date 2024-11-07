import { Link } from "react-router-dom"
import arrow from "../assets/arrow.png"
import display from "../assets/display.png"
import feedback from "../assets/feedback.png"
import help from "../assets/help.png"
import inbox from "../assets/inbox.png"
import logo from "../assets/logo.png"
import logout from "../assets/logout.png"
import notification from "../assets/notification.png"
import profile_pic from "../assets/profile-pic.png"
import search from "../assets/search.png"
import setting from "../assets/setting.png"
import video from "../assets/video.png"
import "../styles/Header.css"
import { Box, Typography } from "@mui/material"


export default function Header() {
  const toggleMenu = () => {
    const settingsMenu = document.querySelector('.settings-menu');
    if (settingsMenu) {
      settingsMenu.classList.toggle('settings-menu-height');
    }
  };

  return (
    <nav>
      <Box className="nav-left">
        <img src={logo} className="logo" alt="Logo" />
        <ul>
          <li><img src={notification} alt="Notification" /></li>
          <li>
            <Link to="/chat">
              <img src={inbox} alt="Inbox" />
            </Link>
          </li>
          <li><img src={video} alt="Video" /></li>
        </ul>
      </Box>
      <Box className="nav-right">
        <Box className="search-box">
          <img src={search} alt="Search" />
          <input type="text" placeholder="Search" />
        </Box>
        <Box className="nav-user-icon online" onClick={toggleMenu}>
          <img src={profile_pic} alt="User Profile" />
        </Box>
      </Box>
      <Box className="settings-menu">
        <Box id="dark-btn"><span /></Box>
        <Box className="settings-menu-inner">
          <Box className="user-profile">
            <img src={profile_pic} alt="Profile" />
            <Box>
              <Typography>John Nicholson</Typography>
              <Link to="#">See Your Profile</Link>
            </Box>
          </Box>
          <hr />
          <Box className="user-profile">
            <img src={feedback} alt="Feedback" />
            <Box>
              <Typography>Give Feedback</Typography>
              <Link to="#">Help us to improve the new design</Link>
            </Box>
          </Box>
          <hr />
          <Box className="settings-links">
            <img src={setting} className="settings-icon" alt="Settings" />
            <Link to="#">Settings &amp; Privacy</Link>
            <img src={arrow} width="10px" alt="Arrow" />
          </Box>
          <Box className="settings-links">
            <img src={help} className="settings-icon" alt="Help" />
            <Link to="#">Help &amp; Support</Link>
            <img src={arrow} width="10px" alt="Arrow" />
          </Box>
          <Box className="settings-links">
            <img src={display} className="settings-icon" alt="Display" />
            <Link to="#">Display &amp; Accessibility</Link>
            <img src={arrow} width="10px" alt="Arrow" />
          </Box>
          <Box className="settings-links">
            <img src={logout} className="settings-icon" alt="Logout" />
            <Link to="#">Logout</Link>
            <img src={arrow} width="10px" alt="Arrow" />
          </Box>
        </Box>
      </Box>
    </nav>
  );
}