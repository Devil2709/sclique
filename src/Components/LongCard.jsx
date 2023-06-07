import React from "react";
import { Card, CardContent, CardCover, Link, Typography } from "@mui/joy";

const LongCard = (props) => {
  return (
    <Card
      sx={{
        width: "330px",
        margin: 1,
        minHeight: "240px",
        "--Card-radius": "20px",
        "--Card-padding": "20px",
        boxShadow: "md",
        transition: "0.2s ease",
        overflow: "auto",
        "&:hover": {
          boxShadow: "lg",
          transform: "scale3d(1.05, 1.05, 1)",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <CardCover>
        <img src={props.image} alt="Coding Contest" />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography align="left" gutterBottom color="white" level="h4">
          <Link
            overlay
            underline="none"
            href={props.link}
            sx={{ color: "#FFFFFF" }}
          >
            {props.title}
          </Link>
        </Typography>
        <Typography align="left" level="body1" textColor="white">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LongCard;
