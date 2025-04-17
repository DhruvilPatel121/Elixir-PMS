// import React from 'react';
// import { Box, Button, Paper, Typography } from '@mui/material';

// const StatCard = ({ icon, type, title, subtitle, count, bgColor }) => {
//   return (
//     <Paper
//       elevation={0}
//       sx={{
//         p: 2.5,
//         display: 'flex',
//         alignItems: 'center',
//         gap: 2,
//         borderRadius: 2,
//         height: '100%',
//         minHeight: 120,
//         width: '100%',
//         minWidth: '270px',
//         transition: 'transform 0.2s',
//         '&:hover': {
//           transform: 'translateY(-4px)',
//           boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//         }
//       }}
//     >
//       <Box
//         sx={{
//           width: 50,
//           height: 50,
//           borderRadius: 2,
//           bgcolor: bgColor || 'grey.100',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontSize: '24px',
//         }}
//       >
//         {icon}
//       </Box>
      
//       {type === 'clock' ? (
//         <Box>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ 
//               mb: 1, 
//               textTransform: 'none',
//               px: 3,
//               py: 1,
//               borderRadius: 1.5,
//               boxShadow: 'none',
//               '&:hover': {
//                 boxShadow: 'none',
//               }
//             }}
//           >
//             {title}
//           </Button>
//           <Typography variant="body2" color="text.secondary">
//             {subtitle}
//           </Typography>
//         </Box>
//       ) : (
//         <Box>
//           <Typography variant="h4" fontWeight="bold" sx={{ mb: 0.5 }}>
//             {count}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {title}
//           </Typography>
//         </Box>
//       )}
//     </Paper>
//   );
// };

// export default StatCard




























import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CustomCard from './CustomCard';
import CustomButton from '../../components/Button/CustomButton';

const StatCard = ({ icon, type, title, subtitle, count, bgColor }) => {
  return (
    <CustomCard 
      showHeader={false}
      padding={2.5}
      customStyles={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        height: '100%',
        minHeight: 120,
        width: '100%',
        minWidth: '270px',
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: 2,
          bgcolor: bgColor || 'grey.100',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
        }}
      >
        {icon}
      </Box>
      {type === 'clock' ? (
        <Box>
          {/* <Button
            variant="contained"
            color="primary"
            sx={{ 
              mb: 1, 
              textTransform: 'none',
              px: 3,
              py: 1,
              borderRadius: 1.5,
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none',
              }
            }}
          >
            {title}
          </Button> */}
          <CustomButton
          variant="contained"
          sx={{ 
              mb: 1, 
              textTransform: 'none',
              px: 3,
              py: 1,
              borderRadius: 1.5,
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none',
              }
            }}
          >
            {title}
          </CustomButton>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>
      ) : (
        <Box>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 0.5 }}>
            {count}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </Box>
      )}
    </CustomCard>
  )
}

export default StatCard