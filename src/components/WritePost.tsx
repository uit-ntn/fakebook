import feeling from "../assets/feeling.png"
import live_video from "../assets/live-video.png"
import photo from "../assets/photo.png"
import profile_pic from "../assets/profile-pic.png"
import "../styles/WritePost.css"

const WritePost = () => {
    return (
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
    )
}

export default WritePost;