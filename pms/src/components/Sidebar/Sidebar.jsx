import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemButton,
  ListItemIcon, 
  ListItemText 
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import TeamMenu from '../../pages/Team/TeamMenu';


const Sidebar = ({ open, menuItems, onMenuClick }) => {
  const location = useLocation();

  return (
    <List>
      <img 
        src="src\assets\logo.png"
        alt="" 
        style={{ 
          height: 45,
          width: '90%',
          padding: '0px 0px',
          objectFit: 'contain',
        }} 
      />
      {menuItems.map((item) => (
        item.text === 'Team' ? (
          <TeamMenu key={item.text} open={open} sx={{ display: 'block' }} />
        ) : (
        <ListItem 
          key={item.text}
          disablePadding
          sx={{ display: 'block' }}
        >
          <ListItemButton
            onClick={() => onMenuClick(item.text, item.path)}
            selected={location.pathname === item.path}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                opacity: open ? 1 : 0,
                display: open ? 'block' : 'none'
              }} 
            />
          </ListItemButton>
        </ListItem>
        )
      ))}
    </List>
  );
};

export default Sidebar