import { Box } from "@mui/material"
import feeling from "../assets/feeling.png"
import live_video from "../assets/live-video.png"
import photo from "../assets/photo.png"
import profile_pic from "../assets/profile-pic.png"
import "../styles/WritePost.css"
import { Link } from "react-router-dom"

const WritePost = () => {
    return (
        <Box className="write-post-container">
            <Box className="user-profile">
                <img src={profile_pic} />
                <Box>
                    <p>John Nicholson</p>
                    <small>
                        Public
                        <i className="fas fa fa-caret-down" />
                    </small>
                </Box>
            </Box>
            <Box className="post-input-container">
                <textarea
                    rows={3}
                    placeholder="What's on your mind, John?"
                    defaultValue={""}
                />
                <Box className="add-post-links">
                    <Link to="#">
                        <img src={live_video} />
                        Live Video
                    </Link>
                    <Link to="#">
                        <img src={photo} />
                        Photo/Video
                    </Link>
                    <Link to="#">
                        <img src={feeling} />
                        Feeling/Activity
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default WritePost;