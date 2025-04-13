// import React, { useState } from 'react';
// import { 
//   IconButton, 
//   Menu, 
//   MenuItem, 
//   TextField,
//   Tooltip
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import SortIcon from '@mui/icons-material/Sort';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const TimeCards = () => {
//   const [timeCards, setTimeCards] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [viewType, setViewType] = useState('monthly');
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [sortField, setSortField] = useState(null);
//   const [sortDirection, setSortDirection] = useState('asc');
//   const [anchorEl, setAnchorEl] = useState(null);
//    const [visible, setVisible] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState('');
//   const [viewAnchorEl, setViewAnchorEl] = useState(null);
//   const [rowsPerPage, setRowsPerPage] = useState(25);

//   const viewOptions = [
//     { id: 'monthly', label: 'Monthly' },
//     { id: 'weekly', label: 'Weekly' },
//     { id: 'custom', label: 'Custom' },
//     { id: 'summary', label: 'Summary' },
//     { id: 'clockInOut', label: 'Clock in-out' }
//   ];

//   const handleDateChange = (direction) => {
//     const newDate = new Date(currentDate);
//     if (viewType === 'monthly') {
//       newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
//     } else {
//       newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
//     }
//     setCurrentDate(newDate);
//   };

//   const handleSort = (field) => {
//     setSortField(field);
//     setSortDirection(current => current === 'asc' ? 'desc' : 'asc');
//   };

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = (value) => {
//     if (value) setRowsPerPage(value);
//     setAnchorEl(null);
//   };

//   const handleViewMenuClick = (event) => {
//     setViewAnchorEl(event.currentTarget);
//   };

//   const handleViewMenuClose = () => {
//     setViewAnchorEl(null);
//   };

//   return (
//     <div style={{ 
//       padding: '20px',
//       marginTop: '20px',
//       backgroundColor: '#fff',
//       borderRadius: '8px',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
//       minHeight: '300px'
//     }}>
//       {/* Header Section */}
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//         <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>My time cards</h2>
//         <div style={{ display: 'flex', gap: '2px' }}>
//           {viewOptions.map(option => (
//             <button
//               key={option.id}
//               onClick={() => setViewType(option.id)}
//               style={{
//                 padding: '6px 16px',
//                 border: 'none',
//                 borderRadius: '4px',
//                 background: viewType === option.id ? '#f0f0f0' : 'transparent',
//                 color: viewType === option.id ? '#1976d2' : '#666',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: viewType === option.id ? '500' : '400',
//                 transition: 'all 0.2s'
//               }}
//             >
//               {option.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Toolbar Section */}
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

//       {/* Table Header */}
//       <div style={{ 
//         display: 'flex',
//         borderBottom: '1px solid #e0e0e0',
//         padding: '8px 0',
//         color: '#666',
//         fontSize: '14px'
//       }}>
//         {['In Date', 'In Time', 'Out Date', 'Out Time', 'Duration'].map((header, index) => (
//           <div key={header} style={{ 
//             flex: 1,
//             display: 'flex',
//             alignItems: 'center',
//             gap: '4px',
//             cursor: 'pointer'
//           }}
//           onClick={() => handleSort(header)}
//           >
//             {header}
//             <SortIcon style={{ fontSize: '16px', opacity: sortField === header ? 1 : 0.3 }} />
//           </div>
//         ))}
//         <div style={{ width: '40px', display: 'flex', justifyContent: 'center' }}>
//           <MoreVertIcon style={{ fontSize: '18px', color: '#666' }} />
//         </div>
//       </div>

//       {/* Table Content */}
//       {loading ? (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
//           Loading...
//         </div>
//       ) : timeCards.length === 0 ? (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: '#666' }}>
//           No record found.
//         </div>
//       ) : (
//         <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
//           {timeCards.map((card, index) => (
//             <div key={index} style={{ 
//               display: 'flex',
//               padding: '12px 0',
//               borderBottom: '1px solid #f0f0f0',
//               fontSize: '14px',
//               color: '#333'
//             }}>
//               <div style={{ flex: 1 }}>{card.inDate}</div>
//               <div style={{ flex: 1 }}>{card.inTime}</div>
//               <div style={{ flex: 1 }}>{card.outDate}</div>
//               <div style={{ flex: 1 }}>{card.outTime}</div>
//               <div style={{ flex: 1 }}>{card.duration}</div>
//               <div style={{ width: '40px', display: 'flex', justifyContent: 'center' }}>
//                 <IconButton size="small">
//                   <MoreVertIcon style={{ fontSize: '18px' }} />
//                 </IconButton>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Footer */}
//       <div style={{ 
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '16px 0',
//         borderTop: '1px solid #e0e0e0',
//         marginTop: 'auto'
//       }}>
//         <div style={{ color: '#666', fontSize: '14px' }}>
//           {`${timeCards.length ? '1' : '0'}-${timeCards.length} / ${timeCards.length}`}
//         </div>
//         <div style={{ display: 'flex', gap: '8px' }}>
//           <IconButton size="small" disabled={!timeCards.length}>
//             <NavigateBeforeIcon fontSize="small" />
//           </IconButton>
//           <IconButton size="small" disabled={!timeCards.length}>
//             <NavigateNextIcon fontSize="small" />
//           </IconButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeCards






















import React, { useState } from 'react';
import CustomTable from '../../components/Table/CustomTable';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TimeCards = () => {
  const [timeCards, setTimeCards] = useState([]);
  const [viewType, setViewType] = useState('monthly');
  const [currentDate, setCurrentDate] = useState(new Date());

  const columns = [
    { id: 'inDate', label: 'In Date', width: '1fr' },
    { id: 'inTime', label: 'In Time', width: '1fr' },
    { id: 'outDate', label: 'Out Date', width: '1fr' },
    { id: 'outTime', label: 'Out Time', width: '1fr' },
    { id: 'duration', label: 'Duration', width: '1fr' },
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

    const handleDateChange = (direction) => {
    const newDate = new Date(currentDate);
    if (viewType === 'monthly') {
      newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    } else {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
    }
    setCurrentDate(newDate);
  };

  const customHeader = (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>My time cards</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
      {['Monthly', 'Weekly', 'Custom', 'Summary', 'Clock in-out'].map((option) => (
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
  )

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
      title="Time Cards"
      data={timeCards}
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

export default TimeCards