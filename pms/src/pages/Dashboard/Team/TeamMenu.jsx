import React, { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import Group from '@mui/icons-material/group'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventNoteIcon from '@mui/icons-material/EventNote';
import TimelineIcon from '@mui/icons-material/Timeline';
import CampaignIcon from '@mui/icons-material/Campaign';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const TeamMenu = () => {
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
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary="Team" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton 
            sx={{ pl: 4 }}
            selected={location.pathname === '/team/teammembers'}
            onClick={() => navigate('/team/teammembers')}
          >
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Team Members" />
          </ListItemButton>
          <ListItemButton 
            sx={{ pl: 4 }}
            selected={location.pathname === '/team/timecards'}
            onClick={() => navigate('/team/timecards')}
          >
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText primary="Time Cards" />
          </ListItemButton>
          <ListItemButton 
            sx={{ pl: 4 }}
            selected={location.pathname === '/team/leave'}
            onClick={() => navigate('/team/leave')}
          >
            <ListItemIcon>
              <EventNoteIcon />
            </ListItemIcon>
            <ListItemText primary="Leave" />
          </ListItemButton>
          <ListItemButton 
            sx={{ pl: 4 }}
            selected={location.pathname === '/team/timeline'}
            onClick={() => navigate('/team/timeline')}
          >
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary="Timeline" />
          </ListItemButton>
          <ListItemButton 
            sx={{ pl: 4 }}
            selected={location.pathname === '/team/announcements'}
            onClick={() => navigate('/team/announcements')}
          >
            <ListItemIcon>
              <CampaignIcon />
            </ListItemIcon>
            <ListItemText primary="Announcements" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

export default TeamMenu