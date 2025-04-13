// import React from 'react'

// function ToDo() {
//   return (
//     <div>
//       <h1>ToDo</h1>
//     </div>
//   )
// }

// export default ToDo

































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
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
// import ManageLabel from '../Events/ManageLabel';

// function ToDo() {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [entriesPerPage, setEntriesPerPage] = useState(25);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [visible, setVisible] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState('');
//   const [newTodoText, setNewTodoText] = useState('');
//   const [activeFilter, setActiveFilter] = useState('todo');
//   const [isManageLabelOpen, setIsManageLabelOpen] = useState(false);

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = (value) => {
//     if (value) setEntriesPerPage(value);
//     setAnchorEl(null);
//   };

//   const handleSearch = (e) => {
//     setSearchValue(e.target.value);
//   };

//   const handleManageLabelClick = () => {
//     setIsManageLabelOpen(true);
//   };

//   const handleManageLabelClose = () => {
//     setIsManageLabelOpen(false);
//   };

//   const handleAddTodo = () => {
//     const newTask = {
//       id: Date.now(),
//       title: newTodoText,
//       date: new Date().toLocaleDateString(),
//       completed: false
//     };
//     setTasks(prev => [...prev, newTask]);
//     setNewTodoText('');
//   };

//   return (
//     <div style={{ 
//       padding: '20px',
//       borderRadius: '8px',
//       marginTop: '20px'
//     }}>
//       <div style={{ 
//           maxWidth: '600px', 
//           margin: '0 auto 40px',
//           display: 'flex',
//           flexDirection: 'row'
//         }}>
//         <TextField
//           fullWidth
//           value={newTodoText}
//           onChange={(e) => setNewTodoText(e.target.value)}
//           placeholder="Add a to do..."
//           variant="outlined"
//           size="small"
//           sx={{
//             backgroundColor: '#fff',
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': {
//                 borderColor: '#e0e0e0',
//               },
//               '&:hover fieldset': {
//                 borderColor: '#1976d2',
//               },
//             },
//           }}
//         />
//         <div>
//           <button
//                 onClick={handleAddTodo}
//                 style={{
//                   padding: '9px 16px',
//                   backgroundColor: '#1976d2',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '4px',
//                   cursor: 'pointer',
//                   fontSize: '14px',
//                   height: '40px',
//                 }}
//               >
//                 Save
//               </button>
//         </div>
//       </div>

//       <div style={{ 
//         backgroundColor: '#fff',
//         borderRadius: '8px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
//         padding: '20px'
//       }}>
//       <div style={{ display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center',
//           marginBottom: '20px' }}>
//         <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '500' }}>To do (Private)</h3>
//         <button 
//         onClick={handleManageLabelClick}
//         style={{
//             border: 'none',
//             background: 'none',
//             color: '#666',
//             fontSize: '14px',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center'
//           }}>
//             <IconButton >
//               <LocalOfferOutlinedIcon sx={{fontSize: 15}}/>
//             </IconButton>
//             Manage labels
//           </button>
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

//         <div style={{ display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center',
//           borderBottom: '1px solid #eee',
//           padding: '8px 0' }}>
//           <button onClick={() => setActiveFilter('todo')}
//             style={{
//               padding: '6px 12px',
//               border: 'none',
//               background: 'none',
//               color: activeFilter === 'todo' ? '#1976d2' : '#666',
//               borderBottom: activeFilter === 'todo' ? '2px solid #1976d2' : 'none',
//               fontSize: '14px',
//               cursor: 'pointer'
//             }}>To do</button>
//           <button style={{ 
//             padding: '6px 12px', 
//             border: 'none', 
//             background: 'transparent', 
//             color: '#666', 
//             fontSize: '14px', 
//             cursor: 'pointer' 
//           }}>Done</button>
//           <button style={{ 
//             padding: '6px 12px', 
//             border: 'none', 
//             background: 'transparent', 
//             color: '#666', 
//             fontSize: '14px', 
//             cursor: 'pointer' 
//           }}>Excel</button>
//           <button style={{ 
//             padding: '6px 12px', 
//             border: 'none', 
//             background: 'transparent', 
//             color: '#666', 
//             fontSize: '14px', 
//             cursor: 'pointer' 
//           }}>Print</button>
//           {searchOpen ? (
//             <TextField
//               size="small"
//               value={searchValue}
//               onChange={handleSearch}
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
//         display: 'grid',
//         gridTemplateColumns: '1fr auto',
//         borderBottom: '1px solid #e0e0e0',
//         padding: '12px 16px',
//         color: '#666',
//         fontSize: '14px'
//       }}>
//         <div>Title</div>
//         <div>Date</div>
//       </div>

//       {loading ? (
//         <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>Loading...</div>
//       ) : tasks.length === 0 ? (
//         <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>No record found.</div>
//       ) : (
//         <div style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//           {tasks.map((task) => (
//             <div key={task.id} style={{ 
//               display: 'grid',
//               gridTemplateColumns: '1fr auto',
//               padding: '12px 16px',
//               borderBottom: '1px solid #f0f0f0',
//               fontSize: '14px',
//               gap: '30px'
//             }}>
//               <div>{task.title}</div>
//               <div>{task.date}</div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div style={{ 
//         display: 'flex', 
//         justifyContent: 'space-between', 
//         alignItems: 'center', 
//         padding: '16px 0',
//         color: '#666',
//         fontSize: '14px'
//       }}>
//         <div>0 / 0</div>
//         <div style={{ display: 'flex', gap: '8px' }}>
//           <IconButton size="small">
//             <NavigateBeforeIcon fontSize="small" />
//           </IconButton>
//           <IconButton size="small">
//             <NavigateNextIcon fontSize="small" />
//           </IconButton>
//         </div>
//       </div>
//     </div>
//     <ManageLabel 
//         open={isManageLabelOpen} 
//         onClose={handleManageLabelClose}
//       />
//     </div>
//   );
// }

// export default ToDo



























import React, { useState } from 'react'
import { TextField } from '@mui/material';
import CustomTable from '../../components/Table/CustomTable'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ManageLabel from '../Events/ManageLabel'

function ToDo() {

  const [tasks, setTasks] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [activeFilter, setActiveFilter] = useState('todo');
  const [isManageLabelOpen, setIsManageLabelOpen] = useState(false);

  const filteredTasks = tasks.filter((task) =>
    activeFilter === 'todo' ? !task.completed : task.completed
  );
  

  const handleManageLabelClick = () => {
    setIsManageLabelOpen(true);
  };

  const handleManageLabelClose = () => {
    setIsManageLabelOpen(false);
  };


  const handleAddTodo = () => {
    if (!newTodoText.trim()) return;
    
    const newTask = {
      id: Date.now(),
      title: newTodoText,
      date: new Date().toLocaleDateString(),
      completed: false
    };
    setTasks(prev => [...prev, newTask]);
    setNewTodoText('');
  };

  const columns = [
    { id: 'title', label: 'Title', width: '1fr' },
    { id: 'date', label: 'Date', width: 'auto' }
  ];


  const customHeader = (
    <>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    }}>
      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '500' }}>
        To do(Private)
        </h3>
        <button
        onClick={handleManageLabelClick}
        style={{
          border: 'none',
            background: 'none',
            color: '#666',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
        }}
        >
          <LocalOfferOutlinedIcon sx={{ fontSize: 15 }} />
          Manage labels
        </button>
    </div>
    </>
  )

  const customToolbar = (
    <>
    <div style={{ 
      display: 'flex', 
      gap: '8px',
      borderBottom: '1px solid #eee',
     }}>
      <button
        onClick={() => setActiveFilter('todo')}
        style={{
          padding: '6px 12px',
          border: 'none',
          background: 'none',
          color: activeFilter === 'todo' ? '#1976d2' : '#666',
          borderBottom: activeFilter === 'todo' ? '2px solid #1976d2' : 'none',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        To do
      </button>
      <button
        onClick={() => setActiveFilter('done')}
        style={{
          padding: '6px 12px',
          border: 'none',
          background: 'none',
          color: activeFilter === 'done' ? '#1976d2' : '#666',
          borderBottom: activeFilter === 'done' ? '2px solid #1976d2' : 'none',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        Done
      </button>    
    </div>

    <div style={{ display: 'flex', gap: '8px' }}>
      <button style={{
        padding: '6px 12px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        background: 'transparent',
        color: '#666',
        fontSize: '14px',
        cursor: 'pointer'
      }}>
        Excel
      </button>
      <button style={{
        padding: '6px 12px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        background: 'transparent',
        color: '#666',
        fontSize: '14px',
        cursor: 'pointer'
      }}>
        Print
      </button>
    </div>
  </>
  );


  return (
  <>
    <div style={{
      maxWidth: '600px',
      margin: '60px auto 40px',
      display: 'flex',
      flexDirection: 'row',
    }}>

      <TextField 
      fullWidth
      value={newTodoText}
      onChange={(e) => setNewTodoText(e.target.value)}
      placeholder="Add a to do..."
      varient="outlined"
      size="small"
      onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
      sx={{
        backgroundColor: '#fff',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#e0e0e0',
          },
          '&:hover fieldset': {
            borderColor: '#1976d2',
          },
        },
      }}
      />

      <button
       onClick={handleAddTodo}
       style={{
        padding: '8px 13px',
        backgroundColor: '#1976d2',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        height: '40px'
       }}>
        Save
      </button>
    </div>

      <CustomTable
      data={filteredTasks}
      columns={columns}
      showSearch
      showVisibility
      showPagination
      showEntriesPerPage
      emptyStateMessage="No record found."
      customHeader={customHeader}
      customToolbar={customToolbar}
      containerStyles={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.10)',
        borderRadius: '8px',
        backgroundColor: '#fff'
      }}
      />
      <ManageLabel
      open={isManageLabelOpen}
      onClose={handleManageLabelClose}
      />
    </>
  )
}

export default ToDo