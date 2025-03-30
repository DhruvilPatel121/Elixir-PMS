import Dashboard from '../pages/Dashboard/Dashboard';
import Team from '../pages/Team/Team';
import TeamMembers from '../pages/Team/TeamMembers';
import TimeCards from '../pages/Team/TimeCards';
import Timeline from '../pages/Team/TimeLine';
import Leave from '../pages/Team/Leave';
import Announcements from '../pages/Team/Announcements';
import Events from '../pages/Events/Events';
import Projects from '../pages/Projects/Projects';
import Tasks from '../pages/Tasks/Tasks';
import Reports from '../pages/Reports/Reports';
import Timesheets from '../pages/Reports/Timesheets';


export const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard'
  },
  {
    path: '/events',
    component: Events,
    name: 'Events'
  },
  {
    path: '/projects',
    component: Projects,
    name: 'Projects'
  },
  {
    path: '/tasks',
    component: Tasks,
    name: 'Tasks'
  },
  {
    path: '/team',
    component: Team,
    name: 'Team',
    children: [
      {
        path: 'teammembers',
        component: TeamMembers,
        name: 'Team Members'
      },
      {
        path: 'timecards',
        component: TimeCards,
        name: 'Time Cards'
      },
      {
        path: 'leave',
        component: Leave,
        name: 'Leave'
      },
      {
        path: 'timeline',
        component: Timeline,
        name: 'Timeline'
      },
      {
        path: 'announcements',
        component: Announcements,
        name: 'Announcements'
      }
    ]
  },
  {
    path: '/reports',
    component: Reports,
    name: 'Reports',
    children: [
      {
        path: 'timesheets',
        component: Timesheets,
        name: 'Timesheets'
      }
    ]
  },
];