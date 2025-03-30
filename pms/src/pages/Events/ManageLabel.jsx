import React, { useState } from 'react';
import {
  Dialog,
  TextField,
  Button,
  IconButton,
  styled
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ColorButton = styled('button')({
  width: '24px',
  height: '24px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  margin: '0 4px'
});

const ManageLabel = ({ open, onClose }) => {
  const colors = [
    '#4CAF50', '#2196F3', '#00BCD4', '#009688', '#FF9800', 
    '#FF5722', '#F44336', '#E91E63', '#9C27B0', '#673AB7',
    '#3F51B5', '#795548', '#2196F3'
  ];

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      PaperProps={{
        style: {
          width: '40%',
          maxWidth: '90vw',
          padding: '20px',
          borderRadius: '8px'
        }
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <span style={{ fontSize: '16px' }}>Manage labels</span>
        <IconButton onClick={onClose} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          marginBottom: '16px',
          alignItems: 'center'
        }}>
          <TextField
            fullWidth
            placeholder="Label"
            size="small"
            sx={{
              backgroundColor: '#f8f9fa',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#e0e0e0',
                }
              }
            }}
          />
          <Button 
            variant="contained"
            style={{
              backgroundColor: '#4285f4',
              textTransform: 'none',
              minWidth: '60px'
            }}
          >
            Save
          </Button>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          {colors.map((color, index) => (
            <ColorButton
              key={index}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-end',
        borderTop: '1px solid #eee',
        paddingTop: '16px'
      }}>
        <Button 
          onClick={onClose}
          style={{
            color: '#666',
            textTransform: 'none'
          }}
        >
          Close
        </Button>
      </div>
    </Dialog>
  );
};

export default ManageLabel