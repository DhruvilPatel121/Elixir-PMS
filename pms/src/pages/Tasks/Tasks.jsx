// import React, { useState } from 'react';
// import { 
//   IconButton, 
//   Menu, 
//   MenuItem,
//   TextField,
//   Avatar,
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// function Tasks() {
//   const [tasks, setTasks] = useState([
//     {
//     id: 1,
//     title: 'Design New Website',
//     startDate: '2025-03-01',
//     deadline: '2025-03-15',
//     milestone: 'Phase 1',
//     project: 'Website Redesign',
//     assignedTo: { name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
//     collaborators: [
//       { name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
//       { name: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' }
//     ],
//     status: 'In Progress',
//     approxHours: 20
//   },
//   {
//     id: 2,
//     title: 'Build Database Schema',
//     startDate: '2025-03-05',
//     deadline: '2025-03-25',
//     milestone: 'Phase 2',
//     project: 'Website Redesign',
//     assignedTo: { name: 'Michael Brown', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
//     collaborators: [
//       { name: 'Emily White', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
//       { name: 'Robert Davis', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' }
//     ],
//     status: 'Pending',
//     approxHours: 30
//   },
//   {
//     id: 3,
//     title: 'Implement User Authentication',
//     startDate: '2025-03-10',
//     deadline: '2025-03-30',
//     milestone: 'Phase 3',
//     project: 'Website Redesign',
//     assignedTo: { name: 'Sarah Miller', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
//     collaborators: [
//       { name: 'James Wilson', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
//       { name: 'David Garcia', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' }
//     ],
//     status: 'In Progress',
//     approxHours: 15
//   },
//   {
//     id: 4,
//     title: 'Deploy Website to Production',
//     startDate: '2025-03-20',
//     deadline: '2025-04-05',
//     milestone: 'Phase 4',
//     project: 'Website Redesign',
//     assignedTo: { name: 'David Lee', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
//     collaborators: [
//       { name: 'Jessica Thompson', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' }
//     ],
//     status: 'Pending',
//     approxHours: 10
//   },
//   {
//     id: 5,
//     title: 'Create User Documentation',
//     startDate: '2025-03-12',
//     deadline: '2025-03-30',
//     milestone: 'Documentation',
//     project: 'Website Redesign',
//     assignedTo: { name: 'Natalie Brown', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
//     collaborators: [
//       { name: 'Carlos Martinez', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' }
//     ],
//     status: 'Completed',
//     approxHours: 40
//   },
//   {
//     id: 6,
//     title: 'Design New Website',
//     startDate: '2025-03-01',
//     deadline: '2025-03-15',
//     milestone: 'Phase 1',
//     project: 'Website Redesign',
//     assignedTo: { name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
//     collaborators: [
//       { name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
//       { name: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' }
//     ],
//     status: 'In Progress',
//     approxHours: 20
//   },
//   {
//     id: 7,
//     title: 'Build Database Schema',
//     startDate: '2025-03-05',
//     deadline: '2025-03-25',
//     milestone: 'Phase 2',
//     project: 'Website Redesign',
//     assignedTo: { name: 'Michael Brown', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
//     collaborators: [
//       { name: 'Emily White', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
//       { name: 'Robert Davis', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' }
//     ],
//     status: 'Pending',
//     approxHours: 30
//   },
//   {
//     id: 8,
//     title: 'Implement User Authentication',
//     startDate: '2025-03-10',
//     deadline: '2025-03-30',
//     milestone: 'Phase 3',
//     project: 'Website Redesign',
//     assignedTo: { name: 'Sarah Miller', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
//     collaborators: [
//       { name: 'James Wilson', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
//       { name: 'David Garcia', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' }
//     ],
//     status: 'In Progress',
//     approxHours: 15
//   },
//   {
//     id: 9,
//     title: 'Deploy Website to Production',
//     startDate: '2025-03-20',
//     deadline: '2025-04-05',
//     milestone: 'Phase 4',
//     project: 'Website Redesign',
//     assignedTo: { name: 'David Lee', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
//     collaborators: [
//       { name: 'Jessica Thompson', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' }
//     ],
//     status: 'Pending',
//     approxHours: 10
//   },
//   {
//     id: 10,
//     title: 'Create User Documentation',
//     startDate: '2025-03-12',
//     deadline: '2025-03-30',
//     milestone: 'Documentation',
//     project: 'Website Redesign',
//     assignedTo: { name: 'Natalie Brown', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
//     collaborators: [
//       { name: 'Carlos Martinez', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' }
//     ],
//     status: 'Completed',
//     approxHours: 40
//   }
//   ]);

//   const [visible, setVisible] = useState(false);
//   const [search, setSearch] = useState('');
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [entriesPerPage, setEntriesPerPage] = useState(25);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [actionAnchorEl, setActionAnchorEl] = useState(null);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [filters, setFilters] = useState({
//     priority: '',
//     milestone: '',
//     assignedTo: '',
//     deadline: '',
//     status: '',
//     quickFilters:'',
//     project: ''
//   });

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = (value) => {
//     if (value) setEntriesPerPage(value);
//     setAnchorEl(null);
//   };

//   const handleActionClick = (event, task) => {
//     setSelectedTask(task);
//     setActionAnchorEl(event.currentTarget);
//   };

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleFilterChange = (type, value) => {
//     setFilters(prev => ({ ...prev, [type]: value }));
//   };

//   return (
//     <div style={{ 
//       padding: '20px',
//       backgroundColor: '#fff',
//       borderRadius: '8px',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
//       marginTop: '20px'
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//         <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>Tasks</h2>
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//           <button
//             onClick={handleMenuClick}
//             style={{
//               padding: '6px 12px',
//               border: '1px solid #ddd',
//               borderRadius: '4px',
//               background: 'transparent',
//               color: '#666',
//               fontSize: '14px',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             {entriesPerPage} <KeyboardArrowDownIcon fontSize="small" />
//           </button>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={() => handleMenuClose()}
//           >
//             {[25, 50, 100].map((value) => (
//               <MenuItem 
//                 key={value} 
//                 onClick={() => handleMenuClose(value)}
//                 selected={entriesPerPage === value}
//               >
//                 {value}
//               </MenuItem>
//             ))}
//           </Menu>
//           <IconButton size="small" onClick={() => setVisible(!visible)}>
//             {visible ? (
//               <VisibilityIcon sx={{ fontSize: 20 }} />
//             ) : (
//               <VisibilityOffIcon sx={{ fontSize: 20 }} />
//             )}
//           </IconButton>
//         </div>

//         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//           <select 
//             value={filters.priority}
//             onChange={(e) => handleFilterChange('priority', e.target.value)}
//             style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px' }}
//           >
//             <option value="">- Priority -</option>
//             <option value="high">High</option>
//             <option value="medium">Medium</option>
//             <option value="low">Low</option>
//           </select>
//           <select 
//             value={filters.milestone}
//             onChange={(e) => handleFilterChange('milestone', e.target.value)}
//             style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px' }}
//           >
//             <option value="">- Milestone -</option>
//           </select>
//           <select 
//             value={filters.assignedTo}
//             onChange={(e) => handleFilterChange('assignedTo', e.target.value)}
//             style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px' }}
//           >
//             <option value="">Team Members</option>
//           </select>
//           <select 
//             value={filters.deadline}
//             onChange={(e) => handleFilterChange('deadline', e.target.value)}
//             style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px' }}
//           >
//             <option value="">- Deadline -</option>
//           </select>
//           <select 
//             value={filters.status}
//             onChange={(e) => handleFilterChange('status', e.target.value)}
//             style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px' }}
//           >
//             <option value="">Status</option>
//           </select>
//           <button style={{ padding: '6px 12px', border: 'none', background: 'transparent', color: '#666', fontSize: '14px', cursor: 'pointer' }}>Excel</button>
//           <button style={{ padding: '6px 12px', border: 'none', background: 'transparent', color: '#666', fontSize: '14px', cursor: 'pointer' }}>Print</button>
//           {searchOpen ? (
//             <TextField
//               size="small"
//               value={search}
//               onChange={handleSearch}
//               placeholder="Search..."
//               autoFocus
//               onBlur={() => !search && setSearchOpen(false)}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   height: '32px',
//                   fontSize: '14px',
//                   width: '200px'
//                 }
//               }}
//             />
//           ) : (
//             <button 
//               onClick={() => setSearchOpen(true)}
//               style={{ 
//                 padding: '6px 12px',
//                 border: '1px solid #ddd',
//                 borderRadius: '4px',
//                 background: 'transparent',
//                 color: '#666',
//                 fontSize: '14px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '4px',
//                 cursor: 'pointer'
//               }}
//             >
//               <SearchIcon fontSize="small" />
//               Search
//             </button>
//           )}
//         </div>
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', marginRight: '94px', marginBottom: '20px' }}>
//         <select 
//             value={filters.quickFilters}
//             onChange={(e) => handleFilterChange('quickFilters', e.target.value)}
//             style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px' }}
//           >
//             <option value="">- Quick Filters -</option>
//           </select>
//           <select 
//             value={filters.project}
//             onChange={(e) => handleFilterChange('project', e.target.value)}
//             style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px' }}
//           >
//             <option value="">Project</option>
//           </select>
//       </div>

//       <div style={{ width: '100%', overflowX: 'auto' }}>
//         <div style={{ 
//           display: 'grid',
//           gridTemplateColumns: '50px 2fr 120px 120px 120px 100px 150px 100px 100px 100px',
//           borderBottom: '1px solid #e0e0e0',
//           padding: '12px 16px',
//           color: '#666',
//           fontSize: '14px',
//           backgroundColor: '#f8f9fa',
//           gap: '8px'
//         }}>
//           <div>ID</div>
//           <div>Title</div>
//           <div>Start date</div>
//           <div>Deadline</div>
//           <div>Milestone</div>
//           <div>Project</div>
//           <div>Assigned to</div>
//           <div>Collaborators</div>
//           <div>Status</div>
//           <div>Approx Hours</div>
//         </div>

//         {tasks.length === 0 ? (
//           <div style={{ 
//             padding: '20px', 
//             textAlign: 'center', 
//             color: '#666',
//             fontSize: '14px' 
//           }}>
//             No record found.
//           </div>
//         ) : (
//           <div style={{ maxHeight: '240px', overflowY: 'auto', overflowX: 'hidden' }}>
//             {tasks.map((task) => (
//               <div key={task.id} style={{ 
//                 display: 'grid',
//                 gridTemplateColumns: '50px 2fr 120px 120px 120px 100px 150px 100px 100px 100px',
//                 padding: '12px 16px',
//                 borderBottom: '1px solid #f0f0f0',
//                 fontSize: '14px',
//                 color: '#333',
//                 alignItems: 'center',
//                 gap: '8px'
//               }}>
//                 <div >{task.id}</div>
//                 <div style={{ 
//                   flex: '1', 
//                   color: '#1976d2', 
//                   cursor: 'pointer', 
//                   whiteSpace: 'nowrap', 
//                   overflow: 'hidden', 
//                   textOverflow: 'ellipsis' 
//                 }}>
//                   {task.title}
//                   </div>
//                 <div>{task.startDate}</div>
//                 <div>{task.deadline}</div>
//                 <div>{task.milestone}</div>
//                 <div style={{ 
//                   whiteSpace: 'nowrap', 
//                   overflow: 'hidden', 
//                   textOverflow: 'ellipsis' 
//                 }}>
//                   {task.project}</div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                   <Avatar src={task.assignedTo.avatar} sx={{ width: 24, height: 24 }} />
//                   <span style={{ 
//                     whiteSpace: 'nowrap', 
//                     overflow: 'hidden', 
//                     textOverflow: 'ellipsis' 
//                   }}>
//                     {task.assignedTo.name}</span>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//                   {task.collaborators.map((collaborator, index) => (
//                     <Avatar 
//                       key={index}
//                       src={collaborator.avatar} 
//                       sx={{ width: 24, height: 24 }}
//                       title={collaborator.name}
//                     />
//                   ))}
//                 </div>
//                 <div style={{ flex: '0 0 100px' }}>
//                   <span style={{
//                     padding: '4px 8px',
//                     borderRadius: '4px',
//                     fontSize: '12px',
//                     backgroundColor: task.status === 'In Progress' ? '#fff3e0' : '#e8f5e9',
//                     color: task.status === 'In Progress' ? '#ef6c00' : '#2e7d32'
//                   }}>
//                     {task.status}
//                   </span>
//                 </div>
//                 <div >{task.approxHours}h</div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
//         <div style={{ color: '#666', fontSize: '14px' }}>0 of 0</div>
//         <div style={{ display: 'flex', gap: '5px' }}>
//           <button 
//             style={{ 
//               padding: '6px 12px', 
//               border: '1px solid #ddd', 
//               borderRadius: '4px', 
//               cursor: 'pointer',
//               background: 'white'
//             }}
//           >
//             «
//           </button>
//           <button 
//             style={{ 
//               padding: '6px 12px', 
//               border: '1px solid #ddd', 
//               borderRadius: '4px', 
//               cursor: 'pointer',
//               background: 'white'
//             }}
//           >
//             »
//           </button>
//         </div>
//       </div>

//       {/* <Menu
//         anchorEl={actionAnchorEl}
//         open={Boolean(actionAnchorEl)}
//         onClose={() => setActionAnchorEl(null)}
//       >
//         <MenuItem onClick={() => setActionAnchorEl(null)}>View Details</MenuItem>
//         <MenuItem onClick={() => setActionAnchorEl(null)}>Edit</MenuItem>
//         <MenuItem onClick={() => setActionAnchorEl(null)} style={{ color: '#d32f2f' }}>Delete</MenuItem>
//       </Menu> */}
//     </div>
//   );
// }

// export default Tasks






































import React, { useState } from 'react';
import CustomTable from '../../components/Table/CustomTable';
import { Avatar } from '@mui/material';
import CustomButton from '../../components/Button/CustomButton';

function Tasks() {
  const [filters, setFilters] = useState({
    priority: '',
    milestone: '',
    assignedTo: '',
    deadline: '',
    status: '',
    quickFilters:'',
    project: ''
  });

    const handleFilterChange = (type, value) => {
    setFilters(prev => ({ ...prev, [type]: value }));
  };

  const [tasks, setTasks] = useState([
  {
    id: 1,
    title: 'Design New Website',
    startDate: '2025-03-01',
    deadline: '2025-03-15',
    milestone: 'Phase 1',
    project: 'Website Redesign',
    assignedTo: { name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    collaborators: [
      { name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { name: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' }
    ],
    status: 'In Progress',
    approxHours: 20
  },
  {
    id: 2,
    title: 'Build Database Schema',
    startDate: '2025-03-05',
    deadline: '2025-03-25',
    milestone: 'Phase 2',
    project: 'Website Redesign',
    assignedTo: { name: 'Michael Brown', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    collaborators: [
      { name: 'Emily White', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
      { name: 'Robert Davis', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' }
    ],
    status: 'Pending',
    approxHours: 30
  },
  {
    id: 3,
    title: 'Implement User Authentication',
    startDate: '2025-03-10',
    deadline: '2025-03-30',
    milestone: 'Phase 3',
    project: 'Website Redesign',
    assignedTo: { name: 'Sarah Miller', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    collaborators: [
      { name: 'James Wilson', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
      { name: 'David Garcia', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' }
    ],
    status: 'In Progress',
    approxHours: 15
  },
  {
    id: 4,
    title: 'Deploy Website to Production',
    startDate: '2025-03-20',
    deadline: '2025-04-05',
    milestone: 'Phase 4',
    project: 'Website Redesign',
    assignedTo: { name: 'David Lee', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
    collaborators: [
      { name: 'Jessica Thompson', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' }
    ],
    status: 'Pending',
    approxHours: 10
  },
  {
    id: 5,
    title: 'Create User Documentation',
    startDate: '2025-03-12',
    deadline: '2025-03-30',
    milestone: 'Documentation',
    project: 'Website Redesign',
    assignedTo: { name: 'Natalie Brown', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
    collaborators: [
      { name: 'Carlos Martinez', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' }
    ],
    status: 'Completed',
    approxHours: 40
  },
  {
    id: 6,
    title: 'Design New Website',
    startDate: '2025-03-01',
    deadline: '2025-03-15',
    milestone: 'Phase 1',
    project: 'Website Redesign',
    assignedTo: { name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    collaborators: [
      { name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { name: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' }
    ],
    status: 'In Progress',
    approxHours: 20
  },
  {
    id: 7,
    title: 'Build Database Schema',
    startDate: '2025-03-05',
    deadline: '2025-03-25',
    milestone: 'Phase 2',
    project: 'Website Redesign',
    assignedTo: { name: 'Michael Brown', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    collaborators: [
      { name: 'Emily White', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
      { name: 'Robert Davis', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' }
    ],
    status: 'Pending',
    approxHours: 30
  },
  {
    id: 8,
    title: 'Implement User Authentication',
    startDate: '2025-03-10',
    deadline: '2025-03-30',
    milestone: 'Phase 3',
    project: 'Website Redesign',
    assignedTo: { name: 'Sarah Miller', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    collaborators: [
      { name: 'James Wilson', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
      { name: 'David Garcia', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' }
    ],
    status: 'In Progress',
    approxHours: 15
  },
  {
    id: 9,
    title: 'Deploy Website to Production',
    startDate: '2025-03-20',
    deadline: '2025-04-05',
    milestone: 'Phase 4',
    project: 'Website Redesign',
    assignedTo: { name: 'David Lee', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
    collaborators: [
      { name: 'Jessica Thompson', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' }
    ],
    status: 'Pending',
    approxHours: 10
  },
  {
    id: 10,
    title: 'Create User Documentation',
    startDate: '2025-03-12',
    deadline: '2025-03-30',
    milestone: 'Documentation',
    project: 'Website Redesign',
    assignedTo: { name: 'Natalie Brown', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
    collaborators: [
      { name: 'Carlos Martinez', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' }
    ],
    status: 'Completed',
    approxHours: 40
  }
  ]);


  const columns = [
    { id: 'id', label: 'ID', width: '100px' },
    { id: 'title', label: 'Title', width: '2fr',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>{row.title}</span>
        </div>
      )
    },
    { id: 'startDate', label: 'Start date', width: '1fr' },
    { id: 'deadline', label: 'Deadline', width: '1fr' },
    { id: 'milestone', label: 'Milestone', width: '1fr' },
    { id: 'project', label: 'Project', width: '1fr' },
    { id: 'assignedTo', label: 'Assigned to', width: '1fr',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Avatar src={row.assignedTo.avatar} sx={{ width: 24, height: 24 }} />
          <span>{row.assignedTo.name}</span>
        </div>
      )
    },
    { id: 'collaborators', label: 'Collaborators', width: '1fr',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {row.collaborators.map((collaborator, index) => (
            <Avatar 
              key={index}
              src={collaborator.avatar} 
              sx={{ width: 24, height: 24 }}
              title={collaborator.name}
            />
          ))}
        </div>
      )
    },
    { id: 'status', label: 'Status', width: '100px',
      render: (row) => (
        <span style={{
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          backgroundColor: row.status === 'In Progress' ? '#fff3e0' : '#e8f5e9',
          color: row.status === 'In Progress' ? '#ef6c00' : '#2e7d32'
        }}>
          {row.status}
        </span>
      )
    },
    { id: 'approxHours', label: 'Approx Hours', width: '80px',
      render: (row) => `${row.approxHours}h`
    }
  ];

  const customToolbar = (
    <>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
           <select 
            value={filters.priority}
            onChange={(e) => handleFilterChange('priority', e.target.value)}
            style={{ 
              padding: '6px 12px', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              color: '#666',
              fontSize: '14px' 
            }}
          >
            <option value="">- Priority -</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select 
            value={filters.milestone}
            onChange={(e) => handleFilterChange('milestone', e.target.value)}
            style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px', color: '#666', fontSize: '14px' }}
          >
            <option value="">- Milestone -</option>
          </select>
          <select 
            value={filters.assignedTo}
            onChange={(e) => handleFilterChange('assignedTo', e.target.value)}
            style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px', color: '#666', fontSize: '14px' }}
          >
            <option value="">Team Members</option>
          </select>
          <select 
            value={filters.deadline}
            onChange={(e) => handleFilterChange('deadline', e.target.value)}
            style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px', color: '#666', fontSize: '14px' }}
          >
            <option value="">- Deadline -</option>
          </select>
          <select 
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px', color: '#666', fontSize: '14px' }}
          >
            <option value="">Status</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
      {/* <button 
        style={{ 
          padding: '6px 12px', 
          border: '1px solid #ddd',
          borderRadius: '4px',
          background: 'transparent', 
          color: '#666', 
          fontSize: '14px', 
          cursor: 'pointer' 
        }}
      >
        Excel
      </button>
      <button 
        style={{ 
          padding: '6px 12px', 
          border: '1px solid #ddd',
          borderRadius: '4px',
          background: 'transparent', 
          color: '#666', 
          fontSize: '14px', 
          cursor: 'pointer' 
        }}
      >
        Print
      </button> */}

      <CustomButton
        variant="outlined"
      >
        Excel
      </CustomButton>
      <CustomButton
        variant="outlined"
      >
        Print
      </CustomButton>
    </div>
    </>
  );

  const customActions = (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', marginRight: '94px', marginBottom: '20px' }}>
        <select 
            value={filters.quickFilters}
            onChange={(e) => handleFilterChange('quickFilters', e.target.value)}
            style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px', color: '#666', fontSize: '14px'  }}
          >
            <option value="">- Quick Filters -</option>
          </select>
          <select 
            value={filters.project}
            onChange={(e) => handleFilterChange('project', e.target.value)}
            style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px', color: '#666', fontSize: '14px'  }}
          >
            <option value="">Project</option>
          </select>
      </div>
  );

  return (
    <CustomTable
      title="Tasks"
      data={tasks}
      columns={columns}
      showSearch
      showVisibility
      showPagination
      showEntriesPerPage
      customToolbar={customToolbar}
      customActions={customActions}
    />
  );
}

export default Tasks