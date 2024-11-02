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


export default function Header() {
  return (
    <nav>
      <div className="nav-left">
        <img src={logo} className="logo" />
        <ul>
          <li>
            <img src={notification} />
          </li>
          <li>
            <img src={inbox} />
          </li>
          <li>
            <img src={video} />
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="search-box">
          <img src={search} />
          <input type="text" placeholder="Search" />
        </div>
        <div
          className="nav-user-icon online"
          onClick={() => {
            const element = document.querySelector('.nav-user-icon.online');
            if (element) {
              element.classList.toggle('settings-menu-height');
            }
          }}
        >

          <img src={profile_pic} />
        </div>
      </div>
      <div className="settings-menu">
        <div id="dark-btn">
          <span />
        </div>
        <div className="settings-menu-inner">
          <div className="user-profile">
            <img src={profile_pic} />
            <div>
              <p>John Nicholson</p>
              <a href="#">See Your Profile</a>
            </div>
          </div>
          <hr />
          <div className="user-profile">
            <img src={feedback} />
            <div>
              <p>Give Feedback</p>
              <a href="#">Help us to improve the new design</a>
            </div>
          </div>
          <hr />
          <div className="settings-links">
            <img src={setting} className="settings-icon" />
            <a href="#">Settings &amp; Privacy</a>
            <img src={arrow} width="10px" />
          </div>
          <div className="settings-links">
            <img src={help} className="settings-icon" />
            <a href="#">Help &amp; Support</a>
            <img src={arrow} width="10px" />
          </div>
          <div className="settings-links">
            <img src={display} className="settings-icon" />
            <a href="#">Display &amp; Accessibility</a>
            <img src={arrow} width="10px" />
          </div>
          <div className="settings-links">
            <img src={logout} className="settings-icon" />
            <a href="#">Logout</a>
            <img src={arrow} width="10px" />
          </div>
        </div>
      </div>
    </nav>
  );
}