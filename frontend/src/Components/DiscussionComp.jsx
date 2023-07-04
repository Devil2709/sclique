import {
  ThumbDownOutlined,
  ThumbDownRounded,
  ThumbUpOutlined,
  ThumbUpRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const DiscussionComp = (props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Card variant="outlined" sx={{ borderWidth: 2, borderRadius: "10px" }}>
          <CardHeader
            avatar={<Avatar sx={{ height: 30, width: 30, bgcolor: "cyan" }} />}
            title={props.username}
            style={{ textAlign: "left", fontWeight: "bold" }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              py: 0,
            }}
          >
            <Typography variant="h5" textAlign="left" fontWeight="bold">
              {props.title}
            </Typography>
            <Typography variant="body1" textAlign="left" marginTop={1}>
              {props.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Checkbox
              aria-label="LikeCheck"
              id={`upvote_check_${props.id}`}
              icon={<ThumbUpOutlined />}
              checkedIcon={<ThumbUpRounded />}
              // onChange={}
            />
            <Checkbox
              aria-label="LikeCheck"
              id={`upvote_check_${props.id}`}
              icon={<ThumbDownOutlined />}
              checkedIcon={<ThumbDownRounded />}
              // onChange={}
            />
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default DiscussionComp;
