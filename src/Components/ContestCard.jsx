import React from "react";
import { Card, CardContent, CardCover, Link, Typography } from "@mui/joy";
import EventIcon from "@mui/icons-material/Event";

const ContestCard = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: "330px",
        margin: 1,
        minHeight: "240px",
        "--Card-radius": "20px",
        "--Card-padding": "20px",
        boxShadow: "md",
        transition: "0.2s ease",
        "&:hover": {
          boxShadow: "lg",
          transform: "scale3d(1.05, 1.05, 1)",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <CardCover sx={{ overflow: "auto", objectFit: "fill" }}>
        <img
          src={props.image}
          alt="Coding Contest"
          sx={{
            maxWidth: "10px",
            maxHeight: "2px",
          }}
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 200px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end", padding: 1 }}>
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
        <Typography
          align="left"
          level="body1"
          textColor="#e0e0e0"
          startDecorator={<EventIcon />}
        >
          {props.date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContestCard;
