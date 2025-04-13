// import React, { useState } from 'react';
// import { 
//   IconButton, 
//   Menu, 
//   MenuItem,
//   TextField,
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const Leave = () => {
//   const [visible, setVisible] = useState(false);
//   const [leaves, setLeaves] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [viewType, setViewType] = useState('monthly');
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState('');
//   const [rowsPerPage, setRowsPerPage] = useState(25);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleDateChange = (direction) => {
//     const newDate = new Date(currentDate);
//     newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
//     setCurrentDate(newDate);
//   };

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = (value) => {
//     if (value) setRowsPerPage(value);
//     setAnchorEl(null);
//   };

//   const handleAddLeave = () => {
//     console.log("Add Leave")
//   }

//   return (
//     <div style={{ 
//       padding: '20px',
//       backgroundColor: '#fff',
//       borderRadius: '8px',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
//       marginTop: '20px',
//       minHeight: '300px'
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//         <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>My leave</h2>
//         <div style={{ display: 'flex', gap: '2px', marginLeft: '20px' }}>
//           {['Monthly', 'Yearly'].map(option => (
//             <button
//               key={option}
//               onClick={() => setViewType(option.toLowerCase())}
//               style={{
//                 padding: '6px 16px',
//                 border: 'none',
//                 borderRadius: '4px',
//                 background: viewType === option.toLowerCase() ? '#f0f0f0' : 'transparent',
//                 color: viewType === option.toLowerCase() ? '#1976d2' : '#666',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: viewType === option.toLowerCase() ? '500' : '400',
//                 transition: 'all 0.2s'
//               }}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//         </div>
//           <button onClick={handleAddLeave} 
//             style={{
//               padding: '8px 16px',
//               backgroundColor: '#1976d2',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '14px',
//               fontWeight: '500',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '4px',
//               transition: 'background-color 0.2s'
//             }}>Add Leave</button>
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
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={() => handleMenuClose()}
//           >
//             {[10, 25, 50, 100].map((value) => (
//               <MenuItem 
//                 key={value} 
//                 onClick={() => handleMenuClose(value)}
//                 selected={rowsPerPage === value}
//               >
//                 {value}
//               </MenuItem>
//             ))}
//           </Menu>
//           <IconButton size="small" onClick={() => setVisible(!visible)}>
//       {visible ? (
//         <VisibilityIcon sx={{ fontSize: 20 }} />
//       ) : (
//         <VisibilityOffIcon sx={{ fontSize: 20 }} />
//       )}
//     </IconButton>
//         </div>

//         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//             <IconButton size="small" onClick={() => handleDateChange('prev')}>
//               <NavigateBeforeIcon fontSize="small" />
//             </IconButton>
//             <span style={{ color: '#666', fontSize: '14px' }}>
//               {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
//             </span>
//             <IconButton size="small" onClick={() => handleDateChange('next')}>
//               <NavigateNextIcon fontSize="small" />
//             </IconButton>
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
//         padding: '8px 0',
//         color: '#666',
//         fontSize: '14px'
//       }}>
//         <div style={{ flex: 1 }}>Leave type</div>
//         <div style={{ flex: 1 }}>Date</div>
//         <div style={{ flex: 1 }}>Duration</div>
//         <div style={{ flex: 1 }}>Status</div>
//         <div style={{ width: '40px' }}></div>
//       </div>

//       {loading ? (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px' }}>
//           Loading...
//         </div>
//       ) : leaves.length === 0 ? (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: '#666' }}>
//           No record found.
//         </div>
//       ) : (
//         <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
//           {leaves.map((leave, index) => (
//             <div key={index} style={{ 
//               display: 'flex',
//               padding: '12px 0',
//               borderBottom: '1px solid #f0f0f0',
//               fontSize: '14px',
//               color: '#333'
//             }}>
//               <div style={{ flex: 1 }}>{leave.type}</div>
//               <div style={{ flex: 1 }}>{leave.date}</div>
//               <div style={{ flex: 1 }}>{leave.duration}</div>
//               <div style={{ flex: 1 }}>{leave.status}</div>
//               <div style={{ width: '40px', display: 'flex', justifyContent: 'center' }}>
//                 <IconButton size="small">
//                   <MoreVertIcon style={{ fontSize: '18px' }} />
//                 </IconButton>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div style={{ 
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '16px 0',
//         borderTop: '1px solid #e0e0e0',
//         marginTop: 'auto'
//       }}>
//         <div style={{ color: '#666', fontSize: '14px' }}>
//           {`${leaves.length ? '1' : '0'}-${leaves.length} / ${leaves.length}`}
//         </div>
//         <div style={{ display: 'flex', gap: '8px' }}>
//           <IconButton size="small" disabled={!leaves.length}>
//             <NavigateBeforeIcon fontSize="small" />
//           </IconButton>
//           <IconButton size="small" disabled={!leaves.length}>
//             <NavigateNextIcon fontSize="small" />
//           </IconButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leave






















import React, { useState } from 'react';
import CustomTable from '../../components/Table/CustomTable';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Leave = () => {
  const [leaves, setLeaves] = useState([]);
  const [viewType, setViewType] = useState('monthly');
  const [currentDate, setCurrentDate] = useState(new Date());


  const columns = [
    { id: 'type', label: 'Leave type', width: '1fr' },
    { id: 'date', label: 'Date', width: '1fr' },
    { id: 'duration', label: 'Duration', width: '1fr' },
    { id: 'status', label: 'Status', width: '1fr' },
    { 
      id: 'actions', 
      label: '', 
      width: '40px',
      render: () => (
        <IconButton size="small">
          <MoreVertIcon style={{ fontSize: '18px' }} />
        </IconButton>
      )
    }
  ];

  const handleAddLeave = () => {
    console.log("Add Leave")
  }

  const handleDateChange = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const customHeader = (
    <>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
           <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>My leave</h2>
            <div style={{ display: 'flex', gap: '2px' }}>
               {['Monthly', 'Yearly'].map(option => (
                  <button
                     key={option}
                    onClick={() => setViewType(option.toLowerCase())}
                      style={{
                        padding: '6px 16px',
                        border: 'none',
                        borderRadius: '4px',
                        background: viewType === option.toLowerCase() ? '#f0f0f0' : 'transparent',
                        color: viewType === option.toLowerCase() ? '#1976d2' : '#666',
                        cursor: 'pointer',
                        fontSize: '14px'
                       }}
                    >
                     {option}
                    </button>                 
                  ))}
             </div>
        </div>

        <button onClick={handleAddLeave} 
            style={{
              padding: '8px 16px',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'background-color 0.2s'
            }}>Add Leave
          </button>
        </div>
      </>
    );

    const customToolbar = (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
             <IconButton size="small" onClick={() => handleDateChange('prev')}>
               <NavigateBeforeIcon fontSize="small" />
             </IconButton>
             <span style={{ color: '#666', fontSize: '14px' }}>
               {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
             </span>
             <IconButton size="small" onClick={() => handleDateChange('next')}>
               <NavigateNextIcon fontSize="small" />
             </IconButton>
           </div>

           <div style={{ display: 'flex', gap: '8px' }}>
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
      </button>
    </div>
    </>
   )

  return (
    <CustomTable
      title="My leave"
      data={leaves}
      columns={columns}
      showSearch
      showVisibility
      showPagination
      showEntriesPerPage
      customHeader={customHeader}
      customToolbar={customToolbar}
    />
  );
};

export default Leave