import { Box, Typography } from "@mui/material"
import member_1 from "../assets/member-1.png"
import member_2 from "../assets/member-2.png"
import member_3 from "../assets/member-3.png"
import member_4 from "../assets/member-4.png"
import upload from "../assets/upload.png"
import "../styles/StoryItem.css"

const StoryItem = () => {
    return (
        <>
            <Box className="story story1">
                <img src={upload} />
                <Typography>Post Story</Typography>
            </Box>
            <Box className="story story2">
                <img src={member_1} />
                <Typography>Alison</Typography>
            </Box>
            <Box className="story story3">
                <img src={member_2} />
                <Typography>Jackson</Typography>
            </Box>
            <Box className="story story4">
                <img src={member_3} />
                <Typography>Samona</Typography>
            </Box>
            <Box className="story story5">
                <img src={member_4} />
                <Typography>John</Typography>
            </Box>
        </>
    )
}

export default StoryItem;