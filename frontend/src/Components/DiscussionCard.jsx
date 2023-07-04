import {
  CommentOutlined,
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
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const DiscussionCard = (props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Card
          variant="outlined"
          sx={{
            margin: 4,
            borderWidth: 2,
            borderRadius: "10px",
          }}
        >
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
              paddingTop: 0,
            }}
          >
            <Typography variant="h5" textAlign="left" fontWeight="bold">
              {props.title}
            </Typography>
            <Typography variant="body1" textAlign="left" marginTop={1}>
              {props.content}
            </Typography>
          </CardContent>
          <CardActions sx={{ paddingLeft: 2 }}>
            <Checkbox
              aria-label="LikeCheck"
              id={`like_check_${props.id}`}
              icon={<ThumbUpOutlined />}
              checkedIcon={<ThumbUpRounded />}
              // onChange={}
            />
            <Checkbox
              aria-label="LikeCheck"
              id={`like_check_${props.id}`}
              icon={<ThumbDownOutlined />}
              checkedIcon={<ThumbDownRounded />}
              // onChange={}
            />
            <IconButton sx={{ mx: 1 }} href="discuss">
              <CommentOutlined color="action" />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default DiscussionCard;
