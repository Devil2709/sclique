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
  Avatar,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const StoreItemCard = (props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Card
        variant="outlined"
        key={props.key}
        sx={{
          minWidth: "300px",
          borderWidth: 2,
          margin: 1,
          borderRadius: "10px",
          minHeight: "270px",
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
            height="300px"
            image={props.image}
            alt="Product Image"
            sx={{ objectFit: "scale-down", backgroundColor: "#ffffff" }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography
              align="left"
              gutterBottom
              color="white"
              variant="h5"
              sx={{ mt: 1, mb: 2, fontWeight: "bold", color: "#e0e0e0" }}
            >
              {props.title}
            </Typography>
            <Stack direction="row" alignItems="center" gap={1}>
              <Avatar
                src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png"
                alt="currency"
                sx={{ height: 30, width: 30, alignSelf: "center", mr: "2px" }}
              />
              <Typography
                align="left"
                variant="h6"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                {props.cost}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
};

export default StoreItemCard;
