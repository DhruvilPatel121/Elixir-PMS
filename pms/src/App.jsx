import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';

function App() {
  return (
    <Router>
      <CssBaseline />
      {/* <DashboardLayout /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App
