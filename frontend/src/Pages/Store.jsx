import {
  Avatar,
  Box,
  Chip,
  createTheme,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import SlideShow from "../Components/SlideShow";
import StoreItemCard from "../Components/StoreItemCard";
import TShirtImg from "../Images/TShirtImg.jpeg";
import HoodieImg from "../Images/HoodieImg.jpeg";
import BackPackImg from "../Images/BackPackImg.webp";
import CoursesImg from "../Images/CourcesImg.jpeg";
import "../Styles/Store.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0277bd",
    },
    secondary: {
      main: "#000000",
    },
    info: {
      main: "#eeeeee",
    },
  },
});

const StoreItemAr = [
  { title: "Sclique Hoodie", image: HoodieImg, cost: 400 },
  { title: "Sclique T-Shirt", image: TShirtImg, cost: 200 },
  { title: "Sclique Back Pack", image: BackPackImg, cost: 500 },
  { title: "Coursera Coupon", image: CoursesImg, cost: 100 },
  { title: "Udacity Coupon", image: CoursesImg, cost: 100 },
  { title: "Udemy Coupon", image: CoursesImg, cost: 100 },
];

const BannerAr = [
  {
    title: "Sclique Hoodie",
    image: HoodieImg,
    description: "A quality hoodie with a hint of Sclique.",
  },
  {
    title: "Sclique T-Shirt",
    image: TShirtImg,
    description: "A quality T-shirt with a hint of Sclique.",
  },
  {
    title: "Sclique Back Pack",
    image: BackPackImg,
    description: "A quality backpack to have a Sclique everywhere.",
  },
];

const Store = (props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <CssBaseline />
        <Box className="banner_back" flexGrow={1}>
          <SlideShow arr={BannerAr} />
        </Box>
        <Box sx={{ height: "100%", width: "100%", padding: "40px" }}>
          <Box display="flex" justifyContent="flex-start" sx={{ pl: 1 }}>
            <Paper
              variant="outlined"
              sx={{
                bgcolor: "#000000",
                borderWidth: 2,
                borderRadius: "30px",
                borderColor: "#616161",
                padding: 1,
                mb: 1,
                display: "flex",
              }}
            >
              <Typography
                variant="body1"
                color="white"
                alignSelf="center"
                fontWeight="bold"
                sx={{ mx: 1 }}
              >
                Your Bits
              </Typography>
              <Chip
                avatar={
                  <Avatar
                    alt="Coin Image"
                    src="https://cdn-icons-png.flaticon.com/128/2933/2933116.png"
                  />
                }
                label={
                  <Typography variant="body1" color="black">
                    600
                  </Typography>
                }
                color="info"
              />
            </Paper>
          </Box>
          <Grid
            container
            direction="row"
            spacing={2}
            alignItems="stretch"
            justifyContent="left"
          >
            {StoreItemAr.map((course, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <StoreItemCard {...course}></StoreItemCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Store;
