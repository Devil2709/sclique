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
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  createTheme,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import { usePostsContext } from "../hooks/usePostsContext";
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const DiscussionCard = (props) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const { dispatch: postDispatch } = usePostsContext();
  const navigate = useNavigate();

  const handleOpenPost = () => {
    postDispatch({ type: "SET_CURRENT", payload: props });
    navigate("/discuss/" + props._id);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Card
          variant="outlined"
          sx={{
            borderWidth: 2,
            borderRadius: "10px",
          }}
        >
          <CardActionArea
            onClick={() => {
              console.log("card action");
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ height: 30, width: 30, bgcolor: "#" + randomColor }}
                >
                  {props.username[0]}
                </Avatar>
              }
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
            {props.image && (
              <CardMedia
                component="img"
                src={props.image}
                sx={{ padding: 2 }}
                style={{ borderRadius: "30px" }}
              />
            )}
          </CardActionArea>

          <CardActions sx={{ paddingLeft: 2 }}>
            <Checkbox
              aria-label="LikeCheck"
              id={`like_check_${props.id}`}
              icon={<ThumbUpOutlined />}
              checkedIcon={<ThumbUpRounded />}
              onChange={(event) => {
                event.stopPropagation();
                console.log("check changed");
              }}
            />
            <Checkbox
              aria-label="LikeCheck"
              id={`like_check_${props.id}`}
              icon={<ThumbDownOutlined />}
              checkedIcon={<ThumbDownRounded />}
              // onChange={}
            />
            <IconButton sx={{ mx: 1 }} onClick={handleOpenPost}>
              <CommentOutlined color="action" />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default DiscussionCard;
