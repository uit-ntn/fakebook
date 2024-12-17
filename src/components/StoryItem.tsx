import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import member_1 from "../assets/member-1.png";
import member_2 from "../assets/member-2.png";
import member_3 from "../assets/member-3.png";
import member_4 from "../assets/member-4.png";
import upload from "../assets/upload.png";
import "../styles/StoryItem.css";

const StoryItem = () => {
    return (
        <>
            <Box className="story story1">
                <img src={upload} alt="upload" />
                <Typography variant="body2">Post Story</Typography>
            </Box>
            <Box className="story story2">
                <Avatar src={member_1} alt="Alison" />
                <Typography variant="body2">Alison</Typography>
            </Box>
            <Box className="story story3">
                <Avatar src={member_2} alt="Jackson" />
                <Typography variant="body2">Jackson</Typography>
            </Box>
            <Box className="story story4">
                <Avatar src={member_3} alt="Samona" />
                <Typography variant="body2">Samona</Typography>
            </Box>
            <Box className="story story5">
                <Avatar src={member_4} alt="John" />
                <Typography variant="body2">John</Typography>
            </Box>
        </>
    );
};

export default StoryItem;
