import React from "react";
import { Card, CardContent, CardCover, Link, Typography, Chip } from "@mui/joy";
import EventIcon from "@mui/icons-material/Event";

const ChallengeCards = (props) => {
  return (
    <Card
      variant="outlined"
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
      <CardContent
        sx={{
          justifyContent: "flex-top-right",
          padding: 1,
          paddingTop: 0,
          paddingRight: 0,
          flexDirection: "row-reverse",
        }}
      >
        <Chip
          variant="soft"
          color="info"
          sx={{
            maxHeight: "30px",
            "--Chip-paddingInline": "10px",
            "--Chip-decoratorChildHeight": "18px",
          }}
          startDecorator={
            <img
              src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png"
              height="24px"
              alt="coins"
            />
          }
        >
          {props.credit}
        </Chip>
      </CardContent>
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
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ChallengeCards;
