import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { 
  IconButton, 
  Menu, 
  MenuItem, 
  TextField 
} from '@mui/material';

function CustomTable({
  data = [],
  columns = [],
  title,
  loading = false,
  showSearch = true,
  showVisibility = true,
  showPagination = true,
  showEntriesPerPage = true,
  containerStyles = {},
  headerStyles = {},
  rowStyles = {},
  emptyStateMessage = 'No record found.',
  // onRowClick,
  customHeader,
  customToolbar,
  customActions,
}) {
  const [visible, setVisible] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSearch = (value) => {
    setSearchValue(value);
    setPage(0);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (value) => {
    if (value) setEntriesPerPage(value);
    setAnchorEl(null);
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(
    page * entriesPerPage,
    (page + 1) * entriesPerPage
  );

  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      marginTop: '20px',
      ...containerStyles 
    }}>
      {/* Header */}
      <div style={{ ...headerStyles }}>
        {customHeader || (
          <div>
            {title && <h2 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '500' }}>{title}</h2>}
            </div>
           )}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              {/* Left side - Custom Toolbar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {showEntriesPerPage && (
                  <>
                    <button
                      onClick={handleMenuClick}
                      style={{
                        padding: '6px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        background: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '14px',
                        color: '#666',
                        cursor: 'pointer'
                      }}
                    >
                      {entriesPerPage}
                      <KeyboardArrowDownIcon fontSize="small" />
                    </button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={() => handleMenuClose()}
                    >
                      {[5, 10, 25, 50, 100].map((num) => (
                        <MenuItem key={num} onClick={() => handleMenuClose(num)}>
                          {num}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                )}

                {showVisibility && (
                  <IconButton size="small" onClick={() => setVisible(!visible)}>
                    {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                )}
              </div>

              {/* Right side - Table Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {customToolbar}
              
                {showSearch && (
                  searchOpen ? (
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
                  )
                )}
          </div>
        </div>
        
      </div>
      {customActions}

      {/* Table Content */}
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: columns.map(col => col.width || '1fr').join(' '),
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: '#f8f9fa',
          padding: '12px 16px',
          color: '#666',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          {columns.map((column) => (
            <div key={column.id}>{column.label}</div>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
            Loading...
          </div>
        ) : paginatedData.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
            {emptyStateMessage}
          </div>
        ) : (
          <div>
            {/* <div style={{ maxHeight: '240px', overflowY: 'auto', overflowX: 'hidden' }}> */}
            {paginatedData.map((row, rowIndex) => (
              <div
                key={row.id || rowIndex}
                // onClick={() => onRowClick && onRowClick(row)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: columns.map(col => col.width || '1fr').join(' '),
                  padding: '12px 16px',
                  borderBottom: '1px solid #f0f0f0',
                  fontSize: '14px',
                  color: '#333',
                  // cursor: onRowClick ? 'pointer' : 'default',
                  '&:hover': { backgroundColor: '#f5f5f5' },
                  ...rowStyles
                }}
              >
                {columns.map((column) => (
                  <div key={column.id}>
                    {column.render ? column.render(row) : row[column.id]}  
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {showPagination && (
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '20px'
        }}>
          <div style={{ color: '#666', fontSize: '14px' }}>
            {`${filteredData.length ? page * entriesPerPage + 1 : 0}-${Math.min((page + 1) * entriesPerPage, filteredData.length)} / ${filteredData.length}`}
            {/* Showing {filteredData.length ? page * entriesPerPage + 1 : 0} to {Math.min((page + 1) * entriesPerPage, filteredData.length)} of {filteredData.length} entries */}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <IconButton 
              size="small" 
              disabled={page === 0}
              onClick={() => setPage(prev => prev - 1)}
            >
              <NavigateBeforeIcon fontSize="small" />
            </IconButton>
            <IconButton 
              size="small" 
              disabled={page >= Math.ceil(filteredData.length / entriesPerPage) - 1}
              onClick={() => setPage(prev => prev + 1)}
            >
              <NavigateNextIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomTable