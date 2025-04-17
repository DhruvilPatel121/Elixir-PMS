// import React from 'react';
// import { Paper, Typography, Box } from '@mui/material';
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// const TasksOverview = () => {
//   const data = [
//     { name: 'Completed', value: 30, color: '#4CAF50' },
//     { name: 'In Progress', value: 45, color: '#2196F3' },
//     { name: 'On Hold', value: 25, color: '#FFC107' },
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
//         All Tasks Overview
//       </Typography>
      
//       <Box sx={{ width: '100%', height: 200, mt: 2 }}>
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={data}
//               innerRadius={60}
//               outerRadius={80}
//               paddingAngle={5}
//               dataKey="value"
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </Box>
//     </Paper>
//   );
// };

// export default TasksOverview
















import React from 'react';
import { Box } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import CustomCard from './CustomCard';

const TasksOverview = () => {
  const data = [
    { name: 'Completed', value: 30, color: '#4CAF50' },
    { name: 'In Progress', value: 45, color: '#2196F3' },
    { name: 'On Hold', value: 25, color: '#FFC107' },
  ];

  return (
    <CustomCard 
      title="All Tasks Overview"
      minHeight={430}
      marginTop="30px"
    >
      <Box sx={{ width: '100%', height: 200, mt: 2 }}>
         <ResponsiveContainer>
           <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </CustomCard>
  )
}

export default TasksOverview