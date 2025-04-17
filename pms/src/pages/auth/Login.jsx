import React, { useState } from 'react'
import { Box, TextField, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/Button/CustomButton';

function Login() {
    
const navigate = useNavigate();
const [formData, setFormData] = useState({
    email: '',
    password: ''
})

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
        ...prev,
       [name]: value
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/dashboard');
}

  return (
    <Box 
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            bgcolor: '#f5f5f5'
        }}
    >
      <Paper
        elevation={0}
        sx={{
          flexGrow: '1',
          flexDirection: 'column',
          p: 4,
          width: '100%',
          maxWidth: 500,
          borderRadius: 2,
          textAlign: 'center'
        }}
      >
        <img src="src\assets\logo.png" alt="Elixir Logo" 
        style={{
            height: 45,
            marginBottom: 24,
            width: '100%',
            objectFit: 'contain'
        }}
        />

        <form onSubmit={handleSubmit}>
            <TextField 
            fullWidth
            name="email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2, color: 'black' }}
            required
            />

            <TextField 
            fullWidth
            name="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            sx={{ mb: 3 }}
            required
            />

            <CustomButton
            type='submit'
            fullWidth
            sx={{ mb: 2 }}
            >
              Sign In
            </CustomButton>

            <Typography
            varient='body2'
            color='primary'
            onClick={() => navigate('/forgotpassword')}
            sx={{
              display: 'flex',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
            >
             Forgot Password?
            </Typography>
        </form>
      </Paper>
    </Box>
  )
}

export default Login
