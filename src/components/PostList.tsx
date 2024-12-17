import PostItem from "./PostItem";
import "../styles/PostList.css"
import Box from "@mui/material/Box";

const PostList = () => {
    return (
        <Box className="post-container">
            <PostItem></PostItem>
        </Box>
    )
}


export default PostList;