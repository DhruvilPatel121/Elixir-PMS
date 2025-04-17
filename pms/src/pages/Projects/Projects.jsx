// // import React from 'react'

// // function Projects() {
// //   return (
// //     <div>
// //       <h1>Projects</h1>
// //     </div>
// //   )
// // }

// // export default Projects



















































// import React, { useState } from 'react';
// import { 
//   IconButton, 
//   Menu, 
//   MenuItem,
//   TextField,
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// function Projects() {
//   const [visible, setVisible] = useState(false);
//   const [search, setSearch] = useState('');
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [entriesPerPage, setEntriesPerPage] = useState(25);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [filters, setFilters] = useState({
//     label: '',
//     deadline: '',
//     status: ''
//   });

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = (value) => {
//     if (value) setEntriesPerPage(value);
//     setAnchorEl(null);
//   };

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleFilterChange = (type, value) => {
//     setFilters(prev => ({ ...prev, [type]: value }));
//   };

//   return (
//     <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.12)', marginTop: '20px' }}>
//       <h2 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '500' }}>Projects</h2>

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
//             value={filters.label}
//             onChange={(e) => handleFilterChange('label', e.target.value)}
//             style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px' }}
//           >
//             <option value="">- Label -</option>
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
//             <option value="">- Status -</option>
//           </select>
//           <button style={{ padding: '6px 12px', border: 'none', background: 'transparent', color: '#666', fontSize: '14px', cursor: 'pointer' }}>Excel</button>
//           <button style={{ padding: '6px 12px', border: 'none', background: 'transparent', color: '#666', fontSize: '14px', cursor: 'pointer' }}>Print</button>
//           {searchOpen ? (
//             <TextField
//               size="small"
//               value={search}
//               onChange={handleSearch}
//               placeholder="Search..."
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

//       <div style={{ width: '100%', overflowX: 'auto' }}>
//         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr style={{ backgroundColor: '#f8f9fa' }}>
//               <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>ID</th>
//               <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Title</th>
//               <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Client</th>
//               <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Start date</th>
//               <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Deadline</th>
//               <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Progress</th>
//               <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td colSpan="7" style={{ textAlign: 'center', padding: '20px', color: '#666', borderBottom: '1px solid #eee' }}>
//                 No record found.
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
//         <div style={{ color: '#666', fontSize: '14px' }}>0 / 0</div>
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
//     </div>
//   );
// }

// export default Projects


















import React, { useState } from 'react';
import CustomTable from '../../components/Table/CustomTable';
import CustomButton from '../../components/Button/CustomButton';

function Projects() {
  const [projects, setProjects] = useState([
    {
    id: 1,
    title: 'Design New Website',
    client: 'Jane Smith',
    startDate: '2025-03-01',
    deadline: '2025-03-15',
    progress: '60%',
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'Build Database Schema',
    client: 'Alice Johnson',
    startDate: '2025-03-05',
    deadline: '2025-03-25',
    progress: '30%',
    status: 'Pending'
  },
  {
    id: 3,
    title: 'Implement User Authentication',
    client: 'Emily White',
    startDate: '2025-03-10',
    deadline: '2025-03-30',
    progress: '10%',
    status: 'In Progress'
  },
  {
    id: 4,
    title: 'Deploy Website to Production',
    client: 'Robert Davis',
    startDate: '2025-03-20',
    deadline: '2025-04-05',
    progress: '50%',
    status: 'Pending'
  },
  {
    id: 5,
    title: 'Create User Documentation',
    client: 'James Wilson',
    startDate: '2025-03-12',
    deadline: '2025-03-30',
    progress: '70%',
    status: 'Completed',
  },
  {
    id: 6,
    title: 'Design New Website',
    client: 'Jane Smith',
    startDate: '2025-03-01',
    deadline: '2025-03-15',
    progress: '60%',
    status: 'In Progress'
  },
  {
    id: 7,
    title: 'Build Database Schema',
    client: 'Alice Johnson',
    startDate: '2025-03-05',
    deadline: '2025-03-25',
    progress: '30%',
    status: 'Pending'
  },
  {
    id: 8,
    title: 'Implement User Authentication',
    client: 'Emily White',
    startDate: '2025-03-10',
    deadline: '2025-03-30',
    progress: '10%',
    status: 'In Progress'
  },
  {
    id: 9,
    title: 'Deploy Website to Production',
    client: 'Robert Davis',
    startDate: '2025-03-20',
    deadline: '2025-04-05',
    progress: '50%',
    status: 'Pending'
  },
  {
    id: 10,
    title: 'Create User Documentation',
    client: 'James Wilson',
    startDate: '2025-03-12',
    deadline: '2025-03-30',
    progress: '70%',
    status: 'Completed',
  }
  ]);
  const [filters, setFilters] = useState({
    label: '',
    deadline: '',
    status: ''
  });


  const handleFilterChange = (type, value) => {
    setFilters(prev => ({ ...prev, [type]: value }));
  };

  const columns = [
    { id: 'id', label: 'ID', width: '100px' },
    { id: 'title', label: 'Title', width: '2fr' },
    { id: 'client', label: 'Client', width: '1fr' },
    { id: 'startDate', label: 'Start date', width: '1fr' },
    { id: 'deadline', label: 'Deadline', width: '1fr' },
    { id: 'progress', label: 'Progress', width: '1fr' },
    { id: 'status', label: 'Status', width: '1fr', 
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
    }
  ];

  const customToolbar = (
    <>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <select 
        value={filters.label}
        onChange={(e) => handleFilterChange('label', e.target.value)}
        style={{ 
          padding: '6px 12px', 
          border: '1px solid #ddd', 
          borderRadius: '4px',
          color: '#666',
          fontSize: '14px'
        }}
      >
        <option value="">- Label -</option>
        <option value="urgent">Urgent</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>
      <select 
        value={filters.deadline}
        onChange={(e) => handleFilterChange('deadline', e.target.value)}
        style={{ 
          padding: '6px 12px', 
          border: '1px solid #ddd', 
          borderRadius: '4px',
          color: '#666',
          fontSize: '14px'
        }}
      >
        <option value="">- Deadline -</option>
      </select>
      <select 
        value={filters.status}
        onChange={(e) => handleFilterChange('status', e.target.value)}
        style={{ 
          padding: '6px 12px', 
          border: '1px solid #ddd', 
          borderRadius: '4px',
          color: '#666',
          fontSize: '14px'
        }}
      >
        <option value="">- Status -</option>
        <option value="in_progress">In Progress</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
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

  

  return (
    <CustomTable
      title="Projects"
      data={projects}
      columns={columns}
      showSearch
      showVisibility
      showPagination
      showEntriesPerPage
      emptyStateMessage="No record found."
      customToolbar={customToolbar}
    />
  );
}

export default Projects