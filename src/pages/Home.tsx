import MainLayout from "../layouts/main_layout";

import advertisement from "../assets/advertisement.png"
import arrow from "../assets/arrow.png"
import comments from "../assets/comments.png"
import logo from "../assets/logo.png"


import "../styles/Home.css"

const Home = () => {

    return (
        <>
            <MainLayout>
                <>
                    <link rel="stylesheet" href="css/style.css" />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <nav>
                        <div className="nav-left">
                            <img src={logo} className="logo" />
                            <ul>
                                <li>
                                    <img src="../assets/notification.png" />
                                </li>
                                <li>
                                    <img src="../assets/inbox.png" />
                                </li>
                                <li>
                                    <img src="../assets/video.png" />
                                </li>
                            </ul>
                        </div>
                        <div className="nav-right">
                            <div className="search-box">
                                <img src="../assets/search.png" />
                                <input type="text" placeholder="Search" />
                            </div>
                            <div className="nav-user-icon online" 
                            // onclick="settingsMenuToggle();"
                            >
                                <img src="../assets/profile-pic.png" />
                            </div>
                        </div>
                        <div className="settings-menu">
                            <div id="dark-btn">
                                <span />
                            </div>
                            <div className="settings-menu-inner">
                                <div className="user-profile">
                                    <img src="../assets/profile-pic.png" />
                                    <div>
                                        <p>John Nicholson</p>
                                        <a href="#">See Your Profile</a>
                                    </div>
                                </div>
                                <hr />
                                <div className="user-profile">
                                    <img src="../assets/feedback.png" />
                                    <div>
                                        <p>Give Feedback</p>
                                        <a href="#">Help us to improve the new design</a>
                                    </div>
                                </div>
                                <hr />
                                <div className="settings-links">
                                    <img src="../assets/setting.png" className="settings-icon" />
                                    <a href="#">Settings &amp; Privacy</a>
                                    <img src="../assets/arrow.png" width="10px" />
                                </div>
                                <div className="settings-links">
                                    <img src="../assets/help.png" className="settings-icon" />
                                    <a href="#">Help &amp; Support</a>
                                    <img src="../assets/arrow.png" width="10px" />
                                </div>
                                <div className="settings-links">
                                    <img src="../assets/display.png" className="settings-icon" />
                                    <a href="#">Display &amp; Accessibility</a>
                                    <img src="../assets/arrow.png" width="10px" />
                                </div>
                                <div className="settings-links">
                                    <img src="../assets/logout.png" className="settings-icon" />
                                    <a href="#">Logout</a>
                                    <img src="../assets/arrow.png" width="10px" />
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="left-sidebar">
                            <div className="imp-links">
                                <a href="#">
                                    <img src="../assets/news.png" />
                                    Latest news
                                </a>
                                <a href="#">
                                    <img src="../assets/friends.png" />
                                    Friends
                                </a>
                                <a href="#">
                                    <img src="../assets/group.png" />
                                    Groups
                                </a>
                                <a href="#">
                                    <img src="../assets/marketplace.png" />
                                    Marketplace
                                </a>
                                <a href="#">
                                    <img src="../assets/watch.png" />
                                    Watch
                                </a>
                                <a href="#">See More</a>
                            </div>
                            <div className="shortcut-links">
                                <p>Your Shortcuts</p>
                                <a href="#">
                                    <img src="../assets/shortcut-1.png" />
                                    Web Developers
                                </a>
                                <a href="#">
                                    <img src="../assets/shortcut-2.png" />
                                    Web Design Course
                                </a>
                                <a href="#">
                                    <img src="../assets/shortcut-3.png" />
                                    Full Stact Development
                                </a>
                                <a href="#">
                                    <img src="../assets/shortcut-4.png" />
                                    Website Experts
                                </a>
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="story-gallery">
                                <div className="story story1">
                                    <img src="../assets/upload.png" />
                                    <p>Post Story</p>
                                </div>
                                <div className="story story2">
                                    <img src="../assets/member-1.png" />
                                    <p>Alison</p>
                                </div>
                                <div className="story story3">
                                    <img src="../assets/member-2.png" />
                                    <p>Jackson</p>
                                </div>
                                <div className="story story4">
                                    <img src="../assets/member-3.png" />
                                    <p>Samona</p>
                                </div>
                                <div className="story story5">
                                    <img src="../assets/member-4.png" />
                                    <p>John</p>
                                </div>
                            </div>
                            <div className="write-post-container">
                                <div className="user-profile">
                                    <img src="../assets/profile-pic.png" />
                                    <div>
                                        <p>John Nicholson</p>
                                        <small>
                                            Public
                                            <i className="fas fa fa-caret-down" />
                                        </small>
                                    </div>
                                </div>
                                <div className="post-input-container">
                                    <textarea
                                        rows={3}
                                        placeholder="What's on your mind, John?"
                                        defaultValue={""}
                                    />
                                    <div className="add-post-links">
                                        <a href="#">
                                            <img src="../assets/live-video.png" />
                                            Live Video
                                        </a>
                                        <a href="#">
                                            <img src="../assets/photo.png" />
                                            Photo/Video
                                        </a>
                                        <a href="#">
                                            <img src="../assets/feeling.png" />
                                            Feeling/Activity
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-container">
                                <div className="post-row">
                                    <div className="user-profile">
                                        <img src="../assets/profile-pic.png" />
                                        <div>
                                            <p>John Nicholson</p>
                                            <span>June 21 2021, 13:40</span>
                                        </div>
                                    </div>
                                    <a href="#">
                                        <i className="fa fa-ellipsis-v" />
                                    </a>
                                </div>
                                <p className="post-text">
                                    Subscribe <span>@LetsTryThis</span> YouTube Channel to watch more
                                    videos on website development and UI Designs.
                                    <a href="#">#letstrythis</a>
                                    <a href="#">#youtube</a>
                                </p>
                                <img src="../assets/feed-image-1.png" className="post-img" />
                                <div className="post-row">
                                    <div className="activity-icons">
                                        <div>
                                            <img src="../assets/like-blue.png" />
                                            120
                                        </div>
                                        <div>
                                            <img src="../assets/comments.png" />
                                            19
                                        </div>
                                        <div>
                                            <img src="../assets/share.png" />
                                            120
                                        </div>
                                    </div>
                                    <div className="post-profile-icon">
                                        <img src="../assets/profile-pic.png" />
                                        <i className="fas fa fa-caret-down" />
                                    </div>
                                </div>
                            </div>
                            <div className="post-container">
                                <div className="post-row">
                                    <div className="user-profile">
                                        <img src="../assets/member-2.png" />
                                        <div>
                                            <p>Jackson Aston</p>
                                            <span>June 21 2021, 3:40</span>
                                        </div>
                                    </div>
                                    <a href="#">
                                        <i className="fa fa-ellipsis-v" />
                                    </a>
                                </div>
                                <p className="post-text">
                                    Like and Share this video with your friends
                                    <a href="#">#letstrythis</a>
                                    <a href="#">#youtube</a>
                                </p>
                                <img src="../assets/feed-image-2.png" className="post-img" />
                                <div className="post-row">
                                    <div className="activity-icons">
                                        <div>
                                            <img src="../assets/like.png" />
                                            120
                                        </div>
                                        <div>
                                            <img src="../assets/comments.png" />
                                            19
                                        </div>
                                        <div>
                                            <img src="../assets/share.png" />
                                            120
                                        </div>
                                    </div>
                                    <div className="post-profile-icon">
                                        <img src="../assets/profile-pic.png" />
                                        <i className="fas fa fa-caret-down" />
                                    </div>
                                </div>
                            </div>
                            <div className="post-container">
                                <div className="post-row">
                                    <div className="user-profile">
                                        <img src="../assets/profile-pic.png" />
                                        <div>
                                            <p>John Nicholson</p>
                                            <span>June 21 2021, 13:40</span>
                                        </div>
                                    </div>
                                    <a href="#">
                                        <i className="fa fa-ellipsis-v" />
                                    </a>
                                </div>
                                <p className="post-text">
                                    Subscribe <span>@LetsTryThis</span> YouTube Channel to watch more
                                    videos on website development and UI Designs.
                                    <a href="#">#letstrythis</a>
                                    <a href="#">#youtube</a>
                                </p>
                                <img src="../assets/feed-image-3.png" className="post-img" />
                                <div className="post-row">
                                    <div className="activity-icons">
                                        <div>
                                            <img src="../assets/like.png" />
                                            120
                                        </div>
                                        <div>
                                            <img src="../assets/comments.png" />
                                            19
                                        </div>
                                        <div>
                                            <img src="../assets/share.png" />
                                            120
                                        </div>
                                    </div>
                                    <div className="post-profile-icon">
                                        <img src="../assets/profile-pic.png" />
                                        <i className="fas fa fa-caret-down" />
                                    </div>
                                </div>
                            </div>
                            <div className="post-container">
                                <div className="post-row">
                                    <div className="user-profile">
                                        <img src="../assets/profile-pic.png" />
                                        <div>
                                            <p>John Nicholson</p>
                                            <span>June 21 2021, 13:40</span>
                                        </div>
                                    </div>
                                    <a href="#">
                                        <i className="fa fa-ellipsis-v" />
                                    </a>
                                </div>
                                <p className="post-text" />
                                <img src="../assets/feed-image-4.png" className="post-img" />
                                <div className="post-row">
                                    <div className="activity-icons">
                                        <div>
                                            <img src="../assets/like.png" />
                                            120
                                        </div>
                                        <div>
                                            <img src="../assets/comments.png" />
                                            19
                                        </div>
                                        <div>
                                            <img src="../assets/share.png" />
                                            120
                                        </div>
                                    </div>
                                    <div className="post-profile-icon">
                                        <img src="../assets/profile-pic.png" />
                                        <i className="fas fa fa-caret-down" />
                                    </div>
                                </div>
                            </div>
                            <div className="post-container">
                                <div className="post-row">
                                    <div className="user-profile">
                                        <img src="../assets/profile-pic.png" />
                                        <div>
                                            <p>John Nicholson</p>
                                            <span>June 21 2021, 13:40</span>
                                        </div>
                                    </div>
                                    <a href="#">
                                        <i className="fa fa-ellipsis-v" />
                                    </a>
                                </div>
                                <p className="post-text">Meeting going on</p>
                                <img src="../assets/feed-image-5.png" className="post-img" />
                                <div className="post-row">
                                    <div className="activity-icons">
                                        <div>
                                            <img src="../assets/like.png" />
                                            120
                                        </div>
                                        <div>
                                            <img src="../assets/comments.png" />
                                            19
                                        </div>
                                        <div>
                                            <img src="../assets/share.png" />
                                            120
                                        </div>
                                    </div>
                                    <div className="post-profile-icon">
                                        <img src="../assets/profile-pic.png" />
                                        <i className="fas fa fa-caret-down" />
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="load-more-btn">
                                Load More
                            </button>
                        </div>
                        <div className="right-sidebar">
                            <div className="sidebar-title">
                                <h4>Events</h4>
                                <a href="#">See All</a>
                            </div>
                            <div className="event">
                                <div className="left-event">
                                    <h3>18</h3>
                                    <span>March</span>
                                </div>
                                <div className="right-event">
                                    <h4>Social Media</h4>
                                    <p>
                                        <i className="fa fa-map-marker" />
                                        Willson Tech Park
                                    </p>
                                    <a href="#">More Info</a>
                                </div>
                            </div>
                            <div className="event">
                                <div className="left-event">
                                    <h3>22</h3>
                                    <span>June</span>
                                </div>
                                <div className="right-event">
                                    <h4>Mobile Marketing</h4>
                                    <p>
                                        <i className="fa fa-map-marker" />
                                        Willson Tech Park
                                    </p>
                                    <a href="#">More Info</a>
                                </div>
                            </div>
                            <div className="sidebar-title">
                                <h4>Advertisement</h4>
                                <a href="#">Close</a>
                            </div>
                            <img src="../assets/advertisement.png" className="sidebar-ads" />
                            <div className="sidebar-title">
                                <h4>Conversation</h4>
                                <a href="#">Hide Chat</a>
                            </div>
                            <div className="online-list">
                                <div className="online">
                                    <img src="../assets/member-1.png" />
                                </div>
                                <p>Alison Mina</p>
                            </div>
                            <div className="online-list">
                                <div className="online">
                                    <img src="../assets/member-2.png" />
                                </div>
                                <p>Jackson Aston</p>
                            </div>
                            <div className="online-list">
                                <div className="online">
                                    <img src="../assets/member-3.png" />
                                </div>
                                <p>Samona Rose</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <p>Copyright 2021 - Lets Try This YouTube Channel</p>
                    </div>
                </>

            </MainLayout>
        </>
    )
}


export default Home;