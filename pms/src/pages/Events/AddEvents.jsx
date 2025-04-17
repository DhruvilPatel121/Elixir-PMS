// // import React from 'react';

// // function AddEvents () {

// //     return (

// //         <div>
// //             Add Events
// //         </div>
// //     )
// // } 

// // export default AddEvents


























































import React, { useState, useEffect } from 'react';
import {
  Dialog,
  TextField,
  Button,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CustomButton from '../../components/Button/CustomButton';

const AddEvents = ({ open, onClose, selectedDate }) => {
  const defaultFormData = {
    title: '',
    description: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    location: '',
    labels: '',
    shareWith: 'onlyMe',
    backgroundColor: '#4CAF50'
  };

  const [formData, setFormData] = useState(defaultFormData);

    useEffect(() => {
    if (open) {
      if (selectedDate) {
        const formattedDate = selectedDate.toISOString().split('T')[0];
        setFormData({
          ...defaultFormData,
          startDate: formattedDate,
          endDate: formattedDate
        });
      } else {
        setFormData(defaultFormData);
      }
    }
  }, [open, selectedDate]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleColorSelect = (color) => {
    setFormData(prev => ({ ...prev, backgroundColor: color }));
  };

   const handleSave = () => {
    if (!formData.title) return;

    const newEvent = {
      title: formData.title,
      start: `${formData.startDate}T${formData.startTime || '00:00'}`,
      end: formData.endDate ? `${formData.endDate}T${formData.endTime || '00:00'}` : null,
      // start: formData.startDate,
      // end: formData.endDate,
      backgroundColor: formData.backgroundColor,
      description: formData.description,
      location: formData.location,
      display: 'block'
    };
    
    onClose(newEvent);
    setFormData(defaultFormData);
  };

   const handleClose = () => {
    onClose(null);
    setFormData(defaultFormData);
  };

  const colors = [
    '#4CAF50', '#2196F3', '#00BCD4', '#009688', '#FF9800', 
    '#FF5722', '#F44336', '#E91E63', '#9C27B0', '#673AB7',
    '#3F51B5', '#795548', '#2196F3'
  ];

  const formRowStyle = {
    display: 'flex',
    marginBottom: '16px',
  };

  const labelStyle = {
    width: '85px',
    fontSize: '14px',
    color: '#666',
    paddingTop: '8px',
    flexShrink: 0
  };

  const inputContainerStyle = {
    display: 'flex',
    flex: 1,
    gap: '16px'
  };

  const inputStyle = {
    backgroundColor: '#f8f9fa',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#e0e0e0',
      }
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      PaperProps={{
        style: {
          width: '55%',
          maxWidth: '95vw',
          padding: '20px',
          borderRadius: '8px'
        }
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: '20px'
      }}>
        <span style={{ fontSize: '16px' }}>Add event</span>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>

      <div>
        <div style={formRowStyle}>
          <div style={labelStyle}>Title</div>
          <TextField
            fullWidth
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            size="small"
            sx={inputStyle}
          />
        </div>

        <div style={formRowStyle}>
          <div style={labelStyle}>Description</div>
          <TextField
            fullWidth
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={3}
            size="small"
            sx={inputStyle}
          />
        </div>

        <div style={formRowStyle}>
          <div style={labelStyle}>Start date</div>
          <div style={inputContainerStyle}>
            <TextField
              placeholder="Start date"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              size="small"
              sx={{ ...inputStyle, flex: 1 }}
            />
            <div style={labelStyle}>Start Time</div>
            <TextField
              placeholder="Start time"
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              size="small"
              sx={{ ...inputStyle, width: '120px' }}
            />
          </div>
        </div>

        <div style={formRowStyle}>
          <div style={labelStyle}>End date</div>
          <div style={inputContainerStyle}>
            <TextField
              placeholder="End date"
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              size="small"
              sx={{ ...inputStyle, flex: 1 }}
            />
            <div style={labelStyle}>End Time</div>
            <TextField
              placeholder="End time"
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              size="small"
              sx={{ ...inputStyle, width: '120px' }}
            />
          </div>
        </div>

        <div style={formRowStyle}>
          <div style={labelStyle}>Location</div>
          <TextField
            fullWidth
            placeholder="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            size="small"
            sx={inputStyle}
          />
        </div>

        <div style={formRowStyle}>
          <div style={labelStyle}>Labels</div>
          <TextField
            fullWidth
            placeholder="Labels"
            name="labels"
            value={formData.labels}
            onChange={handleChange}
            size="small"
            sx={inputStyle}
          />
        </div>

        <div style={formRowStyle}>
          <div style={labelStyle}>Share with</div>
          <div style={{ flex: 1 }}>
            <RadioGroup
              name="shareWith"
              value={formData.shareWith}
              onChange={handleChange}
            >
              <FormControlLabel 
                value="onlyMe" 
                control={<Radio size="small" />} 
                label="Only me"
                sx={{ marginBottom: '4px' }}
              />
              <FormControlLabel 
                value="allTeamMembers" 
                control={<Radio size="small" />} 
                label="All team members"
                sx={{ marginBottom: '4px' }}
              />
              <FormControlLabel 
                value="specific" 
                control={<Radio size="small" />} 
                label="Specific members and teams"
              />
            </RadioGroup>
          </div>
        </div>

        <div style={formRowStyle}>
          <div style={labelStyle}>Color</div>
          <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
            {colors.map((color, index) => (
              <button
                key={index}
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: color,
                  border: formData.backgroundColor === color ? '2px solid #000' : 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onClick={() => handleColorSelect(color)}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #eee',
        marginTop: '20px',
        paddingTop: '16px'
      }}>
        {/* <Button
          startIcon={<AttachFileIcon />}
          style={{
            color: '#666',
            textTransform: 'none',
            fontSize: '14px'
          }}
        >
          Upload file
        </Button> */}

        <CustomButton
        startIcon={<AttachFileIcon />}
         variant="text"
        >
          Upload file
        </CustomButton>

        <div style={{ display: 'flex', gap: '12px' }}>
          {/* <Button 
            onClick={handleClose}
            style={{
              color: '#666',
              textTransform: 'none'
            }}
          >
            Close
          </Button>
          <Button 
            variant="contained"
            onClick={handleSave}
            style={{
              backgroundColor: '#4285f4',
              textTransform: 'none'
            }}
          >
            Save
          </Button> */}
          <CustomButton
            variant="outlined"
            onClick={handleClose}
          >
            Close
          </CustomButton>
          <CustomButton
            variant="contained"
            onClick={handleSave}
          >
            Save
          </CustomButton> 

        </div>
      </div>
    </Dialog>
  );
};

export default AddEvents