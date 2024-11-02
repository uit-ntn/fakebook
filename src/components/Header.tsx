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


export default function Header() {
  const toggleMenu = () => {
    const settingsMenu = document.querySelector('.settings-menu');
    if (settingsMenu) {
      settingsMenu.classList.toggle('settings-menu-height');
    }
  };

  return (
    <nav>
      <div className="nav-left">
        <img src={logo} className="logo" alt="Logo" />
        <ul>
          <li><img src={notification} alt="Notification" /></li>
          <li><img src={inbox} alt="Inbox" /></li>
          <li><img src={video} alt="Video" /></li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="search-box">
          <img src={search} alt="Search" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-user-icon online" onClick={toggleMenu}>
          <img src={profile_pic} alt="User Profile" />
        </div>
      </div>
      <div className="settings-menu">
        <div id="dark-btn"><span /></div>
        <div className="settings-menu-inner">
          <div className="user-profile">
            <img src={profile_pic} alt="Profile" />
            <div>
              <p>John Nicholson</p>
              <a href="#">See Your Profile</a>
            </div>
          </div>
          <hr />
          <div className="user-profile">
            <img src={feedback} alt="Feedback" />
            <div>
              <p>Give Feedback</p>
              <a href="#">Help us to improve the new design</a>
            </div>
          </div>
          <hr />
          <div className="settings-links">
            <img src={setting} className="settings-icon" alt="Settings" />
            <a href="#">Settings &amp; Privacy</a>
            <img src={arrow} width="10px" alt="Arrow" />
          </div>
          <div className="settings-links">
            <img src={help} className="settings-icon" alt="Help" />
            <a href="#">Help &amp; Support</a>
            <img src={arrow} width="10px" alt="Arrow" />
          </div>
          <div className="settings-links">
            <img src={display} className="settings-icon" alt="Display" />
            <a href="#">Display &amp; Accessibility</a>
            <img src={arrow} width="10px" alt="Arrow" />
          </div>
          <div className="settings-links">
            <img src={logout} className="settings-icon" alt="Logout" />
            <a href="#">Logout</a>
            <img src={arrow} width="10px" alt="Arrow" />
          </div>
        </div>
      </div>
    </nav>
  );
}