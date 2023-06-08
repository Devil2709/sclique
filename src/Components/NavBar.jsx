import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import Logo from "../Images/ScliqueLogo.png";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      sx={{ width: "180px", height: "80px" }}
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Home" href="/drafts" />
          <LinkTab label="Learn" href="/trash" />
          <LinkTab label="Challenges" href="/spam" />
          <LinkTab label="Store" href="/spam" />
        </Tabs>
        <Avatar sx={{ alignSelf: "center", mx: 5 }} />
      </Box>
    </Paper>
  );
}
