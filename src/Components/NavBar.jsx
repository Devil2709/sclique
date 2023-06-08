import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import Logo from "../Images/ScliqueLogo.png";
import { Link, useLocation, matchPath } from "react-router-dom";

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
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        height: "80px",
        px: 1,
        display: "flex",
        boxShadow: "lg",
      }}
    >
      <Avatar src={Logo} sx={{ alignSelf: "center", mx: 3 }} sizes="lg" />
      <Box
        sx={{
          display: "flex",
          marginLeft: "auto",
        }}
      >
        <Tabs value={currentTab} aria-label="nav tab">
          <LinkTab label="Home" to="/home" value="/home" />
          <LinkTab label="Learn" to="/learn" value="/learn" />
          <LinkTab label="Challenges" to="/challenges" value="/challenges" />
          <LinkTab label="Store" to="/store" value="/store" />
        </Tabs>
        <Avatar sx={{ alignSelf: "center", mx: 5 }} />
      </Box>
    </Paper>
  );
}
