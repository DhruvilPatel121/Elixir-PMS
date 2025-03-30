import React, { useState } from 'react';
import { 
  IconButton, 
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AddIcon from '@mui/icons-material/Add';
import LabelIcon from '@mui/icons-material/Label';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import AddEvent from './AddEvents';
import ManageLabel from './ManageLabel';

const Events = () => {
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [isManageLabelOpen, setIsManageLabelOpen] = useState(false);
  const [eventStatusAnchorEl, setEventStatusAnchorEl] = useState(null);
  const [eventTypeAnchorEl, setEventTypeAnchorEl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
    setIsAddEventOpen(true);
  };

  const handleCloseAddEvent = () => {
    setIsAddEventOpen(false);
    setSelectedDate(null);
  };

  return (
    <div className="events-container" style={{ 
      height: 'calc(100vh - 64px)',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 24px',
        // borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '16px', 
          fontWeight: '500',
          color: '#333'
        }}>
          Event calendar
        </h1>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button
            onClick={(e) => setEventStatusAnchorEl(e.currentTarget)}
            style={{
              textTransform: 'none',
              color: '#666',
              border: '1px solid #ddd',
              padding: '4px 12px',
              borderRadius: '4px',
              fontSize: '13px',
              backgroundColor: '#fff'
            }}
            endIcon={<KeyboardArrowDownIcon style={{ fontSize: 18 }} />}
          >
            Event status
          </Button>

          <Button
            onClick={(e) => setEventTypeAnchorEl(e.currentTarget)}
            style={{
              textTransform: 'none',
              color: '#666',
              border: '1px solid #ddd',
              padding: '4px 12px',
              borderRadius: '4px',
              fontSize: '13px',
              backgroundColor: '#fff'
            }}
            endIcon={<KeyboardArrowDownIcon style={{ fontSize: 18 }} />}
          >
            Event type
          </Button>

          <Button
            onClick={() => setIsManageLabelOpen(true)}
            style={{
              textTransform: 'none',
              color: '#666',
              border: '1px solid #ddd',
              padding: '4px 12px',
              borderRadius: '4px',
              fontSize: '13px',
              backgroundColor: '#fff'
            }}
            startIcon={<LocalOfferOutlinedIcon style={{ fontSize: 18 }} />}
          >
            Manage labels
          </Button>
            
          <Button
            variant="contained"
            startIcon={<AddIcon style={{ fontSize: 18 }} />}
            onClick={() => setIsAddEventOpen(true)}
            style={{
              backgroundColor: '#1976d2',
              textTransform: 'none',
              padding: '4px 12px',
              fontSize: '13px',
              boxShadow: 'none'
            }}
          >
            Add event
          </Button>
        </div>
      </div>

      {/* Calendar */}
      <div style={{ flex: 1, padding: '0 24px' }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
          }}
          height="100%"
          dayMaxEventRows={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          firstDay={1}
          nowIndicator={true}
          dateClick={handleDateClick}
          expandRows={true}
        />
      </div>

      {/* Menus */}
      <Menu
        anchorEl={eventStatusAnchorEl}
        open={Boolean(eventStatusAnchorEl)}
        onClose={() => setEventStatusAnchorEl(null)}
      >
        <MenuItem onClick={() => setEventStatusAnchorEl(null)}>All</MenuItem>
        <MenuItem onClick={() => setEventStatusAnchorEl(null)}>Active</MenuItem>
        <MenuItem onClick={() => setEventStatusAnchorEl(null)}>Inactive</MenuItem>
      </Menu>

      <Menu
        anchorEl={eventTypeAnchorEl}
        open={Boolean(eventTypeAnchorEl)}
        onClose={() => setEventTypeAnchorEl(null)}
      >
        <MenuItem onClick={() => setEventTypeAnchorEl(null)}>All Types</MenuItem>
        <MenuItem onClick={() => setEventTypeAnchorEl(null)}>Holiday</MenuItem>
        <MenuItem onClick={() => setEventTypeAnchorEl(null)}>Meeting</MenuItem>
      </Menu>

      {/* Dialogs */}
      <AddEvent 
        open={isAddEventOpen}
        onClose={handleCloseAddEvent}
        selectedDate={selectedDate}
      />
      
      <ManageLabel
        open={isManageLabelOpen}
        onClose={() => setIsManageLabelOpen(false)}
      />

      <style>{`
        .events-container .fc {
          height: 100%;
        }
        .events-container .fc-view {
          width: 100% !important;
        }
        .events-container .fc-view table {
          width: 100% !important;
        }
        .events-container .fc-scrollgrid-sync-table {
          width: 100% !important;
        }
        .events-container .fc-daygrid-body {
          width: 100% !important;
        }
        .events-container .fc-daygrid-body table {
          width: 100% !important;
        }
        .events-container .fc .fc-scrollgrid {
          border: none;
        }
        .events-container .fc .fc-toolbar {
          padding: 1rem 0;
        }
        .events-container .fc .fc-toolbar-title {
          font-size: 16px;
          font-weight: 500;
        }
        .events-container .fc .fc-button {
          text-transform: capitalize;
          border: 1px solid #ddd;
          background: white;
          color: #666;
          padding: 4px 8px;
          font-size: 13px;
          font-weight: normal;
          box-shadow: none;
        }
        .events-container .fc .fc-button-primary:not(:disabled).fc-button-active {
          background: #f0f7ff;
          color: #1976d2;
          border-color: #1976d2;
        }
        .events-container .fc .fc-day-today {
          background: #fff8e6 !important;
        }
        .events-container .fc td, .fc th {
          border: 1px solid #e0e0e0;
        }
        .events-container .fc-theme-standard td {
          border-color: #e0e0e0;
        }
        .events-container .fc th {
          padding: 8px 0;
          font-weight: 500;
          color: #666;
        }
        .events-container .fc-day-other {
          background: #f8f9fa;
        }
      `}</style>
    </div>
  );
};

export default Events