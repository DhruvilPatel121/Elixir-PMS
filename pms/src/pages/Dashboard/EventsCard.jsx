// import React from 'react';
// import { Paper, Typography, Box } from '@mui/material';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

// const EventsCard = () => {
//   return (
//     <Paper 
//       elevation={0} 
//       sx={{ 
//         p: 3, 
//         borderRadius: 2,
//         height: 'auto',
//         minHeight: 430,
//         transition: 'transform 0.2s',
//         '&:hover': {
//           transform: 'translateY(-4px)',
//           boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//         }
//       }}
//     >
//       <Typography variant="h6" fontWeight="medium" gutterBottom>
//         Events
//       </Typography>

//       <Box 
//         sx={{ 
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: 'calc(100% - 40px)',
//           color: 'text.secondary'
//         }}
//       >
//         <CalendarTodayIcon sx={{ fontSize: 48, color: 'text.disabled', mb: 2 }} />
//         <Typography color="text.secondary">No events found!</Typography>
//         <Typography 
//           variant="body2" 
//           color="primary" 
//           sx={{ mt: 1, cursor: 'pointer' }}
//         >
//           View on calendar
//         </Typography>
//       </Box>
//     </Paper>
//   );
// };

// export default EventsCard




















import React from 'react';
import { Typography, Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CustomCard from './CustomCard';

const EventsCard = () => {
  return (
    <CustomCard 
      title="Events"
      minHeight={430}
    >
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100% - 40px)',
          color: 'text.secondary'
        }}
      >
        <CalendarTodayIcon sx={{ fontSize: 48, color: 'text.disabled', mb: 2 }} />
        <Typography color="text.secondary">No events found!</Typography>
        <Typography 
          variant="body2" 
          color="primary" 
          sx={{ mt: 1, cursor: 'pointer' }}
        >
          View on calendar
        </Typography>
      </Box>
    </CustomCard>
  )
}

export default EventsCard