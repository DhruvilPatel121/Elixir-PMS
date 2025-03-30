import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { AccessTime, NotificationsNone } from '@mui/icons-material';

const ReminderCard = () => {
  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 3, 
        borderRadius: 2,
        display: 'flex',
        mt: '25px',
        height: 'auto',
        minHeight: 125,
        gap: 4,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AccessTime sx={{ color: 'text.secondary', fontSize: 20 }} />
        <Typography variant="body2" color="text.secondary">
          <Box component="span" color="error.main" fontWeight="bold">0</Box>
          {' '} Reminder Today
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <NotificationsNone sx={{ color: 'text.secondary', fontSize: 20 }} />
        <Typography variant="body2" color="text.secondary">
          {' '}No reminder
        </Typography>
      </Box>
    </Paper>
  );
};

export default ReminderCard