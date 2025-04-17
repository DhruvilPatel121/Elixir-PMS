// import React from 'react';
// import { Paper, Typography, Box } from '@mui/material';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer
// } from 'recharts';

// const Timesheet = () => {
//   const data = [
//     { name: 'Mon', hours: 8 },
//     { name: 'Tue', hours: 7 },
//     { name: 'Wed', hours: 9 },
//     { name: 'Thu', hours: 8 },
//     { name: 'Fri', hours: 6 },
//   ];

//   return (
//     <Paper 
//       elevation={0} 
//       sx={{ 
//         p: 3, 
//         borderRadius: 2,
//         marginTop: '30px', 
//         height: 'auto',
//         minHeight: 430,
//         transition: 'transform 0.2s',
//         '&:hover': {
//           transform: 'translateY(-4px)',
//           boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//         }
//       }}
//     >
//       <Typography variant="h6" fontWeight="medium">
//         My Timesheet
//       </Typography>
      
//       <Box sx={{ width: '100%', height: 200, mt: 2 }}>
//         <ResponsiveContainer>
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Line 
//               type="monotone" 
//               dataKey="hours" 
//               stroke="#2196F3" 
//               strokeWidth={2}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </Box>
//     </Paper>
//   );
// };

// export default Timesheet

























import React from 'react';
import { Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomCard from './CustomCard';

const Timesheet = () => {
  const data = [
    { name: 'Mon', hours: 8 },
    { name: 'Tue', hours: 7 },
    { name: 'Wed', hours: 9 },
    { name: 'Thu', hours: 8 },
    { name: 'Fri', hours: 6 },
  ];

  return (
    <CustomCard 
      title="My Timesheet"
      minHeight={430}
      marginTop="30px"
    >
      <Box sx={{ width: '100%', height: 200, mt: 2 }}>
         <ResponsiveContainer>
           <LineChart data={data}>
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis dataKey="name" />
             <YAxis />
             <Tooltip />
             <Line 
              type="monotone" 
              dataKey="hours" 
              stroke="#2196F3" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </CustomCard>
  )
}

export default Timesheet