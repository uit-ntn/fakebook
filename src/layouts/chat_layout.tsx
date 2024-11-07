// ChatLayout.tsx
import React from 'react';
import { Box, Container, Divider, List, ListItem, ListItemText, Paper, TextField, Typography } from '@mui/material';
import MessageBubble from '../components/MessageBubble';

const ChatLayout: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar trái: Danh sách chat */}
      <Paper sx={{ width: 300, padding: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" component="div" gutterBottom>
          Chats
        </Typography>
        <TextField placeholder="Search Messenger" variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary="User 1" secondary="Last message..." />
          </ListItem>
          <ListItem>
            <ListItemText primary="User 2" secondary="Last message..." />
          </ListItem>
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
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
          <MessageBubble message="Hello, how are you?" sender="User 1" />
          <MessageBubble message="I'm good, thanks!" sender="Me" />
          {/* Các tin nhắn khác */}
        </Box>

        {/* Nhập tin nhắn */}
        <Box component="form" sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Type a message..."
            fullWidth
          />
        </Box>
      </Box>

      {/* Sidebar phải: Thông tin chat */}
      <Paper sx={{ width: 300, padding: 2, display: 'flex', flexDirection: 'column', bgcolor: '#fafafa' }}>
        
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
