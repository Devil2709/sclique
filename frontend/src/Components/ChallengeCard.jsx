import React from "react";
import "@fontsource/roboto/400.css";
import {
  Card,
  CardContent,
  Link,
  CardMedia,
  CardActionArea,
  ThemeProvider,
  createTheme,
  Typography,
  Stack,
  Chip,
  Avatar,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#0277bd",
    },
  },
});

const ChallengeCard = (props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Card
        variant="outlined"
        key={props.key}
        sx={{
          minWidth: "330px",
          maxWidth: "330px",
          borderWidth: 2,
          margin: 1,
          borderRadius: "10px",
          minHeight: "240px",
          boxShadow: "md",
          transition: "0.2s ease",
          "&:hover": {
            boxShadow: "lg",
            transform: "scale3d(1.05, 1.05, 1)",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={props.image}
            alt="Coding Contest"
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Chip
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                margin: 10,
              }}
              color="primary"
              avatar={
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png"
                  alt="icon"
                />
              }
              label={props.credit}
            />
            <Typography
              align="left"
              gutterBottom
              color="white"
              variant="h6"
              sx={{ my: 1, fontWeight: "bold" }}
            >
              <Link
                overlay
                underline="none"
                href={props.link}
                sx={{ color: "#e0e0e0" }}
              >
                {props.title}
              </Link>
            </Typography>
            <Stack direction="row" alignItems="center" gap={1}>
              <EventIcon color="disabled" />
              <Typography
                align="left"
                variant="body1"
                sx={{ color: "#7B7B7B", fontWeight: "bold" }}
              >
                {props.date}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
};

export default ChallengeCard;
