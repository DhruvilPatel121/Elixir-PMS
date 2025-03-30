import React from 'react';
import { 
  Toolbar, 
  IconButton, 
  Typography,
  Box,
  Avatar,
  Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LanguageIcon from '@mui/icons-material/Language';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Navbar = ({ handleDrawerToggle }) => {
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
        <IconButton size="small" sx={{ color: 'text.secondary' }}>
          <RefreshIcon />
        </IconButton>
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
        <Tooltip title="Search">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Tooltip>
        
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

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
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
      </Box>
    </Toolbar>
  );
};

export default Navbar