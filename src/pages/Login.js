import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { useState } from 'react';
const axios = require('axios');
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${process.env.REACT_APP_SERVER_API}/login`, { username, password })
    if (data.isError === false && data.user) {
      localStorage.setItem('token', JSON.stringify(data.user))
      navigate('/app/dashboard')
    }
  }

  const handleInput = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <Typography
                color="textPrimary"
                variant="h2"
              >
                Sign in
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Sign in on the internal platform
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              name="username"
              variant="filled"
              required
              value={username}
              onInput={handleInput}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="filled"
              value={password}
              required
              onInput={handleInput}
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign in now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              Don&apos;t have an account?
              {' '}
              <Link component={RouterLink} to="/register" variant="h6" underline="hover">
                Sign up
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
