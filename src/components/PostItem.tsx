import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FeedImage from "../assets/feed-image-1.png";
import LikeBlue from "../assets/like-blue.png";
import Comments from "../assets/comments.png";
import Share from "../assets/share.png";
import ProfilePic from "../assets/profile-pic.png";
import "../styles/PostItem.css";

const PostItem = () => {
    return (
        <>
            <Box className="post-row" display="flex" alignItems="center" justifyContent="space-between">
                <Box className="user-profile" display="flex" alignItems="center">
                    <Avatar src={ProfilePic} alt="John Nicholson" />
                    <Box ml={2}>
                        <Typography variant="body1">John Nicholson</Typography>
                        <Typography variant="body2" color="textSecondary">June 21, 2021, 13:40</Typography>
                    </Box>
                </Box>
                <IconButton>
                    <i className="fa fa-ellipsis-v" />
                </IconButton>
            </Box>

            <Typography className="post-text" variant="body2" component="p">
                Subscribe <span>@LetsTryThis</span> YouTube Channel to watch more videos on website development and UI Designs.
                <a href="#">#letstrythis</a> <a href="#">#youtube</a>
            </Typography>

            <Box component="img" src={FeedImage} className="post-img" width="100%" />

            <Box className="post-row" display="flex" alignItems="center" justifyContent="space-between">
                <Box className="activity-icons" display="flex" alignItems="center">
                    <Box display="flex" alignItems="center" mr={2}>
                        <img src={LikeBlue} alt="Like" />
                        <Typography variant="body2" ml={1}>120</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mr={2}>
                        <img src={Comments} alt="Comments" />
                        <Typography variant="body2" ml={1}>19</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <img src={Share} alt="Share" />
                        <Typography variant="body2" ml={1}>120</Typography>
                    </Box>
                </Box>

                <Box className="post-profile-icon" display="flex" alignItems="center">
                    <Avatar src={ProfilePic} alt="John Nicholson" />
                    <IconButton>
                        <i className="fas fa fa-caret-down" />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default PostItem;
