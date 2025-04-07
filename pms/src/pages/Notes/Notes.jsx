// import React from 'react'

// function Notes() {
//   return (
//     <div>
//       <h1>Notes</h1>
//     </div>
//   )
// }

// export default Notes










































import React, { useState } from 'react';
import { 
  IconButton, 
  Menu, 
  MenuItem,
  TextField,
} from '@mui/material';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ManageLabel from "../Events/ManageLabel";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [manageLabelOpen, setManageLabelOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (value) => {
    if (value) setEntriesPerPage(value);
    setAnchorEl(null);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleManageLabelOpen = () => {
    setManageLabelOpen(true);
  };

  const handleManageLabelClose = () => {
    setManageLabelOpen(false);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.12)', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>Notes (Private)</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
          onClick={handleManageLabelOpen} 
          style={{ 
            padding: '6px 12px', 
            border: '1px solid #ddd', 
            borderRadius: '4px', 
            cursor: 'pointer',
            color: '#666',
            background: 'white',
            fontSize: '14px'
          }}>
            <IconButton >
              <LocalOfferOutlinedIcon sx={{fontSize: 20}}/>
            </IconButton>
            Manage labels
          </button>
          <button style={{ 
            padding: '6px 12px', 
            border: '1px solid #ddd', 
            borderRadius: '4px', 
            cursor: 'pointer',
            color: '#666',
            background: 'white',
            fontSize: '14px'
          }}>
            Add note
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={handleMenuClick}
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
            {entriesPerPage} <KeyboardArrowDownIcon fontSize="small" />
          </button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleMenuClose()}
          >
            {[25, 50, 100].map((value) => (
              <MenuItem 
                key={value} 
                onClick={() => handleMenuClose(value)}
                selected={entriesPerPage === value}
              >
                {value}
              </MenuItem>
            ))}
          </Menu>
          <IconButton size="small" onClick={() => setVisible(!visible)}>
            {visible ? (
              <VisibilityIcon sx={{ fontSize: 20 }} />
            ) : (
              <VisibilityOffIcon sx={{ fontSize: 20 }} />
            )}
          </IconButton>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {searchOpen ? (
            <TextField
              size="small"
              value={search}
              onChange={handleSearch}
              placeholder="Search..."
              autoFocus
              onBlur={() => !search && setSearchOpen(false)}
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

      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Created date</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Title</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Files</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3" style={{ textAlign: 'center', padding: '20px', color: '#666', borderBottom: '1px solid #eee' }}>
                No record found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ color: '#666', fontSize: '14px' }}>0 / 0</div>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button 
            style={{ 
              padding: '6px 12px', 
              border: '1px solid #ddd', 
              borderRadius: '4px', 
              cursor: 'pointer',
              background: 'white'
            }}
          >
            «
          </button>
          <button 
            style={{ 
              padding: '6px 12px', 
              border: '1px solid #ddd', 
              borderRadius: '4px', 
              cursor: 'pointer',
              background: 'white'
            }}
          >
            »
          </button>
        </div>
      </div>
      <ManageLabel 
        open={manageLabelOpen} 
        onClose={handleManageLabelClose} 
      />
    </div>
  );
}

export default Notes