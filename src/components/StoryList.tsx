import StoryItem from "./StoryItem"
import "../styles/StoryList.css"
import Box from "@mui/material/Box";


const StoryList = () => {
    return (
        <Box className="story-gallery">
           <StoryItem></StoryItem>
        </Box>
    )
}

export default StoryList;
