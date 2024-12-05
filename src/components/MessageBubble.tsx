// MessageBubble.tsx
import React, { memo } from 'react';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/userSlice';

interface MessageBubbleProps {
    message: string;
    sender?: string; // Made sender optional with '?'
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, sender }) => {
    const userInfo = useSelector(userSelector);
    const isSentByMe = sender === userInfo?._id;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: isSentByMe ? 'flex-end' : 'flex-start',
                alignItems: 'center',
            }}
        >
            {!isSentByMe && <Avatar sx={{ width: 30, height: 30 }} className="mr-2" />}
            <Paper
                sx={{
                    padding: 1,
                    maxWidth: '40%',
                    backgroundColor: isSentByMe ? '#DCF8C6' : '#fff',
                    borderRadius: '20px',
                }}
                className="break-all"
            >
                <Typography variant="body2" color="textPrimary">
                    {message}
                </Typography>
            </Paper>
        </Box>
    );
};

export default memo(MessageBubble);
