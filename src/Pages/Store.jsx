import { Box, Grid } from "@mui/material";
import React from "react";
import SlideShow from "../Components/SlideShow";
import StoreItemCard from "../Components/StoreItemCard";
import "../Styles/Store.css";

const StoreItemAr = [{ title: "Sclique Hoodie" }];
const BannerAr = [];

const Store = (props) => {
  <Box>
    <Box className="banner_back" flexGrow={1}>
      <SlideShow arr={BannerAr} />
    </Box>
    <Box sx={{ height: "100%", width: "100%", padding: "40px" }}>
      <Grid
        container
        direction="row"
        spacing={3}
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
  </Box>;
};

export default Store;
