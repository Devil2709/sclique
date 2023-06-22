import React from "react";
import {
  Card,
  CardContent,
  Link,
  Typography,
  CardActionArea,
} from "@mui/material";
import { CardMedia } from "@mui/material";

const BannerCard = (props) => {
  return (
    <Card
      variant="outline"
      sx={{
        background: "#262626",
        overflow: "auto",
        display: "flex",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 400, height: 400 }}
        image={props.image}
        alt="Coding Contest"
      ></CardMedia>
      <CardActionArea>
        <CardContent sx={{ alignItems: "center" }}>
          <Typography textAlign="left" variant="h3" marginLeft={2}>
            <Link
              overlay
              underline="none"
              href={props.link}
              sx={{ color: "#e0e0e0" }}
            >
              {props.title}
            </Link>
          </Typography>
          <Typography
            variant="h6"
            color="#e0e0e0"
            textAlign={"left"}
            my={1}
            marginLeft={2}
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BannerCard;
