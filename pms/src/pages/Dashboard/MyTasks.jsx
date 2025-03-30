import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const MyTasks = () => {
  const tasks = [
    {
      id: 816,
      title: 'Manage comments #meet',
      date: '13/03/2025',
      dueDate: '13/04/2025',
      status: 'In Review'
    },
    {
      id: 815,
      title: 'Create comment model #meet',
      date: '13/03/2025',
      dueDate: '13/04/2025',
      status: 'In Review'
    },
    {
      id: 814,
      title: 'Create issue model #meet',
      date: '13/03/2025',
      dueDate: '13/04/2025',
      status: 'In Review'
    },
    {
      id: 813,
      title: 'Implement search and filters in issues #meet',
      date: '13/03/2025',
      dueDate: '13/04/2025',
      status: 'In Review'
    },
    {
      id: 812,
      title: 'Issues testcases #meet',
      date: '13/03/2025',
      dueDate: '13/04/2025',
      status: 'In Review'
    },
    {
      id: 811,
      title: 'Create issue model #meet',
      date: '13/03/2025',
      dueDate: '13/04/2025',
      status: 'In Review'
    },
    {
      id: 810,
      title: 'Implement search and filters in issues #meet',
      date: '13/03/2025',
      dueDate: '13/04/2025',
      status: 'In Review'
    },
    {
      id: 809,
      title: 'Issues testcases #meet',
      date: '13/03/2025',
      dueDate: '13/04/2025',
      status: 'In Review'
    }
  ];

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 3, 
        borderRadius: 2,
        height: '450px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }
      }}
    >
      <Typography variant="h6" fontWeight="medium" gutterBottom>
        My Tasks
      </Typography>

      <Box 
        sx={{ 
          mt: 2,
          height: 'calc(100% - 40px)',
          width: 'auto',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: '2px',
          }
        }}
      >
        {tasks.map((task) => (
          <Box 
            key={task.id}
            sx={{ 
              py: 2,
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              '&:last-child': { borderBottom: 'none' }
            }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#1976d2',
                mb: 0.5,
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              #{task.id} - {task.title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2" color="text.secondary">
                {task.date}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#2196F3',
                  bgcolor: 'rgba(33, 150, 243, 0.1)',
                  px: 1,
                  borderRadius: 1
                }}
              >
                {task.status}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default MyTasks