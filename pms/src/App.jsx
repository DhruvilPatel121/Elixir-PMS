import { BrowserRouter as Router } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <Router>
      <CssBaseline />
      <DashboardLayout />
    </Router>
  );
}

export default App
