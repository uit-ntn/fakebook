// MessageBubble.tsx
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/userSlice';

interface MessageBubbleProps {
    message: string;
    sender?: string; // Made sender optional with '?'
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, sender }) => {
    const userInfo = useSelector(userSelector);
    console.log(userInfo);
    const isSentByMe = sender === userInfo?._id;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: isSentByMe ? 'flex-end' : 'flex-start',
                mb: 1,
            }}
        >
            <Paper
                sx={{
                    padding: 1,
                    maxWidth: '70%',
                    backgroundColor: isSentByMe ? '#DCF8C6' : '#fff',
                }}
            >
                <Typography variant="body2" color="textPrimary">
                    {message}
                </Typography>
            </Paper>
        </Box>
    );
};

export default MessageBubble;
