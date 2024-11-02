import MainLayout from "../layouts/main_layout";

import advertisement from "../assets/advertisement.png"
import arrow from "../assets/arrow.png"
import comments from "../assets/comments.png"
import display from "../assets/display.png"
import feed_image_1 from "../assets/feed-image-1.png"

import feedback from "../assets/feedback.png"
import feeling from "../assets/feeling.png"
import friend from "../assets/friends.png"
import group from "../assets/group.png"
import help from "../assets/help.png"
import inbox from "../assets/inbox.png"
import like_blue from "../assets/like-blue.png"

import live_video from "../assets/live-video.png"
import logo from "../assets/logo.png"
import logout from "../assets/logout.png"
import marketplace from "../assets/marketplace.png"
import member_1 from "../assets/member-1.png"
import member_2 from "../assets/member-2.png"
import member_3 from "../assets/member-3.png"
import member_4 from "../assets/member-4.png"
import news from "../assets/news.png"
import notification from "../assets/notification.png"
import photo from "../assets/photo.png"
import profile_pic from "../assets/profile-pic.png"
import search from "../assets/search.png"
import setting from "../assets/setting.png"
import share from "../assets/share.png"
import upload from "../assets/upload.png"
import video from "../assets/video.png"
import watch from "../assets/watch.png"

import "../styles/Home.css"

const Home = () => {

    return (
        <>
            <MainLayout>
                <>
                    <div className="container">
                        <div className="left-sidebar">
                            <div className="imp-links">
                                <a href="#">
                                    <img src={news} />
                                    Latest news
                                </a>
                                <a href="#">
                                    <img src={friend} />
                                    Friends
                                </a>
                                <a href="#">
                                    <img src={group} />
                                    Groups
                                </a>
                                <a href="#">
                                    <img src={marketplace} />
                                    Marketplace
                                </a>
                                <a href="#">
                                    <img src={watch} />
                                    Watch
                                </a>
                                <a href="#">See More</a>
                            </div>
                          
                        </div>
                        <div className="main-content">
                            <div className="story-gallery">
                                <div className="story story1">
                                    <img src={upload} />
                                    <p>Post Story</p>
                                </div>
                                <div className="story story2">
                                    <img src={member_1} />
                                    <p>Alison</p>
                                </div>
                                <div className="story story3">
                                    <img src={member_2} />
                                    <p>Jackson</p>
                                </div>
                                <div className="story story4">
                                    <img src={member_3} />
                                    <p>Samona</p>
                                </div>
                                <div className="story story5">
                                    <img src={member_4} />
                                    <p>John</p>
                                </div>
                            </div>
                            <div className="write-post-container">
                                <div className="user-profile">
                                    <img src={profile_pic} />
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
                                            <img src={live_video} />
                                            Live Video
                                        </a>
                                        <a href="#">
                                            <img src={photo} />
                                            Photo/Video
                                        </a>
                                        <a href="#">
                                            <img src={feeling} />
                                            Feeling/Activity
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-container">
                                <div className="post-row">
                                    <div className="user-profile">
                                        <img src={profile_pic} />
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
                                <img src={feed_image_1} className="post-img" />
                                <div className="post-row">
                                    <div className="activity-icons">
                                        <div>
                                            <img src={like_blue} />
                                            120
                                        </div>
                                        <div>
                                            <img src={comments} />
                                            19
                                        </div>
                                        <div>
                                            <img src={share} />
                                            120
                                        </div>
                                    </div>
                                    <div className="post-profile-icon">
                                        <img src={profile_pic} />
                                        <i className="fas fa fa-caret-down" />
                                    </div>
                                </div>
                            </div>
                         
                            
                          
                            <button type="button" className="load-more-btn">
                                Load More
                            </button>
                        </div>
                        <div className="right-sidebar">
                            <img src={advertisement} className="sidebar-ads" />
                            <div className="sidebar-title">
                                <h4>Conversation</h4>
                                <a href="#">Hide Chat</a>
                            </div>
                            <div className="online-list">
                                <div className="online">
                                    <img src={member_1} />
                                </div>
                                <p>Alison Mina</p>
                            </div>
                            <div className="online-list">
                                <div className="online">
                                    <img src={member_2} />
                                </div>
                                <p>Jackson Aston</p>
                            </div>
                            <div className="online-list">
                                <div className="online">
                                    <img src={member_3} />
                                </div>
                                <p>Samona Rose</p>
                            </div>
                        </div>
                    </div>

                </>

            </MainLayout >
        </>
    )
}


export default Home;