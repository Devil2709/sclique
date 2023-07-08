import {
  AddCommentRounded,
  ThumbDownOutlined,
  ThumbDownRounded,
  ThumbUpOutlined,
  ThumbUpRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  createTheme,
  Divider,
  IconButton,
  Paper,
  Stack,
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

const CommentComp = ({ comment, handleNewComment }) => {
  const [isCommenting, setCommentState] = useState(false);
  const [commentText, setCommentText] = useState(null);

  const handleCommenting = () => {
    setCommentState(!isCommenting && localStorage.getItem("user"));
  };

  const handlePost = () => {
    console.log(JSON.parse(localStorage.getItem("user")));
    const newComment = {
      id: new Date().getTime(),
      username: JSON.parse(localStorage.getItem("user")).username,
      text: commentText,
      image: null,
      type: "com",
      commentAr: [],
    };
    handleNewComment(comment.id, newComment);
    setCommentState(!isCommenting);
  };

  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  if (comment.id === "main") {
    console.log("#" + randomColor);
    return (
      <Box>
        <Card variant="outlined" sx={{ borderWidth: 2, borderRadius: "10px" }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ height: 30, width: 30, bgcolor: "#" + randomColor }}
              >
                {comment.username[0]}
              </Avatar>
            }
            title={comment.username}
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
              {comment.title}
            </Typography>
            <Typography variant="body1" textAlign="left" marginTop={1}>
              {comment.content}
            </Typography>
          </CardContent>
          {comment.image && (
            <CardMedia
              component="img"
              src={comment.image}
              sx={{ padding: 2 }}
              style={{ borderRadius: "30px" }}
            />
          )}
          <CardActions>
            <Checkbox
              aria-label="LikeCheck"
              id={`upvote_check_${comment.id}`}
              icon={<ThumbUpOutlined />}
              checkedIcon={<ThumbUpRounded />}
              // onChange={}
            />
            <Checkbox
              aria-label="LikeCheck"
              id={`upvote_check_${comment.id}`}
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
                px: 2,
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
        <Card
          variant="outlined"
          sx={{
            borderWidth: 2,
            borderRadius: "10px",
            my: 3,
            width: "100%",
          }}
        >
          <CardContent>
            <Box sx={{ mx: 2 }}>
              {comment?.commentAr?.map((curComment, ind) => {
                console.log(curComment);
                return (
                  <CommentComp
                    comment={curComment}
                    handleNewComment={handleNewComment}
                    key={curComment.id}
                  />
                );
              })}
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Card
        variant="outlined"
        sx={{
          borderWidth: 0,
          borderLeftColor: "grey",
          borderRadius: "0",
          mt: 3,
          py: 0,
          px: 0,
        }}
      >
        <CardHeader
          sx={{ py: 0, px: 0, mx: 0 }}
          avatar={
            <Avatar
              sx={{
                height: 30,
                width: 30,
                mx: 0.2,
                bgcolor: "#" + randomColor,
              }}
            >
              {comment.username[0]}
            </Avatar>
          }
          title={comment.username}
          style={{ textAlign: "left" }}
        />
        <Box sx={{ display: "flex", pr: 0 }}>
          <Divider
            orientation="vertical"
            variant="fullWidth"
            flexItem
            sx={{
              mr: 2,
              ml: 2,
              borderRightWidth: 2,
            }}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              pr: 0,
            }}
          >
            <Typography variant="body1" textAlign="left">
              {comment.text}
            </Typography>
            <Stack flexDirection="row" sx={{ mt: 1 }}>
              <Checkbox
                aria-label="LikeCheck"
                id={`like_check_${comment.id}`}
                icon={<ThumbUpOutlined />}
                checkedIcon={<ThumbUpRounded />}
                sx={{ width: 40, height: 40 }}
                // onChange={}
              />
              <Checkbox
                aria-label="LikeCheck"
                id={`like_check_${comment.id}`}
                icon={<ThumbDownOutlined />}
                checkedIcon={<ThumbDownRounded />}
                sx={{ width: 40, height: 40 }}

                // onChange={}
              />
              <IconButton sx={{ mx: 1 }} onClick={handleCommenting}>
                <AddCommentRounded />
              </IconButton>
            </Stack>
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
            <Box paddingLeft="5px" sx={{ py: 0, pr: 0 }}>
              {comment?.commentAr?.map((curComment, ind) => {
                return (
                  <CommentComp
                    comment={curComment}
                    handleNewComment={handleNewComment}
                    key={curComment.id}
                  />
                );
              })}
            </Box>
          </div>
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export default CommentComp;
