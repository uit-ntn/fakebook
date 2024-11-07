// MessageBubble.tsx
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

interface MessageBubbleProps {
  message: string;
  sender: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, sender }) => {
  const isSentByMe = sender === 'Me';

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
