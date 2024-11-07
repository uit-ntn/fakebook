import StoryItem from "./StoryItem"
import "../styles/StoryList.css"
import { Box } from "@mui/material";


const StoryList = () => {
    return (
        <Box className="story-gallery">
           <StoryItem></StoryItem>
        </Box>
    )
}

export default StoryList;
