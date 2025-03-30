import React from 'react';
import { Paper, Typography, Box, Avatar, Chip } from '@mui/material';

const ProjectTimeline = () => {
  const timelineData = [
    {
      id: 1,
      user: {
        name: 'Akash Mangroliya',
        avatar: '/avatars/akash.jpg',
      },
      date: '29/07/2024 03:18:07 PM',
      task: '#790 - Manage projects #meet',
      priority: 'Moved Up',
      status: { text: 'Done', originalText: 'In Review', color: '#4CAF50' },
      project: 'python Interns'
    },
    {
      id: 2,
      user: {
        name: 'Meet Thoriya',
        avatar: '/avatars/meet.jpg',
      },
      date: '09/04/2024 08:26:09 AM',
      task: '#816 - comment testcases #meet',
      priority: 'Moved Down',
      status: { text: 'In Review', originalText: 'To do', color: '#2196F3' },
      project: 'python Interns'
    },
    {
      id: 3,
      user: {
        name: 'Meet Thoriya',
        avatar: '/avatars/meet.jpg',
      },
      date: '08/04/2024 02:48:41 PM',
      task: '#815 - Manage comments #meet',
      priority: 'Moved Down',
      status: { text: 'In Review', originalText: 'In progress', color: '#2196F3' },
      project: 'python Interns'
    },
    {
      id: 4,
      user: {
        name: 'Meet Thoriya',
        avatar: '/avatars/meet.jpg',
      },
      date: '13/03/2025 11:57:26 AM',
      task: '#814 - comment testcases #meet',
      priority: 'Moved Down',
      status: { text: 'In Review', originalText: 'To do', color: '#2196F3' },
      project: 'python Interns'
    },
    {
      id: 5,
      user: {
        name: 'Meet Thoriya',
        avatar: '/avatars/meet.jpg',
    },
      date: '13/03/2025 12:09:09 AM',
      task: '#813 - comment testcases #meet',
      priority: 'Moved Down',
      status: { text: 'In Review', originalText: 'To do', color: '#2196F3' },
      project: 'python Interns'
    },
  ];

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 3, 
        borderRadius: 2,
        height: '875px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }
      }}
    >
      <Typography variant="h6" fontWeight="medium" gutterBottom>
        Project Timeline
      </Typography>

      <Box 
        sx={{ 
          mt: 2,
          height: 'calc(100% - 40px)',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: '3px',
          }
        }}
      >
        {timelineData.map((item) => (
          <Box 
            key={item.id}
            sx={{ 
              display: 'flex', 
              gap: 2, 
              mb: 3,
              pb: 3,
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              '&:last-child': {
                borderBottom: 'none'
              }
            }}
          >
            <Avatar src={item.user.avatar} alt={item.user.name} />
            <Box>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: '#1976d2',
                  fontWeight: 500,
                  mb: 0.5
                }}
              >
                {item.user.name}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ mb: 1 }}
              >
                {item.date}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip 
                  label="Updated"
                  size="small"
                  sx={{ 
                    bgcolor: '#FFC107',
                    color: '#fff',
                    fontSize: '0.75rem',
                    height: 24
                  }}
                />
                <Typography variant="body1" color="text.primary">
                  Task: {item.task}
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                Priority: {item.priority}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                Status: {' '}
                <Box 
                  component="span" 
                  sx={{ 
                    textDecoration: 'line-through',
                    color: 'text.disabled',
                    mr: 1
                  }}
                >
                  {item.status.originalText}
                </Box>
                <Box 
                  component="span" 
                  sx={{ color: item.status.color }}
                >
                  {item.status.text}
                </Box>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Project: {item.project}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default ProjectTimeline