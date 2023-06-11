import React from "react";
import "@fontsource/roboto/400.css";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  ThemeProvider,
  createTheme,
  Typography,
  Stack,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ContestCard = (props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Card
        variant="outlined"
        key={props.key}
        sx={{
          minWidth: "330px",
          borderWidth: 2,
          margin: 1,
          borderRadius: "10px",
          minHeight: "240px",
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
        <CardActionArea href={props.link} target="_blank">
          <CardMedia
            component="img"
            height="180"
            image={props.image}
            alt="Coding Contest"
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography
              align="left"
              gutterBottom
              color="white"
              variant="h6"
              sx={{ my: 1, fontWeight: "bold", color: "#e0e0e0" }}
            >
              {props.title}
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

export default ContestCard;
