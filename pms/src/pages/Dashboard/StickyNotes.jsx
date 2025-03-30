// import React from 'react';
// import { Paper, Typography, Box } from '@mui/material';
// import StickyNote2Icon from '@mui/icons-material/StickyNote2';

// const StickyNotes = () => {
//   return (
//     <Paper 
//       elevation={0} 
//       sx={{ 
//         p: 3, 
//         borderRadius: 2,
//         height: '400px',
//         bgcolor: '#FFF9C4',
//         transition: 'transform 0.2s',
//         '&:hover': {
//           transform: 'translateY(-4px)',
//           boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//         }
//       }}
//     >
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
//         <StickyNote2Icon sx={{ color: 'text.secondary' }} />
//         <Typography variant="h6" fontWeight="medium">
//           Sticky Note (Private)
//         </Typography>
//       </Box>

//       <Box 
//         sx={{ 
//           height: 'calc(100% - 40px)',
//           bgcolor: '#FFF9C4',
//           borderRadius: 1,
//           p: 2
//         }}
//       >
//         {/* Content can be added here */}
//       </Box>
//     </Paper>
//   );
// };

// export default StickyNotes













































import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import TabletIcon from '@mui/icons-material/Tablet';

const StickyNotes = () => {
  return (
    <Paper 
      elevation={0} 
      sx={{ 
        borderRadius: 2,
        height: '450px',
        overflow: 'hidden',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }
      }}
    >
      <Box 
        sx={{ 
          p: 2,
          bgcolor: '#FFFFFF',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          display: 'flex', 
          alignItems: 'center', 
          gap: 1
        }}
      >
        <TabletIcon sx={{ color: 'text.secondary' }} />
        <Typography variant="h6" fontWeight="medium" color="text.primary">
          Sticky Note (Private)
        </Typography>
      </Box>

      <Box 
        sx={{ 
          height: 'calc(100% - 56px)',
          bgcolor: '#FFF9C4',
          p: 3
        }}
      >
        {/* Content can be added here */}
      </Box>
    </Paper>
  );
};

export default StickyNotes