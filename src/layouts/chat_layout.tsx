// ChatLayout.tsx
import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import MessageBubble from '../components/MessageBubble';
import friendApi from '../services/friendServices';
import { socketEmit, socketOn } from '../services/socketService';

const ChatLayout: React.FC = () => {
    const [friendList, setFriendList] = useState([]);
    const [message, setMessage] = useState(''); // Add state for message input
    const [listMessage, setListMessage] = useState([
        {
            sendId: '66fac95f801d6ee1858626e8',
            receiveId: '66fac955801d6ee1858626e5',
            content: 'hello world',
        },
        {
            sendId: '66fac95f801d6ee1858626e8',
            receiveId: '66fac955801d6ee1858626e5',
            content: 'hello asdasdasdasdasdas',
        },
        {
            sendId: '66fac95f801d6ee1858626e8',
            receiveId: '66fac955801d6ee1858626e5',
            content: 'DAYUMMMMM!!!!!!!',
        },
        {
            sendId: '66fac955801d6ee1858626e5',
            receiveId: '66fac95f801d6ee1858626e8',
            content: 'hello there!!!!',
        },
    ]);

    useEffect(() => {
        getListFriend();
    }, []);

    useEffect(() => {
        socketOn('privateMessage', (data: any) => {
            console.log(data);
            setListMessage([...listMessage, data]);
        });
    }, []);

    const getListFriend = async () => {
        await friendApi.getList().then((res) => {
            const friendAccept = res.filter((friend: any) => friend.status === 'ACCEPTED');
            console.log(friendAccept);
            setFriendList(friendAccept);
        });
    };

    const handleChat = (e: any) => {
        e.preventDefault();
        console.log(message);
        socketEmit('private-message', {
            sendId: '66fac95f801d6ee1858626e8',
            receiveId: '66fac955801d6ee1858626e5',
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
                        <ListItemButton key={friend?.userId.username}>
                            <ListItemText primary={friend?.userId.username} secondary="Last message..." />
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
                        <MessageBubble message={message.content} sender={message.sendId} />
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
