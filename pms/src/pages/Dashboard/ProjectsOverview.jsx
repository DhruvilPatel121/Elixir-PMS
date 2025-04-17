// import React from 'react';
// import { Box, Paper, Typography, LinearProgress } from '@mui/material';


// const ProjectsOverview = () => {
//   const stats = [
//     { label: 'Open', value: 1, color: '#2196F3' },
//     { label: 'Completed', value: 0, color: '#4CAF50' },
//     { label: 'Hold', value: 0, color: '#FFC107' },
//   ];

//   return (
//     <Paper 
//       elevation={0} 
//       sx={{ 
//         p: 3, 
//         borderRadius: 2, 
//         marginTop: '30px',
//         height: 'auto',
//         minHeight: 280,
//         transition: 'transform 0.2s',
//         '&:hover': {
//           transform: 'translateY(-4px)',
//           boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//         }
//       }}
//     >
//       <Typography variant="h6" fontWeight="medium">
//         Projects Overview
//       </Typography>

//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           my: 4,
//         }}
//       >
//         {stats.map((stat) => (
//           <Box key={stat.label} sx={{ textAlign: 'center' }}>
//             <Typography variant="h4" fontWeight="bold" sx={{ color: stat.color }}>
//               {stat.value}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {stat.label}
//             </Typography>
//           </Box>
//         ))}
//       </Box>

//       <Box sx={{ mt: 4 }}>
//         <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
//           <Typography variant="body2" color="text.secondary">
//             Progress
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             66%
//           </Typography>
//         </Box>
//         <LinearProgress
//           variant="determinate"
//           value={66}
//           sx={{
//             height: 8,
//             borderRadius: 4,
//             bgcolor: 'grey.100',
//             '& .MuiLinearProgress-bar': {
//               borderRadius: 4,
//               bgcolor: '#2196F3',
//             },
//           }}
//         />
//       </Box>
//     </Paper>
//   );
// };

// export default ProjectsOverview


















import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import CustomCard from './CustomCard';

const ProjectsOverview = () => {
  const stats = [
    { label: 'Open', value: 1, color: '#2196F3' },
    { label: 'Completed', value: 0, color: '#4CAF50' },
    { label: 'Hold', value: 0, color: '#FFC107' },
  ];

  return (
    <CustomCard 
      title="Projects Overview"
      minHeight={280}
      marginTop="30px"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          my: 4,
        }}
      >
        {stats.map((stat) => (
          <Box key={stat.label} sx={{ textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" sx={{ color: stat.color }}>
              {stat.value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 4 }}>
        <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.secondary">
            Progress
          </Typography>
          <Typography variant="body2" color="text.secondary">
            66%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={66}
          sx={{
            height: 8,
            borderRadius: 4,
            bgcolor: 'grey.100',
            '& .MuiLinearProgress-bar': {
              borderRadius: 4,
              bgcolor: '#2196F3',
            },
          }}
        />
      </Box>
    </CustomCard>
  )
}

export default ProjectsOverview