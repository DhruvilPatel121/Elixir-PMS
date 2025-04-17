// import React, { useState, useEffect } from 'react';
// import { 
//   IconButton, 
//   Menu, 
//   MenuItem,
//   TextField,
//   Avatar,
//   Tooltip,
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import GridViewIcon from '@mui/icons-material/GridView';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// const TeamMembers = () => {
//       const [visible, setVisible] = useState(false);
    
//   const [members, setMembers] = useState([
//     { 
//       id: 1, 
//       name: 'Akash Mangroliya', 
//       jobTitle: 'Admin', 
//       avatar: '/avatars/akash.jpg',
//       status: 'active'
//     },
//     { 
//       id: 2, 
//       name: 'Apeksha Trivedi', 
//       jobTitle: 'HR Executive', 
//       avatar: '/avatars/apeksha.jpg',
//       status: 'active'
//     },
//     { 
//         id: 3, 
//         name: 'Akash Mangroliya', 
//         jobTitle: 'Admin', 
//         avatar: '/avatars/akash.jpg',
//         status: 'active' 
//     },
//     { 
//         id: 4, 
//         name: 'Apeksha Trivedi', 
//         jobTitle: 'HR Executive', 
//         avatar: '/avatars/apeksha.jpg',
//         status: 'active' 
//     },
//     { 
//         id: 5, 
//         name: 'Ayush Patel', 
//         jobTitle: 'ReactJS Intern', 
//         avatar: '/avatars/ayush.jpg',
//         status: 'active'
//     },
//     { 
//         id: 6, 
//         name: 'Bharat Ahuja', 
//         jobTitle: 'QA', 
//         avatar: '/avatars/bharat.jpg',
//         status: 'active'
//     },
//     { 
//         id: 7, 
//         name: 'Dhruv Hingol', 
//         jobTitle: 'Software Engineer', 
//         avatar: '/avatars/dhruv.jpg',
//         status: 'active' 
//     },
//   ]);
  
//   const [viewType, setViewType] = useState('active');
//   const [rowsPerPage, setRowsPerPage] = useState(25);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [actionAnchorEl, setActionAnchorEl] = useState(null);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [viewMode, setViewMode] = useState('list');


//   const handleActionClick = (event, member) => {
//     setSelectedMember(member);
//     setActionAnchorEl(event.currentTarget);
//   };

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = (value) => {
//     if (value) setRowsPerPage(value);
//     setAnchorEl(null);
//   };

//   const filteredMembers = members.filter(member => 
//     member.status === viewType && 
//     (searchValue === '' || 
//     member.name.toLowerCase().includes(searchValue.toLowerCase()) ||
//     member.jobTitle.toLowerCase().includes(searchValue.toLowerCase()))
//   );

//   return (
//     <div style={{ 
//       padding: '20px',
//       backgroundColor: '#fff',
//       borderRadius: '8px',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
//       marginTop: '20px',
//       minHeight: '600px'
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
//         <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>Team members</h2>
//         <div style={{ display: 'flex', gap: '8px' }}>
//           <Tooltip title="List view">
//             <IconButton size="small" onClick={() => setViewMode('list')} 
//               style={{ color: viewMode === 'list' ? '#1976d2' : '#666' }}>
//               <ViewListIcon />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Grid view">
//             <IconButton size="small" onClick={() => setViewMode('grid')}
//               style={{ color: viewMode === 'grid' ? '#1976d2' : '#666' }}>
//               <GridViewIcon />
//             </IconButton>
//           </Tooltip>
//         </div>
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
//             {rowsPerPage} <KeyboardArrowDownIcon fontSize="small" />
//           </button>
//           <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={() => handleMenuClose()}
//               >
//               {[10, 25, 50, 100].map((value) => (
//                 <MenuItem 
//                   key={value} 
//                   onClick={() => handleMenuClose(value)}
//                   selected={rowsPerPage === value}
//                 >
//                   {value}
//                 </MenuItem>
//                   ))}
//             </Menu>
//                     <IconButton size="small" onClick={() => setVisible(!visible)}>
//                 {visible ? (
//                   <VisibilityIcon sx={{ fontSize: 20 }} />
//                 ) : (
//                   <VisibilityOffIcon sx={{ fontSize: 20 }} />
//                 )}
//               </IconButton>
//         </div>

//         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//           <div style={{ display: 'flex', gap: '2px' }}>
//             {['Active members', 'Inactive members'].map(option => (
//               <button
//                 key={option}
//                 onClick={() => setViewType(option.toLowerCase())}
//                 style={{
//                   padding: '6px 16px',
//                   border: 'none',
//                   borderRadius: '4px',
//                   background: viewType === option.toLowerCase() ? '#f0f0f0' : 'transparent',
//                   color: viewType === option.toLowerCase() ? '#1976d2' : '#666',
//                   cursor: 'pointer',
//                   fontSize: '14px',
//                   fontWeight: viewType === option.toLowerCase() ? '500' : '400',
//                 }}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//           <button style={{ padding: '6px 12px', border: 'none', background: 'transparent', color: '#666', fontSize: '14px', cursor: 'pointer' }}>Excel</button>
//           <button style={{ padding: '6px 12px', border: 'none', background: 'transparent', color: '#666', fontSize: '14px', cursor: 'pointer' }}>Print</button>
//           {searchOpen ? (
//             <TextField
//               size="small"
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//               placeholder="Search..."
//               autoFocus
//               onBlur={() => !searchValue && setSearchOpen(false)}
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

//       <div style={{ 
//         display: 'flex',
//         borderBottom: '1px solid #e0e0e0',
//         padding: '12px 16px',
//         color: '#666',
//         fontSize: '14px',
//         alignItems: 'center',
//         backgroundColor: '#f8f9fa'
//       }}>
//         <div style={{ flex: 2 }}>Name</div>
//         <div style={{ flex: 1 }}>Job Title</div>
//         <div style={{ width: '40px' }}></div>
//       </div>

//       <div style={{ maxHeight: 'calc(100vh - 280px)', overflowY: 'auto' }}>
//         {filteredMembers.map((member) => (
//           <div key={member.id} style={{ 
//             display: 'flex',
//             padding: '12px 16px',
//             borderBottom: '1px solid #f0f0f0',
//             fontSize: '14px',
//             color: '#333',
//             alignItems: 'center'
//           }}>
//             <div style={{ flex: 2, display: 'flex', alignItems: 'center', gap: '12px' }}>
//               <Avatar 
//                 src={member.avatar} 
//                 sx={{ 
//                   width: 32, 
//                   height: 32,
//                   backgroundColor: !member.avatar ? '#1976d2' : undefined 
//                 }}
//               >
//                 {!member.avatar && member.name.charAt(0)}
//               </Avatar>
//               <span style={{ fontWeight: '500' }}>{member.name}</span>
//             </div>
//             <div style={{ flex: 1, color: '#666' }}>{member.jobTitle}</div>
//             <div style={{ width: '40px', display: 'flex', justifyContent: 'center' }}>
//               <IconButton 
//                 size="small" 
//                 onClick={(e) => handleActionClick(e, member)}
//               >
//                 <MoreHorizIcon style={{ fontSize: '18px' }} />
//               </IconButton>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Menu
//         anchorEl={actionAnchorEl}
//         open={Boolean(actionAnchorEl)}
//         onClose={() => setActionAnchorEl(null)}
//         PaperProps={{
//           style: {
//             minWidth: '150px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
//           }
//         }}
//       >
//         <MenuItem onClick={() => setActionAnchorEl(null)}>View Profile</MenuItem>
//         <MenuItem onClick={() => setActionAnchorEl(null)}>Edit</MenuItem>
//         <MenuItem onClick={() => setActionAnchorEl(null)} style={{ color: '#d32f2f' }}>
//           Remove
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// };

// export default TeamMembers
































import React, { useState } from 'react';
import { 
  IconButton, 
  Menu, 
  MenuItem,
  Avatar,
  Tooltip,
} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import CustomTable from '../../components/Table/CustomTable';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CustomButton from '../../components/Button/CustomButton';

const TeamMembers = () => {
  const [members, setMembers] = useState([
    { 
      id: 1, 
      name: 'Akash Mangroliya', 
      jobTitle: 'Admin', 
      avatar: '/avatars/akash.jpg',
      status: 'active'
    },
    { 
      id: 2, 
      name: 'Apeksha Trivedi', 
      jobTitle: 'HR Executive', 
      avatar: '/avatars/apeksha.jpg',
      status: 'active'
    },
    { 
        id: 3, 
        name: 'Akash Mangroliya', 
        jobTitle: 'Admin', 
        avatar: '/avatars/akash.jpg',
        status: 'active' 
    },
    { 
        id: 4, 
        name: 'Apeksha Trivedi', 
        jobTitle: 'HR Executive', 
        avatar: '/avatars/apeksha.jpg',
        status: 'active' 
    },
    { 
        id: 5, 
        name: 'Ayush Patel', 
        jobTitle: 'ReactJS Intern', 
        avatar: '/avatars/ayush.jpg',
        status: 'active'
    },
    { 
        id: 6, 
        name: 'Bharat Ahuja', 
        jobTitle: 'QA', 
        avatar: '/avatars/bharat.jpg',
        status: 'active'
    },
    { 
        id: 7, 
        name: 'Dhruv Hingol', 
        jobTitle: 'Software Engineer', 
        avatar: '/avatars/dhruv.jpg',
        status: 'active' 
    },
  ]);
  const [actionAnchorEl, setActionAnchorEl] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [viewType, setViewType] = useState('active');
  const [viewMode, setViewMode] = useState('list');

  const handleActionClick = (event, member) => {
    setActionAnchorEl(event.currentTarget);
    setSelectedMember(member);
  };

  const columns = [
    { 
      id: 'name', 
      label: 'Name', 
      width: '2fr',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Avatar 
            src={row.avatar} 
            sx={{ 
              width: 32, 
              height: 32,
              backgroundColor: !row.avatar ? '#1976d2' : undefined 
            }}
          >
            {!row.avatar && row.name.charAt(0)}
          </Avatar>
          <span style={{ fontWeight: '500' }}>{row.name}</span>
        </div>
      )
    },
    { id: 'jobTitle', label: 'Job Title', width: '1fr' },
    { 
      id: 'actions', 
      label: '', 
      width: '40px',
      render: (row) => (
        <IconButton 
          size="small" 
          onClick={(e) => handleActionClick(e, row)}
        >
          <MoreHorizIcon style={{ fontSize: '18px' }} />
        </IconButton>
      )
    }
  ];

  const customHeader = (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
         <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>Team members</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
           <Tooltip title="List view">
             <IconButton size="small" onClick={() => setViewMode('list')} 
              style={{ color: viewMode === 'list' ? '#1976d2' : '#666' }}>
              <ViewListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Grid view">
            <IconButton size="small" onClick={() => setViewMode('grid')}
              style={{ color: viewMode === 'grid' ? '#1976d2' : '#666' }}>
              <GridViewIcon />
            </IconButton>
          </Tooltip>
        </div>
        </div>
  )

  const customToolbar = ( 
        <>
        <div style={{ display: 'flex', gap: '2px' }}>
             {['Active members', 'Inactive members'].map(option => (
              // <button
              //   key={option}
              //   onClick={() => setViewType(option.toLowerCase())}
              //   style={{
              //     padding: '6px 16px',
              //     border: 'none',
              //     borderRadius: '4px',
              //     background: viewType === option.toLowerCase() ? '#f0f0f0' : 'transparent',
              //     color: viewType === option.toLowerCase() ? '#1976d2' : '#666',
              //     cursor: 'pointer',
              //     fontSize: '14px',
              //     fontWeight: viewType === option.toLowerCase() ? '500' : '400',
              //   }}
              // >
              //   {option}
              // </button>

              <CustomButton
              variant="text"
              key={option}
              onClick={() => setViewType(option.toLowerCase())}
              style={{
                  padding: '6px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  background: viewType === option.toLowerCase() ? '#f0f0f0' : 'transparent',
                  color: viewType === option.toLowerCase() ? '#1976d2' : '#666',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: viewType === option.toLowerCase() ? '500' : '400',
                }}
              >
                {option}
              </CustomButton>
            ))}
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
    )

  return (
    <>
      <CustomTable
        title="Team Members"
        data={members}
        columns={columns}
        showSearch
        showVisibility
        showPagination
        showEntriesPerPage
        customToolbar={customToolbar}
        customHeader={customHeader}
      />
      <Menu
        anchorEl={actionAnchorEl}
        open={Boolean(actionAnchorEl)}
        onClose={() => setActionAnchorEl(null)}
        PaperProps={{
          style: {
            minWidth: '150px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }
        }}
      >
        <MenuItem onClick={() => setActionAnchorEl(null)}>View Profile</MenuItem>
        <MenuItem onClick={() => setActionAnchorEl(null)}>Edit</MenuItem>
        <MenuItem onClick={() => setActionAnchorEl(null)} style={{ color: '#d32f2f' }}>
          Remove
        </MenuItem>
      </Menu>
    </>
  );
};

export default TeamMembers