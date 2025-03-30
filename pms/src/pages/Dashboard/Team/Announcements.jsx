// import React from 'react';
// import { Box, Paper, Typography } from '@mui/material';

// const Announcements = () => {
//   return (
//     <Box sx={{ p: 3 }}>
//       <Paper sx={{ p: 3, borderRadius: 2 }}>
//         <Typography variant="h6">Announcements</Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Announcements;






























import React, { useState } from 'react';
import { 
  IconButton, 
  Menu, 
  MenuItem,
  TextField,
  Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'Annual Office Trip-2025',
      createdBy: {
        name: 'Apeksha Trivedi',
        avatar: '/avatars/apeksha.jpg'
      },
      startDate: '10/01/2025',
      endDate: '13/01/2025'
    },
    {
      id: 2,
      title: 'The Most Awaited Annual Office Trip',
      createdBy: {
        name: 'Apeksha Trivedi',
        avatar: '/avatars/apeksha.jpg'
      },
      startDate: '03/01/2025',
      endDate: '12/01/2025'
    },
    {
      id: 3,
      title: 'Annual Office Trip-2025',
      createdBy: {
        name: 'Apeksha Trivedi',
        avatar: '/avatars/apeksha.jpg'
      },
      startDate: '10/01/2025',
      endDate: '13/01/2025'
    },
    {
      id: 4,
      title: 'The Most Awaited Annual Office Trip',
      createdBy: {
        name: 'Apeksha Trivedi',
        avatar: '/avatars/apeksha.jpg'
      },
      startDate: '03/01/2025',
      endDate: '12/01/2025'
    },
    {
      id: 5,
      title: 'Annual Office Trip-2025',
      createdBy: {
        name: 'Apeksha Trivedi',
        avatar: '/avatars/apeksha.jpg'
      },
      startDate: '10/01/2025',
      endDate: '13/01/2025'
    },
    {
      id: 6,
      title: 'The Most Awaited Annual Office Trip',
      createdBy: {
        name: 'Apeksha Trivedi',
        avatar: '/avatars/apeksha.jpg'
      },
      startDate: '03/01/2025',
      endDate: '12/01/2025'
    },
    {
      id: 7,
      title: 'Annual Office Trip-2025',
      createdBy: {
        name: 'Apeksha Trivedi',
        avatar: '/avatars/apeksha.jpg'
      },
      startDate: '10/01/2025',
      endDate: '13/01/2025'
    },
    {
      id: 8,
      title: 'Annual Office Trip-2025',
      createdBy: {
        name: 'Apeksha Trivedi',
        avatar: '/avatars/apeksha.jpg'
      },
      startDate: '10/01/2025',
      endDate: '13/01/2025'
    },
    {
      id: 9,
      title: 'The Most Awaited Annual Office Trip',
      createdBy: {
        name: 'Apeksha Trivedi',
        avatar: '/avatars/apeksha.jpg'
      },
      startDate: '03/01/2025',
      endDate: '12/01/2025'
    },
  ]);

  const [searchOpen, setSearchOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredAnnouncements, setFilteredAnnouncements] = useState(announcements);

  const handleSearch = (value) => {
  setSearchValue(value);
  if (value.trim() === '') {
    setFilteredAnnouncements(announcements);
  } else {
    const searchTerm = value.toLowerCase();
    const filtered = announcements.filter(announcement => 
      announcement.title.toLowerCase().includes(searchTerm) ||
      announcement.createdBy.name.toLowerCase().includes(searchTerm) ||
      announcement.startDate.includes(searchTerm) ||
      announcement.endDate.includes(searchTerm)
    );
    setFilteredAnnouncements(filtered);
  }
};

  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      marginTop: '20px',
      minHeight: '600px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>Announcements</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            style={{
              padding: '6px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              background: 'transparent',
              color: '#666',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer'
            }}
          >
            All <KeyboardArrowDownIcon fontSize="small" />
          </button>
          <IconButton size="small" onClick={() => setVisible(!visible)}>
                {visible ? (
                  <VisibilityIcon sx={{ fontSize: 20 }} />
                ) : (
                  <VisibilityOffIcon sx={{ fontSize: 20 }} />
                )}
              </IconButton>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button style={{ padding: '6px 12px', border: 'none', background: 'transparent', color: '#666', fontSize: '14px', cursor: 'pointer' }}>Print</button>
          {searchOpen ? (
            <TextField
              size="small"
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search..."
              autoFocus
              onBlur={() => !searchValue && setSearchOpen(false)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '32px',
                  fontSize: '14px',
                  width: '200px'
                }
              }}
            />
          ) : (
            <button 
              onClick={() => setSearchOpen(true)}
              style={{ 
                padding: '6px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                background: 'transparent',
                color: '#666',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              <SearchIcon fontSize="small" />
              Search
            </button>
          )}
        </div>
      </div>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        borderBottom: '1px solid #e0e0e0',
        padding: '12px 16px',
        color: '#666',
        fontSize: '14px',
        backgroundColor: '#f8f9fa'
      }}>
        <div>Title</div>
        <div>Created by</div>
        <div>Start date</div>
        <div>End date</div>
      </div>

      <div style={{ maxHeight: 'calc(100vh - 280px)', overflowY: 'auto' }}>
      {filteredAnnouncements.length === 0 ? (
      <div style={{ 
        padding: '20px', 
        textAlign: 'center', 
        color: '#666',
        fontSize: '14px' 
      }}>
        No announcements found
      </div>
      ) : (
        filteredAnnouncements.map((announcement) => (
          <div key={announcement.id} style={{ 
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            padding: '12px 16px',
            borderBottom: '1px solid #f0f0f0',
            fontSize: '14px',
            color: '#333',
            alignItems: 'center'
          }}>
            <div style={{ color: '#1976d2', cursor: 'pointer' }}>{announcement.title}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Avatar 
                src={announcement.createdBy.avatar} 
                sx={{ width: 24, height: 24 }}
              />
              <span>{announcement.createdBy.name}</span>
            </div>
            <div>{announcement.startDate}</div>
            <div>{announcement.endDate}</div>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default Announcements