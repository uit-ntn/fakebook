import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideocamIcon from "@mui/icons-material/Videocam";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import profile_pic from "../assets/profile-pic.png";
import live_video from "../assets/live-video.png";
import photo from "../assets/photo.png";
import feeling from "../assets/feeling.png";
import "../styles/WritePost.css";

const WritePost = () => {
  return (
    <Box className="write-post-container" p={2}>
      <Box className="user-profile" display="flex" alignItems="center" mb={2}>
        <Avatar src={profile_pic} alt="Profile" sx={{ width: 40, height: 40 }} />
        <Box ml={2}>
          <Typography variant="body1">John Nicholson</Typography>
          <Typography variant="body2" color="textSecondary">
            Public <i className="fas fa fa-caret-down" />
          </Typography>
        </Box>
      </Box>

      <Box className="post-input-container" mb={2}>
        <TextField
          multiline
          rows={3}
          fullWidth
          variant="outlined"
          placeholder="What's on your mind, John?"
          sx={{ borderRadius: 2 }}
        />
      </Box>

      <Box className="add-post-links" display="flex" justifyContent="space-between">
        <IconButton>
          <VideocamIcon />
          <Typography variant="body2" ml={1}>
            Live Video
          </Typography>
        </IconButton>
        <IconButton>
          <InsertPhotoIcon />
          <Typography variant="body2" ml={1}>
            Photo/Video
          </Typography>
        </IconButton>
        <IconButton>
          <SentimentSatisfiedAltIcon />
          <Typography variant="body2" ml={1}>
            Feeling/Activity
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default WritePost;
