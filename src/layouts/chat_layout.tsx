// ChatLayout.tsx
import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import MessageBubble from '../components/MessageBubble';
import friendApi from '../services/friendServices';
import { socketEmit, socketOff, socketOn } from '../services/socketService';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/userSlice';
import messageApi from '../services/messageServices';
import { Avatar } from 'antd';
import dayjs from 'dayjs';
import _ from 'lodash';

const ChatLayout: React.FC = () => {
    const [friendList, setFriendList] = useState([]);
    const [message, setMessage] = useState('');
    const [listMessage, setListMessage] = useState<any[]>([]);
    const [friendSelected, setFriendSelected] = useState('');
    const userInfo = useSelector(userSelector);

    // console.log(userInfo);
    // console.log(friendSelected);
    console.log(listMessage);

    useEffect(() => {
        getListFriend();
    }, []);

    useEffect(() => {
        getListMessage();
    }, [friendSelected]);

    useEffect(() => {
        socketOn('privateMessage', (data: any) => {
            if (data) {
                console.log(data);
                setListMessage((prevMessages) => [...prevMessages, data]);
            }
        });

        return () => {
            socketOff('privateMessage');
        };
    }, []); // <-- Don't add listMessage as dependency to avoid infinite loop

    const getListFriend = async () => {
        await friendApi.getList().then((res) => {
            const friendAccept = res.filter((friend: any) => friend.status === 'ACCEPTED');
            console.log('Friend object structure:', friendAccept); // Add this line to inspect the structure
            setFriendSelected(friendAccept[0]?.friendInfo._id); // Set the first friend as the selected friend
            setFriendList(friendAccept);
        });
    };

    const getListMessage = async () => {
        // Call the API to get the list of messages
        await messageApi.getList(friendSelected).then((res) => {
            console.log(res);
            setListMessage(res);
        });
    };

    const handleChat = (e: any) => {
        e.preventDefault();
        // console.log(message);
        socketEmit('private-message', {
            sendId: userInfo?._id,
            receiveId: friendSelected,
            content: message, // Use the message state
        });
        setMessage(''); // Clear the input after sending
    };

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                height: '100vh',
            }}
        >
            {/* Sidebar trái: Danh sách chat */}
            <Paper
                sx={{
                    width: 300,
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h6" component="div" gutterBottom>
                    Chats
                </Typography>
                <TextField
                    placeholder="Search Messenger"
                    variant="outlined"
                    fullWidth
                    sx={{
                        marginBottom: 2,
                    }}
                />
                <Divider />
                <List>
                    {friendList.map((friend: any) => (
                        <ListItemButton
                            key={friend?.friendInfo._id || friend?.friendInfo.username}
                            onClick={() => setFriendSelected(friend?.friendInfo._id)}
                            sx={{
                                bgcolor: friend?.friendInfo._id === friendSelected ? '#f5f5f5' : 'inherit',
                                borderRadius: 2,
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar size={50} />
                            </ListItemAvatar>
                            <ListItemText
                                className="text-ellipsis overflow-hidden"
                                primary={friend?.friendInfo.username}
                                secondary={`${
                                    !_.isEmpty(friend.recentMessage)
                                        ? friend.recentMessage?.content +
                                          ' ∙ ' +
                                          dayjs(friend.recentMessage?.createdAt).format('HH:mm')
                                        : ''
                                }`}
                            />
                        </ListItemButton>
                    ))}
                    {/* Thêm các người dùng khác */}
                </List>
            </Paper>

            {/* Khu vực chat chính */}
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#f5f5f5',
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant="h6">Chat with User 1</Typography>
                    {/* Có thể thêm các icon như gọi điện, video call ở đây */}
                </Box>
                <Divider />

                {/* Tin nhắn */}
                <Box
                    sx={{
                        flexGrow: 1,
                        overflowY: 'auto',
                        padding: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    {listMessage.map((message) => (
                        <MessageBubble key={message?._id} message={message.content} sender={message.sendId} />
                    ))}
                    {/* Các tin nhắn khác */}
                </Box>

                {/* Nhập tin nhắn */}
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        padding: 2,
                    }}
                    onSubmit={handleChat}
                >
                    <TextField
                        autoComplete="off"
                        variant="outlined"
                        placeholder="Type a message..."
                        fullWidth
                        value={message} // Bind the input value to the state
                        onChange={(e) => setMessage(e.target.value)} // Update the state on change
                    />
                </Box>
            </Box>

            {/* Sidebar phải: Thông tin chat */}
            <Paper
                sx={{
                    width: 300,
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#fafafa',
                }}
            >
                <Typography variant="h6" component="div" gutterBottom>
                    Chat Info
                </Typography>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemText primary="User 1" secondary="Added by you" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="User 2" secondary="Admin" />
                    </ListItem>
                    {/* Các thành viên khác */}
                </List>
            </Paper>
        </Container>
    );
};

export default ChatLayout;
