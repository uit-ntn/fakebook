import MainLayout from "../layouts/main_layout";
import PostList from "../components/PostList";
import StoryList from "../components/StoryList";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import WritePost from "../components/WritePost";
import "../styles/Home.css"
import Box from "@mui/material/Box";

const Home = () => {

    return (
        <>
            <MainLayout>
                    <Box className="container">
                        <LeftSideBar></LeftSideBar>
                        <Box className="main-content">
                            <StoryList></StoryList>
                            <WritePost></WritePost>
                            <PostList></PostList>
                        </Box>
                        <RightSideBar></RightSideBar>
                    </Box>
            </MainLayout >
        </>
    )
}


export default Home;