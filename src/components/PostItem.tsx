
import { Box, Typography } from "@mui/material"
import comments from "../assets/comments.png"
import feed_image_1 from "../assets/feed-image-1.png"
import like_blue from "../assets/like-blue.png"
import profile_pic from "../assets/profile-pic.png"
import share from "../assets/share.png"
import "../styles/PostItem.css"
import { Link } from "react-router-dom"

const PostItem = () => {

    return <>
        <Box className="post-row">
            <Box className="user-profile">
                <img src={profile_pic} />
                <Box>
                    <p>John Nicholson</p>
                    <span>June 21 2021, 13:40</span>
                </Box>
            </Box>
            <Link to="#">
                <i className="fa fa-ellipsis-v" />
            </Link>
        </Box>
        <Typography className="post-text">
            Subscribe <span>@LetsTryThis</span> YouTube Channel to watch more
            videos on website development and UI Designs.
            <Link to="#">#letstrythis</Link>
            <Link to="#">#youtube</Link>
        </Typography>
        <img src={feed_image_1} className="post-img" />
        <Box className="post-row">
            <Box className="activity-icons">
                <Box>
                    <img src={like_blue} />
                    120
                </Box>
                <Box>
                    <img src={comments} />
                    19
                </Box>
                <Box>
                    <img src={share} />
                    120
                </Box>
            </Box>
            <Box className="post-profile-icon">
                <img src={profile_pic} />
                <i className="fas fa fa-caret-down" />
            </Box>
        </Box>
    </>
}

export default PostItem;