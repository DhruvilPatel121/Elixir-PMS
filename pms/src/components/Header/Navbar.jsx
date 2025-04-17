import React, { useState } from 'react';
import { 
  Toolbar, 
  IconButton, 
  Typography,
  Box,
  Avatar,
  Tooltip,
  TextField, 
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LanguageIcon from '@mui/icons-material/Language';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ handleDrawerToggle }) => {

  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/');
    handleClose();
  };

  const handleTaskAltIcon = () => {
    navigate('/todo');
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <Toolbar 
      sx={{ 
        minHeight: '48px !important',
        px: 2,
        width: '98%',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0,0,0,0.08)'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: 'text.secondary' }}
          size="small"
        >
          <MenuIcon />
        </IconButton>
        <Tooltip title="ToDo">
        <IconButton onClick={handleTaskAltIcon} size="small" sx={{ color: 'text.secondary' }}>
          <TaskAltIcon />
        </IconButton>
        </Tooltip>
        <IconButton size="small" sx={{ color: 'text.secondary' }}>
          <GridViewIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: 'text.secondary' }}>
          <DesktopWindowsIcon />
        </IconButton>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1,
        '& .MuiIconButton-root': {
          color: 'text.secondary',
          size: 'small'
        }
      }}>
        {searchOpen ? (
          <TextField
            size="small"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search..."
            autoFocus
            onBlur={() => !searchValue && setSearchOpen(false)}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: '32px',
                fontSize: '14px',
                width: '200px',
                backgroundColor: '#fff'
              }
            }}
          />
        ) : (
        <Tooltip title="Search">
          <IconButton
          onClick={() => setSearchOpen(true)}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
        )}
        <Tooltip title="Add New">
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Language">
          <IconButton>
            <LanguageIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Recent Activity">
          <IconButton>
            <AccessTimeIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications">
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Messages">
          <IconButton>
            <EmailOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}
        onClick={handleClick}
        >
          <Avatar 
            sx={{ 
              width: 32, 
              height: 32,
              fontSize: '14px'
            }}
          >
            DB
          </Avatar>
          <Typography 
            sx={{ 
              fontSize: '14px',
              color: 'text.secondary',
              fontWeight: 500
            }}
          >
            Dhruvil Bhuva
          </Typography>
        </Box>
        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
          },
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      </Box>
    </Toolbar>
  );
};

export default Navbar