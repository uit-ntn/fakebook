import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { registerUser } from '../redux/userThunk';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


// Styled components
const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow: 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignUp() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false); // State để mở Dialog

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username') as string;
    const password = data.get('password') as string;
    const confirmPassword = data.get('confirmPassword') as string;

    if (!password || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      return;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('Passwords do not match.');
      return;
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage('');
    }

    try {
      await dispatch(registerUser({ username, password })).unwrap();
      setOpenDialog(true); // Mở Dialog khi đăng ký thành công
    } catch (error) {
      alert('Registration failed: ' + error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate('/auth/login'); // Điều hướng tới trang login
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel>Username</FormLabel>
              <TextField
                id="username"
                type="text"
                name="username"
                placeholder="username"
                required
                fullWidth
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <TextField
                error={confirmPasswordError}
                helperText={confirmPasswordErrorMessage}
                name="confirmPassword"
                placeholder="••••••"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                required
                fullWidth
                variant="outlined"
                color={confirmPasswordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="agree" color="primary" />}
              label="I agree to the terms and conditions"
            />
            <Button type="submit" fullWidth variant="contained">
              Sign up
            </Button>
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <Link href="/auth/login" variant="body2" sx={{ alignSelf: 'center' }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>

      {/* Dialog thông báo đăng ký thành công */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Đăng ký thành công</DialogTitle>
        <DialogContent>
          <Typography>Chúc mừng bạn đã đăng ký thành công!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
