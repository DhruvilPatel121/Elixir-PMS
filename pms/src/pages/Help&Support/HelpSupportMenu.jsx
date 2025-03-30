import React, { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Help, Remove } from '@mui/icons-material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const HelpSupportMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Help />
        </ListItemIcon>
        <ListItemText primary="Help & Support" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton 
            sx={{ pl: 4 }}
            selected={location.pathname === '/helpsupport/help'}
            onClick={() => navigate('/helpsupport/help')}
          >
            <ListItemIcon>
              <Remove />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItemButton>
          <ListItemButton 
            sx={{ pl: 4 }}
            selected={location.pathname === '/helpsupport/helparticles'}
            onClick={() => navigate('/helpsupport/helparticles')}
          >
            <ListItemIcon>
              <Remove />
            </ListItemIcon>
            <ListItemText primary="Help Articles" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

export default HelpSupportMenu
