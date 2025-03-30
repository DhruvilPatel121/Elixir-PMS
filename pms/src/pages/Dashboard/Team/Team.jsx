import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

function Team() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}

export default Team