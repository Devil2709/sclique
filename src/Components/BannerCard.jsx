import React from "react";
import {
  Card,
  CardContent,
  Link,
  Typography,
  CardOverflow,
  AspectRatio,
} from "@mui/joy";

const BannerCard = (props) => {
  return (
    <Card
      orientation="horizontal"
      variant="outline"
      sx={{
        width: "100",
        margin: 1,
        minHeight: "70%",
        "--Card-radius": "20px",
        "--Card-padding": "20px",
        boxShadow: "md",
        transition: "0.2s ease",
        background: "white",
        overflow: "auto",
        "&:hover": {
          boxShadow: "lg",
          transform: "scale3d(1.02, 1.02, 1)",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <CardOverflow>
        <AspectRatio sx={{ width: 500, overflow: "auto" }}>
          <img src={props.image} alt="Coding" />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ justifyContent: "center" }}>
        <Typography textAlign="left" level="h2" marginLeft={2}>
          <Link
            overlay
            underline="none"
            href={props.link}
            sx={{ color: "black" }}
          >
            {props.title}
          </Link>
        </Typography>
        <Typography
          level="body1"
          textColor="black"
          textAlign={"left"}
          marginLeft={2}
        >
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BannerCard;
