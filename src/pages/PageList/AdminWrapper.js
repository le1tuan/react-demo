import {
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';

const AdminWrapper = ({ children, title, subtitle }) => (
  <div style={{ padding: 20 }}>
    <Typography variant="h2">{title}</Typography>
    <div style={{ margin: '10px 0px 20px 0px' }}>
      <Paper style={{ padding: 20 }}>
        <Typography variant="h5">{subtitle}</Typography>
        {children}
      </Paper>
    </div>
  </div>
);

export default AdminWrapper;
