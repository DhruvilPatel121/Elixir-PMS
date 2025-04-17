import React, { useState } from 'react'
import {
  Box,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButtom from "../../components/Button/CustomButton";
function ForgotPassword() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password for :', email);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#f5f5f5"
      }}
    >
      <Paper
      elevation={0}
      sx={{
        flexGrow: 1,
        flexDirection: "column",
        p: 4,
        width: "100%",
        maxWidth: 500,
        borderRadius: 2,
        textAlign: "center"
      }}
      >
        <img src="src\assets\logo.png" alt="Elixir Logo"
        style={{
          height: 45,
          marginBottom: 24,
          width: '100%',
          objectFit: 'contain',
        }}        
        />

        <Typography
        // variant= "body 1"
        color="#808080"
        sx={{ mb: 1 }}
        >
          Input your email to reset your password
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
          fullWidth
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={handleChange}
          sx={{ 
          mb: 3,
          color: 'black'
          }}
          required
          />

          <CustomButtom
          type="submit"
          fullWidth
          sx={{ mb: 2 }}
          >
            Send
          </CustomButtom>

          <Typography
          variant="body 2"
          color="primary"
          onClick={() => navigate('/')}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline'
            },
          }}
          >
            Sign In
          </Typography>
        </form>
      </Paper>
    </Box>
  )
}

export default ForgotPassword
