import React, { useState } from "react";
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
  Checkbox,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const label = { inputProps: { "aria-label": "LikeCheck" } };

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CourseCards = (props) => {
  const [likeCount, setLikeCount] = useState(props.likeCount);

  const handleChange = (event) => {
    if (event.target.checked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Card
        variant="outlined"
        key={props.key}
        sx={{
          flexGrow: 1,
          borderWidth: 2,
          borderRadius: "10px",
          minHeight: "240px",
          height: "100%",
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
            height="200"
            image={props.image}
            alt="Coding Contest"
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography
              align="left"
              color="white"
              variant="h6"
              sx={{ my: 1, fontWeight: "bold", color: "#e0e0e0" }}
            >
              {props.title}
            </Typography>
            <Stack>
              <Typography
                align="left"
                variant="body1"
                sx={{ my: 1, fontWeight: "bold", color: "#e0e0e0" }}
              >
                {"Skills: "}
                <Typography
                  display="inline"
                  align="left"
                  variant="body1"
                  sx={{ my: 1, color: "#e0e0e0" }}
                >
                  {props.skills}
                </Typography>
              </Typography>
            </Stack>
            <Typography
              align="left"
              variant="body1"
              sx={{ color: "#7B7B7B", fontWeight: "bold" }}
            >
              {props.website}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Stack direction="row" alignItems="center" padding={1} paddingTop={0}>
          <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            onChange={handleChange}
          />
          <Typography
            align="left"
            variant="body1"
            sx={{ color: "#7B7B7B", fontWeight: "bold" }}
          >
            {likeCount}
          </Typography>
        </Stack>
      </Card>
    </ThemeProvider>
  );
};

export default CourseCards;
