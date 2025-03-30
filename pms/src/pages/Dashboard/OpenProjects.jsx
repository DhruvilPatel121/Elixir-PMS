import React from 'react';
import { Paper, Typography, Box, LinearProgress } from '@mui/material';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

const OpenProjects = () => {
  const projects = [
    {
      name: 'python Interns',
      progress: 66
    }
  ];

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 3, 
        borderRadius: 2,
        height: 'auto',
        minHeight: 420,
        mt: 3,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <FolderOutlinedIcon sx={{ color: 'text.secondary' }} />
        <Typography variant="h6" fontWeight="medium">
          Open Projects
        </Typography>
      </Box>

      {projects.map((project, index) => (
        <Box key={index} sx={{ mt: 2 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#1976d2',
              mb: 1,
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            {project.name}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={project.progress}
            sx={{
              height: 6,
              borderRadius: 3,
              bgcolor: 'rgba(33, 150, 243, 0.1)',
              '& .MuiLinearProgress-bar': {
                bgcolor: '#2196F3',
                borderRadius: 3
              }
            }}
          />
        </Box>
      ))}
  </Paper>
  );
};

export default OpenProjects