import PostItem from "./PostItem";
import "../styles/PostList.css"
import { Box } from "@mui/material";

const PostList = () => {
    return (
        <Box className="post-container">
        <Box className="post-container">
            <PostItem></PostItem>
        </Box>
        </Box>
    )
}


export default PostList;