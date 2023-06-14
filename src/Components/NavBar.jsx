import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import { Avatar, createTheme, ThemeProvider, Typography } from "@mui/material";
import Logo from "../Images/ScliqueLogo.png";
import { Link, useLocation, matchPath } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

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

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          height: "80px",
          px: 1,
          display: "flex",
          boxShadow: "lg",
        }}
      >
        <Avatar
          src={Logo}
          variant="circular"
          sx={{
            bgcolor: "white",
            alignSelf: "center",
            marginLeft: 3,
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
            <LinkTab label="Challenges" to="/challenges" value="/challenges" />
            <LinkTab label="Store" to="/store" value="/store" />
          </Tabs>
          <Avatar sx={{ alignSelf: "center", mx: 5 }} />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
