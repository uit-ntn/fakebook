import { Box } from '@mui/material';
import feeling from '../assets/feeling.png';
import live_video from '../assets/live-video.png';
import photo from '../assets/photo.png';
import profile_pic from '../assets/profile-pic.png';
import '../styles/WritePost.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/userSlice';

const WritePost = () => {
    const userInfo = useSelector(userSelector);
    console.log(userInfo);
    return (
        <Box className="write-post-container">
            <Box className="user-profile">
                <img src={profile_pic} />
                <Box>
                    <p>{userInfo?.username}</p>
                    <div className="flex gap-1">
                        <small>Public</small>
                        <i className="fas fa fa-caret-down" />
                    </div>
                </Box>
            </Box>
            <Box className="post-input-container">
                <textarea rows={2} placeholder="What's on your mind, John?" defaultValue={''} />
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
    );
};

export default WritePost;
