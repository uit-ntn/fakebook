
import comments from "../assets/comments.png"
import feed_image_1 from "../assets/feed-image-1.png"
import like_blue from "../assets/like-blue.png"
import profile_pic from "../assets/profile-pic.png"
import share from "../assets/share.png"
import "../styles/PostItem.css"

const PostItem = () => {

    return <>
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
    </>
}

export default PostItem;