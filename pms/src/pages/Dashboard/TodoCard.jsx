// import React, { useState } from 'react';
// import { Paper, Typography, Box, Button, TextField, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import EditNoteIcon from '@mui/icons-material/EditNote';
// import LinkOffIcon from '@mui/icons-material/LinkOff';
// import MenuIcon from '@mui/icons-material/Menu';
// import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

// const TodoCard = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeTab, setActiveTab] = useState('todo');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const handleAddTodo = () => {
//     if (newTodo.trim()) {
//       setTodos([
//         ...todos,
//         {
//           id: Date.now(),
//           title: newTodo,
//           date: new Date().toLocaleString(),
//           status: 'todo'
//         }
//       ]);
//       setNewTodo('');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleAddTodo();
//     }
//   };

//   const filteredTodos = todos.filter(todo => 
//     todo.status === activeTab &&
//     todo.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentTodos = filteredTodos.slice(startIndex, endIndex);

//   return (
//     <Paper 
//       elevation={0} 
//       sx={{ 
//         p: 3, 
//         borderRadius: 2,
//         bgcolor: '#FFFFFF',
//         height: '875px',
//         transition: 'transform 0.2s',
//         '&:hover': {
//           transform: 'translateY(-4px)',
//           boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//         }
//       }}
//     >
//       {/* Header section with title */}
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
//         <EditNoteIcon sx={{ color: 'text.secondary' }} />
//         <Typography variant="h6" fontWeight="medium">
//           To do (Private)
//         </Typography>
//       </Box>

//       {/* Add todo and search section */}
//       <Box sx={{ mb: 3 }}>
//         <Box sx={{ 
//           display: 'flex', 
//           gap: 2, 
//           mb: 2,
//           bgcolor: '#F8F9FA',
//           borderRadius: 1,
//           p: 1
//         }}>
//           <TextField
//             fullWidth
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Add a to do..."
//             variant="standard"
//             InputProps={{
//               disableUnderline: true,
//             }}
//           />
//           <Button 
//             variant="contained"
//             onClick={handleAddTodo}
//             sx={{ 
//               bgcolor: '#4A89DC',
//               '&:hover': { bgcolor: '#357ABD' },
//               textTransform: 'none'
//             }}
//           >
//             Save
//           </Button>
//         </Box>

//         <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
//           <LinkOffIcon sx={{ color: 'text.secondary' }} />
//           <TextField
//             fullWidth
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search"
//             variant="outlined"
//             size="small"
//             InputProps={{
//               endAdornment: <SearchIcon sx={{ color: 'text.secondary' }} />
//             }}
//           />
//         </Box>
//       </Box>

//       {/* tabs and menu section */}
//       <Box sx={{ 
//         display: 'flex', 
//         justifyContent: 'flex-end',
//         gap: 1, 
//         mb: 3 
//       }}>
//         {['todo', 'done'].map((tab) => (
//           <Button 
//             key={tab}
//             variant={activeTab === tab ? 'contained' : 'text'}
//             size="small"
//             onClick={() => setActiveTab(tab)}
//             sx={activeTab === tab ? { 
//               bgcolor: '#F8F9FA',
//               color: 'text.primary',
//               boxShadow: 'none',
//               '&:hover': { bgcolor: '#E9ECEF', boxShadow: 'none' }
//             } : { 
//               color: 'text.secondary' 
//             }}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </Button>
//         ))}
//       </Box>

//       {/* table header */}
//       <Box sx={{ 
//         display: 'flex', 
//         mb: 2, 
//         color: 'text.secondary',
//         borderBottom: '1px solid #E9ECEF',
//         pb: 1
//       }}>
//         <Box sx={{ 
//           display: 'flex', 
//           alignItems: 'center', 
//           flex: 1 
//         }}>
//           Title
//         </Box>
//         <Box sx={{ flex: 1 }}>Date</Box>
//         <Box sx={{ width: 40, display: 'flex', justifyContent: 'flex-end' }}>
//           <MenuIcon />
//         </Box>
//       </Box>

//       <Box sx={{ 
//         minHeight: '200px',
//         maxHeight: '250px',
//         overflowY: 'auto'
//       }}>
//         {currentTodos.length > 0 ? (
//           currentTodos.map((todo) => (
//             <Box 
//               key={todo.id}
//               sx={{ 
//                 display: 'flex', 
//                 py: 1,
//                 borderBottom: '1px solid #E9ECEF'
//               }}
//             >
//               <Box sx={{ flex: 1 }}>{todo.title}</Box>
//               <Box sx={{ flex: 1 }}>{todo.date}</Box>
//               <Box sx={{ width: 40 }}></Box>
//             </Box>
//           ))
//         ) : (
//           <Box sx={{ 
//             display: 'flex', 
//             justifyContent: 'center', 
//             alignItems: 'center',
//             height: '200px'
//           }}>
//             <Typography color="text.secondary">
//               No record found.
//             </Typography>
//           </Box>
//         )}
//       </Box>

//       <Box sx={{ 
//         mt: 'auto',
//         pt: 2,
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         borderTop: '1px solid #E9ECEF'
//       }}>
//         <Typography variant="body2" color="text.secondary">
//           {`${startIndex}-${Math.min(endIndex, filteredTodos.length)} / ${filteredTodos.length}`}
//         </Typography>
//         <Box sx={{ display: 'flex', gap: 1 }}>
//           <IconButton 
//             size="small" 
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage(prev => prev - 1)}
//           >
//             <KeyboardDoubleArrowLeftIcon />
//           </IconButton>
//           <IconButton 
//             size="small" 
//             disabled={currentPage === totalPages || totalPages === 0}
//             onClick={() => setCurrentPage(prev => prev + 1)}
//           >
//             <KeyboardDoubleArrowRightIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Paper>
//   );
// };

// export default TodoCard






















import React, { useState } from 'react';
import { Typography, Box, Button, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CustomCard from './CustomCard';
import CustomButton from '../../components/Button/CustomButton';


const TodoCard = () => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('todo');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: newTodo,
          date: new Date().toLocaleString(),
          status: 'done'
        }
      ]);
      setNewTodo('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const filteredTodos = todos.filter(todo => 
    todo.status === activeTab &&
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTodos = filteredTodos.slice(startIndex, endIndex);

  return (
    <CustomCard 
      title="To do (Private)"
      icon={<EditNoteIcon />}
      height="875px"
    >

       <Box sx={{ mb: 3 }}>
         <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          mb: 2,
          bgcolor: '#F8F9FA',
          borderRadius: 1,
          p: 1
        }}>
          <TextField
            fullWidth
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a to do..."
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          />
          {/* <Button 
            variant="contained"
            onClick={handleAddTodo}
            sx={{ 
              bgcolor: '#4A89DC',
              '&:hover': { bgcolor: '#357ABD' },
              textTransform: 'none'
            }}
          >
            Save
          </Button> */}
          <CustomButton
            variant="contained"
            onClick={handleAddTodo}
            // sx={{ 
            //   bgcolor: '#4A89DC',
            //   '&:hover': { bgcolor: '#357ABD' },
            //   textTransform: 'none'
            // }}
          >
            Save
          </CustomButton>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <LinkOffIcon sx={{ color: 'text.secondary' }} />
          <TextField
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: <SearchIcon sx={{ color: 'text.secondary' }} />
            }}
          />
        </Box>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end',
        gap: 1, 
        mb: 3 
      }}>
        {['todo', 'done'].map((tab) => (
          // <Button 
          //   key={tab}
          //   variant={activeTab === tab ? 'contained' : 'text'}
          //   size="small"
          //   onClick={() => setActiveTab(tab)}
          //   sx={activeTab === tab ? { 
          //     bgcolor: '#F8F9FA',
          //     color: 'text.primary',
          //     boxShadow: 'none',
          //     '&:hover': { bgcolor: '#E9ECEF', boxShadow: 'none' }
          //   } : { 
          //     color: 'text.secondary' 
          //   }}
          // >
          //   {tab.charAt(0).toUpperCase() + tab.slice(1)}
          // </Button>
          <CustomButton
            key={tab}
            variant={activeTab === tab ? 'contained' : 'text'}
            size="small"
            onClick={() => setActiveTab(tab)}
            sx={activeTab === tab ? { 
              bgcolor: '#F8F9FA',
              color: 'text.primary',
              boxShadow: 'none',
              '&:hover': { bgcolor: '#E9ECEF', boxShadow: 'none' }
            } : { 
              color: 'text.secondary' 
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </CustomButton>
        ))}
      </Box>

      <Box sx={{ 
        display: 'flex', 
        mb: 2, 
        color: 'text.secondary',
        borderBottom: '1px solid #E9ECEF',
        pb: 1
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          flex: 1 
        }}>
          Title
        </Box>
        <Box sx={{ flex: 1 }}>Date</Box>
        <Box sx={{ width: 40, display: 'flex', justifyContent: 'flex-end' }}>
          <MenuIcon />
        </Box>
      </Box>

      <Box sx={{ 
        minHeight: '200px',
        maxHeight: '250px',
        overflowY: 'auto'
      }}>
        {currentTodos.length > 0 ? (
          currentTodos.map((todo) => (
            <Box 
              key={todo.id}
              sx={{ 
                display: 'flex', 
                py: 1,
                borderBottom: '1px solid #E9ECEF'
              }}
            >
              <Box sx={{ flex: 1 }}>{todo.title}</Box>
              <Box sx={{ flex: 1 }}>{todo.date}</Box>
              <Box sx={{ width: 40 }}></Box>
            </Box>
          ))
        ) : (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            height: '200px'
          }}>
            <Typography color="text.secondary">
              No record found.
            </Typography>
          </Box>
        )}
      </Box>

      <Box sx={{ 
        mt: 'auto',
        pt: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #E9ECEF'
      }}>
        <Typography variant="body2" color="text.secondary">
          {`${startIndex}-${Math.min(endIndex, filteredTodos.length)} / ${filteredTodos.length}`}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton 
            size="small" 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            <KeyboardDoubleArrowLeftIcon />
          </IconButton>
          <IconButton 
            size="small" 
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            <KeyboardDoubleArrowRightIcon />
          </IconButton>
        </Box>
      </Box>
    </CustomCard>
  )
}

export default TodoCard