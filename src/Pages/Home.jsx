import React from "react";
import "../Styles/Home.css";
import { AspectRatio, Box, Button, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import Background from "../Images/backgrnd.png";

const Home = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        background: "black",
        padding: 10,
      }}
    >
      <Box
        className="home-back"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box className="home-header">
          <Typography level="display1" textColor="#0277bd" textAlign="left">
            Grow
          </Typography>
          <Typography
            level="display1"
            textColor="common.white"
            textAlign="left"
          >
            without
          </Typography>
          <Typography
            level="display1"
            textColor="common.white"
            textAlign="left"
          >
            bounderies
          </Typography>
          <Typography level="h4" textColor="common.white" textAlign="left">
            Join the largest and smartest student <br /> community in the world
            and grow together.
          </Typography>
        </Box>
        <Box
          className="button-div"
          sx={{ marginTop: 8, display: "flex", justifyContent: "flex-start" }}
        >
          <Button
            component={Link}
            to="/login"
            color="primary"
            sx={{
              width: "120px",
              height: "60px",
              marginRight: "10px",
              fontSize: 20,
              // bgcolor: "#0277bd",
            }}
          >
            Login
          </Button>
          <Button
            sx={{
              width: "120px",
              height: "60px",
              marginLeft: "10px",
              fontSize: 20,
              // bgcolor: "#0277bd",
            }}
            color="primary"
            component={Link}
            to="/signup"
          >
            Sign Up
          </Button>
        </Box>
      </Box>
      <AspectRatio
        variant="plain"
        ratio="4/3"
        sx={{ borderRadius: "md", width: 600, alignSelf: "center" }}
      >
        <img src={Background} alt="back" />
      </AspectRatio>
    </div>
  );
};

export default Home;
