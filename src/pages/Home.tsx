import MainLayout from "../layouts/main_layout";
import PostList from "../components/PostList";
import StoryList from "../components/StoryList";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import WritePost from "../components/WritePost";
import "../styles/Home.css"

const Home = () => {

    return (
        <>
            <MainLayout>
                    <div className="container">
                        <LeftSideBar></LeftSideBar>
                        <div className="main-content">
                            <StoryList></StoryList>
                            <WritePost></WritePost>
                            <PostList></PostList>
                        </div>
                        <RightSideBar></RightSideBar>
                    </div>
            </MainLayout >
        </>
    )
}


export default Home;