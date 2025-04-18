// import React from 'react';
// import { Box, Grid, IconButton, AppBar, Toolbar, Avatar } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import EmailIcon from '@mui/icons-material/Email';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import LanguageIcon from '@mui/icons-material/Language';
// import StatCard from './StatCard';
// import ProjectsOverview from './ProjectsOverview';
// import TasksOverview from './TasksOverview';
// import Timesheet from './Timesheet';
// import ReminderCard from './ReminderCard';
// import ProjectTimeline from './ProjectTimeline';
// import EventsCard from './EventsCard';
// import OpenProjects from './OpenProjects';
// import TodoCard from './TodoCard';
// import MyTasks from './MyTasks';
// import StickyNotes from './StickyNotes';

// const Dashboard = () => {
//   const stats = [
//     {
//       id: 1,
//       icon: <AccessTimeIcon sx={{ fontSize: 24, color: 'primary.main' }} />,
//       type: 'clock',
//       title: 'Clock In',
//       subtitle: 'You are currently clocked out',
//       bgColor: '#E3F2FD'
//     },
//     {
//       id: 2,
//       icon: '📋',
//       count: '10',
//       title: 'My open tasks',
//       bgColor: '#FFF3E0'
//     },
//     {
//       id: 3,
//       icon: '📅',
//       count: '0',
//       title: 'Events today',
//       bgColor: '#E8F5E9'
//     },
//     {
//       id: 4,
//       icon: '📮',
//       count: '0',
//       title: 'New posts',
//       bgColor: '#FCE4EC'
//     },
//   ];

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#F5F5F5', overflow: 'auto' }}>
//         {/* Stats Cards Row */}
//         <Grid container spacing={3} sx={{ mb: 3 }}>
//           {stats.map((stat) => (
//             <Grid item xs={12} sm={6} md={3} key={stat.id}>
//               <StatCard {...stat} />
//             </Grid>
//           ))}
//         </Grid>

//         {/* Widgets Row */}
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={4}>
//             <ProjectsOverview />
//             <ReminderCard/>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TasksOverview />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Timesheet />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <ProjectTimeline/>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <EventsCard/>
//             <OpenProjects/>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <TodoCard/>
//           </Grid>
//           <Grid item xs={12} md={8}>
//             <MyTasks/>
//            </Grid>    
//           <Grid item xs={12} md={4}>
//             <StickyNotes/>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;























import React from 'react';
import { Box} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StatCard from './StatCard';
import ProjectsOverview from './ProjectsOverview';
import TasksOverview from './TasksOverview';
import Timesheet from './Timesheet';
import ReminderCard from './ReminderCard';
import ProjectTimeline from './ProjectTimeline';
import EventsCard from './EventsCard';
import OpenProjects from './OpenProjects';
import TodoCard from './TodoCard';
import MyTasks from './MyTasks';
import StickyNotes from './StickyNotes';

const Dashboard = () => {
  const stats = [
    {
      id: 1,
      icon: <AccessTimeIcon sx={{ fontSize: 24, color: 'primary.main' }} />,
      type: 'clock',
      title: 'Clock In',
      subtitle: 'You are currently clocked out',
      bgColor: '#E3F2FD'
    },
    {
      id: 2,
      icon: '📋',
      count: '10',
      title: 'My open tasks',
      bgColor: '#FFF3E0'
    },
    {
      id: 3,
      icon: '📅',
      count: '0',
      title: 'Events today',
      bgColor: '#E8F5E9'
    },
    {
      id: 4,
      icon: '📮',
      count: '0',
      title: 'New posts',
      bgColor: '#FCE4EC'
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#F5F5F5', overflow: 'auto' }}>
        {/* Stats Cards Row */}
          <div style={{display: 'flex', gap: '20px'}}>
          {stats.map((stat) => (
        // <div style={{disdisplay: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px'}} key={stat.id}>
              <StatCard {...stat} key={stat.id}/>
            //  {/* </div> */}
          ))}
        </div>
        

        {/* Widgets Row */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
            <div>
              <ProjectsOverview />
              <ReminderCard/>
            </div>
            <div>
              <TasksOverview />
            </div>
            <div>
              <Timesheet />
            </div>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px'}}>
          <div>
            <ProjectTimeline/>
          </div>
          <div>
            <EventsCard/>
            <OpenProjects/>
          </div>
          <div>
            <TodoCard/>
          </div>
          </div>
            
          <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginTop: '20px'}}>
            <div>
              <MyTasks/>
            </div>
            <div>
              <StickyNotes/>
            </div>
          </div> 
            
      </Box>
    </Box>
  );
};

export default Dashboard