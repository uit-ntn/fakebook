import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const NotFoundContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const NotFoundImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  marginBottom: theme.spacing(4),
}));

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <NotFoundContainer>
      <NotFoundImage
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
        alt="404 Not Found"
      />
      <Typography variant="h3" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Go Back Home
      </Button>
    </NotFoundContainer>
  );
}
