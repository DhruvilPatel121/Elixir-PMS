// import React from 'react'

// function Timesheets() {
//   return (
//     <div>
//       Timesheets
//     </div>
//   )
// }

// export default Timesheets
























import React, { useState } from 'react';
import { 
  IconButton, 
  Menu, 
  MenuItem,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Timesheets() {
  const [activeTab, setActiveTab] = useState('Details');
  const [entriesPerPage, setEntriesPerPage] = useState(25);
  const [anchorEl, setAnchorEl] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedMember, setSelectedMember] = useState('');
  const [startDate, setStartDate] = useState('21st March 2025');
  const [endDate, setEndDate] = useState('21st March 2025');
  const [search, setSearch] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);


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

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.12)', marginTop: '20px' }}>
      {/* Tabs */}
      <div style={{ borderBottom: '1px solid #e0e0e0', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '2px' }}>
          <h2  style={{ fontSize: '18px', fontWeight: '500' }}>Timesheets</h2>
          {['Details', 'Summary', 'Chart'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 24px',
                border: 'none',
                borderBottom: activeTab === tab ? '2px solid #1976d2' : 'none',
                background: 'transparent',
                color: activeTab === tab ? '#1976d2' : '#666',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === tab ? '500' : '400'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
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

        <select 
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          style={{
            padding: '6px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            color: '#666',
            fontSize: '14px'
          }}
        >
          <option value="">- Project -</option>
        </select>

        <select
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.target.value)}
          style={{
            padding: '6px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            color: '#666',
            fontSize: '14px'
          }}
        >
          <option value="">- Member -</option>
        </select>

        <input
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{
            padding: '6px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            color: '#666',
            fontSize: '14px'
          }}
        />

        <input
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{
            padding: '6px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            color: '#666',
            fontSize: '14px'
          }}
        />

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

      {/* Table */}
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Member</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Project</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Client</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Task</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Start time</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>End time</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #eee', color: '#666', fontWeight: '500', fontSize: '14px' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="7" style={{ textAlign: 'center', padding: '20px', color: '#666', borderBottom: '1px solid #eee' }}>
                No record found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ color: '#666', fontSize: '14px' }}>0 / 0</div>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button style={{ 
            padding: '6px 12px', 
            border: '1px solid #ddd', 
            borderRadius: '4px', 
            cursor: 'pointer',
            background: 'white'
          }}>
            «
          </button>
          <button style={{ 
            padding: '6px 12px', 
            border: '1px solid #ddd', 
            borderRadius: '4px', 
            cursor: 'pointer',
            background: 'white'
          }}>
            »
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timesheets