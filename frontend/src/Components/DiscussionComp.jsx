import {
  AddCommentRounded,
  ThumbDownOutlined,
  ThumbDownRounded,
  ThumbUpOutlined,
  ThumbUpRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  createTheme,
  IconButton,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

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

const DiscussionComp = ({ id, username, title, content, handleNewComment }) => {
  const [isCommenting, setCommentState] = useState(false);
  const [commentText, setCommentText] = useState(null);
  // console.log(useCommentContext());

  const handleCommenting = () => {
    setCommentState(!isCommenting && localStorage.getItem("user"));
  };

  const handlePost = () => {
    const newComment = {
      id: new Date().getTime(),
      username: JSON.parse(localStorage.getItem("user")).username,
      text: commentText,
      image: null,
      commentAr: [],
    };

    handleNewComment(id, newComment);
    setCommentState(!isCommenting);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Card variant="outlined" sx={{ borderWidth: 2, borderRadius: "10px" }}>
          <CardHeader
            avatar={<Avatar sx={{ height: 30, width: 30, bgcolor: "cyan" }} />}
            title={username}
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
              {title}
            </Typography>
            <Typography variant="body1" textAlign="left" marginTop={1}>
              {content}
            </Typography>
          </CardContent>
          <CardActions>
            <Checkbox
              aria-label="LikeCheck"
              id={`upvote_check_${id}`}
              icon={<ThumbUpOutlined />}
              checkedIcon={<ThumbUpRounded />}
              // onChange={}
            />
            <Checkbox
              aria-label="LikeCheck"
              id={`upvote_check_${id}`}
              icon={<ThumbDownOutlined />}
              checkedIcon={<ThumbDownRounded />}
              // onChange={}
            />
            <IconButton sx={{ mx: 1 }} onClick={handleCommenting}>
              <AddCommentRounded />
            </IconButton>
          </CardActions>
          {isCommenting && (
            <Paper
              variant="oulined"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignContent: "flex-start",
                pl: 1,
              }}
            >
              <TextField
                fullWidth
                multiline
                label="Comment"
                sx={{ my: 2, transition: "0.2s" }}
                onChange={(event) => {
                  setCommentText(event.target.value);
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mb: 2,
                  width: "80px",
                  height: "30px",
                  borderRadius: "20px",
                }}
                onClick={handlePost}
              >
                Post
              </Button>
            </Paper>
          )}
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default DiscussionComp;
