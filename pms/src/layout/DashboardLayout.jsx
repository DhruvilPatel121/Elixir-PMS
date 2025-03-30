import * as React from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import {
  Dashboard,
  Assignment,
  Event,
  Note,
  Group,
  Assessment,
  Help,
  CheckCircle,
  PlaylistAddCheck,
} from "@mui/icons-material";

// Import components
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Navbar from "../components/Header/Navbar.jsx";
import { routes } from "../routes/routes.jsx";

const Drawer = styled(MuiDrawer)(({ open }) => ({
  "& .MuiDrawer-paper": {
    position: "fixed",
    whiteSpace: "nowrap",
    width: "240px",
    backgroundColor: "#fff",
    borderRight: "1px solid rgba(0,0,0,0.08)",
    boxSizing: "border-box",
    overflowX: "hidden",
    height: "100%",
    top: 0,
    left: 0,
    transition: "width 0.2s ease",
    ...(open && {
      width: "240px",
    }),
    ...(!open && {
      width: "65px",
      overflowX: "hidden",
      "& .MuiListItemText-root": {
        opacity: 0,
      },
    }),
  },
}));

const StyledAppBar = styled(MuiAppBar)(({ theme, open }) => ({
  position: "fixed",
  zIndex: theme.zIndex.drawer - 1,
  backgroundColor: "#fff",
  color: "#333",
  boxShadow: "none",
  borderBottom: "1px solid rgba(0,0,0,0.08)",
  height: 48,
  left: open ? "240px" : "65px",
  right: 0,
  width: "auto",
  transition: "left 0.2s ease",
}));

const MENU_ITEMS = [
  { text: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
  { text: "Events", icon: <Event />, path: "/events" },
  { text: "Projects", icon: <Assignment />, path: "/projects" },
  { text: "Tasks", icon: <CheckCircle />, path: "/tasks" },
  { text: "Notes", icon: <Note />, path: "/notes" },
  { text: "Team", icon: <Group />, path: "/team" },
  { text: "Reports", icon: <Assessment />, path: "/reports" },
  { text: "Help & Support", icon: <Help />, path: "/help-support" },
  { text: "ToDo", icon: <PlaylistAddCheck />, path: "/todo" },
];

export default function DashboardLayout() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenuClick = (text, path) => {
    navigate(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      >
        <Drawer variant="permanent" open={open}>
          <Sidebar
            open={open}
            menuItems={MENU_ITEMS}
            onMenuClick={handleMenuClick}
          />
        </Drawer>

        <Box
          sx={{
            flexGrow: 1,
            marginLeft: open ? "240px" : "65px",
            transition: "margin-left 0.2s ease",
          }}
        >
          <StyledAppBar open={open}>
            <Navbar handleDrawerToggle={toggleDrawer} />
          </StyledAppBar>

          <Box
            component="main"
            sx={{
              backgroundColor: "#f5f5f5",
              minHeight: "100vh",
              paddingTop: "48px",
              width: "100%",
              overflow: "auto",
              pb: 3,
            }}
          >
            <Container
              maxWidth={false}
              disableGutters
              sx={{ height: "100%", pl: 2, pr: 2 }}
            >
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  >
                  {route.children?.map((child) => (
                <Route
                  key={`${route.path}/${child.path}`}
                  path={`${child.path}`}
                  element={<child.component />}
                />
              ))}
                </Route>
                ))}
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

// Move theme creation here
const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});
