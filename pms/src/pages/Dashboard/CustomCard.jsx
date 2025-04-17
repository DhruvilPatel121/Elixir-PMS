import React from 'react';
import { 
  Paper, 
  Typography, 
  Box 
} from '@mui/material';

const CustomCard = ({ 
  title,
  icon,
  children,
  height = 'auto',
  minHeight,
  padding = 3,
  headerPadding,
  showHeader = true,
  headerBorder = false,
  extraHeaderContent,
  backgroundColor = '#FFFFFF',
  marginTop,
  display,
  gap,
  overflow,
  customStyles = {}
}) => {
  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: padding, 
        borderRadius: 2,
        height: height,
        minHeight: minHeight,
        bgcolor: backgroundColor,
        mt: marginTop,
        display: display,
        gap: gap,
        overflow: overflow,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        },
        ...customStyles
      }}
    >
      {showHeader && (
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            mb: 2,
            p: headerPadding,
            borderBottom: headerBorder ? '1px solid rgba(0,0,0,0.08)' : 'none',
          }}
        >
          {/* {icon && React.cloneElement(icon, { sx: { color: 'text.secondary' } })} */}
          {icon && (
            <Box sx={{ color: 'text.secondary' }}>
              {icon}
            </Box>
          )}
          <Typography variant="h6" fontWeight="medium">
            {title}
          </Typography>
          {extraHeaderContent && (
            <Box sx={{ ml: 'auto' }}>
              {extraHeaderContent}
            </Box>
          )}
        </Box>
      )}
      {children}
    </Paper>
  );
};

export default CustomCard
