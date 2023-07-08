import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  AppBar,
  Avatar,
  Container,
  createTheme,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../Images/ScliqueLogo.png";
import { Link, useLocation, matchPath } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Logout, Settings } from "@mui/icons-material";
import { useSignout } from "../hooks/useSignout";
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0277bd",
    },
    secondary: {
      main: "#000000",
    },
  },
});

function LinkTab(props) {
  return (
    <Tab component={Link} sx={{ width: "180px", height: "80px" }} {...props} />
  );
}

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    console.log(possibleMatch);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }
}

export default function NavBar() {
  // const [value, setValue] = React.useState("/home");

  console.log(useLocation().pathname);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const routeMatch = useRouteMatch([
    "/home",
    "/learn",
    "/challenges",
    "/store",
  ]);
  const currentTab = routeMatch?.pattern?.path;
  console.log(currentTab);

  const [anchorEle, setAnchorEle] = React.useState(null);
  const open = Boolean(anchorEle);
  const { signout } = useSignout();
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEle(null);
  };

  const handleClick = (event) => {
    setAnchorEle(event.currentTarget);
  };

  const handleLogout = (event) => {
    signout();
    navigate("/home");
    handleClose();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              src={Logo}
              variant="circular"
              sx={{
                bgcolor: "white",
                alignSelf: "center",
                marginLeft: "20px",
                padding: 0.5,
              }}
              sizes="lg"
            />
            <Typography
              variant="h5"
              fontWeight={"bold"}
              alignSelf="center"
              sx={{ mx: 2 }}
            >
              Sclique
            </Typography>
            <Box
              sx={{
                display: "flex",
                marginLeft: "auto",
              }}
            >
              <Tabs
                value={currentTab}
                aria-label="nav tab"
                color="#424242"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
              >
                <LinkTab label="Home" to="/home" value="/home" />
                <LinkTab label="Learn" to="/learn" value="/learn" />
                <LinkTab
                  label="Challenges"
                  to="/challenges"
                  value="/challenges"
                />
                <LinkTab label="Store" to="/store" value="/store" />
              </Tabs>
              <Divider
                orientation="vertical"
                role="presentation"
                variant="middle"
                sx={{ height: "50px", mx: 4, alignSelf: "center" }}
              />
              <IconButton
                onClick={handleClick}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{
                  height: 50,
                  width: 50,
                  alignSelf: "center",
                  mr: 1,
                }}
              >
                <Avatar />
              </IconButton>
              <Menu
                anchorEl={anchorEle}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
