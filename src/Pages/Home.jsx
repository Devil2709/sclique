import React from "react";
import "../Styles/Home.css";
import { Button } from "@mui/joy";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <section className="home-back">
      <div className="home-header">
        <h1 className="home-gr-head">Grow</h1>
        <h1 className="home-oth-head">without</h1>
        <h1 className="home-oth-head">bounderies</h1>
        <p>
          Join the largest and smartest student <br /> community in the world
          and grow together.
        </p>
      </div>
      <div className="button-div">
        <Button
          component={Link}
          to="/login"
          sx={{
            width: "120px",
            height: "60px",
            margin: "20px",
            marginTop: "30px",
            fontSize: 20,
          }}
        >
          Login
        </Button>
        <Button
          sx={{
            width: "120px",
            height: "60px",
            margin: "20px",
            marginTop: "30px",
            fontSize: 20,
          }}
          component={Link}
          to="/signup"
        >
          Sign Up
        </Button>
      </div>
    </section>
  );
};

export default Home;
