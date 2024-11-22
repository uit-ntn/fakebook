import MainLayout from '../layouts/main_layout';
import PostList from '../components/PostList';
import StoryList from '../components/StoryList';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';
import WritePost from '../components/WritePost';
import '../styles/Home.css';
import { useEffect, useState } from 'react';
import { socketEmit } from '../services/socketService';
import userApi from '../services/authServices';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../redux/userSlice';
import { getToken } from '../utils/localStorage';

const Home = () => {
    const [id, setId] = useState<string>('');
    const dispatch = useDispatch();

    const getUserInfo = async () => {
        const accessToken = getToken();
        if (accessToken) {
            const response = await userApi.getInfo();
            if (response) {
                console.log(response);
                dispatch(setUserInfo(response));
                setId(response._id);
            }
        }
    };

    useEffect(() => {
        getUserInfo();
        socketEmit('connection', id);
    }, [id]);

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
            </MainLayout>
        </>
    );
};

export default Home;
