import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CommentComp from "../Components/CommentComp";
import { useNode } from "../hooks/useNode";
import Background from "../Images/backgrnd.png";
import CodingImg from "../Images/CodingImg.jpeg";
import HoodieImg from "../Images/HoodieImg.jpeg";

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

const localCommmentAr = [
  {
    id: 1,
    username: "Abhaumik1",
    type: "com",
    text: "Comment1 asdfksjdfklasjf;lkasjdf;klsjkl skdf;aklsj klajfkldj saldkfj ;laskdj f;lasdj f;lksajd lkasjd ;lkasjd l;kcjf l;aksdj flks jf",
    commentAr: [
      {
        id: 2,
        username: "Abhaumik2",
        text: "Comment2",
        type: "com",
        commentAr: [
          {
            id: 3,
            username: "Abhaumik2",
            text: "Comment2",
            type: "com",
            commentAr: [
              {
                id: 4,
                username: "Abhaumik24",
                text: "Comment3",
                type: "com",
                commentAr: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    username: "Abhaumik2",
    text: "Comment2",
    type: "com",

    commentAr: [
      {
        id: 6,
        username: "Abhaumik24",
        text: "Comment3",
        type: "com",
        commentAr: [],
      },
    ],
  },
];

const Discussion = (props) => {
  const [rootComment, setRootComment] = useState({
    id: "main",
    username: "Abhaumik",
    title: "Title1",
    content: "Hello",
    image: Background,
    commentAr: localCommmentAr,
  });
  const { addComment } = useNode();

  const handleNewComment = (commentId, newComment) => {
    setRootComment(addComment(commentId, rootComment, newComment));
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "flex-start",
          padding: 20,
        }}
      >
        <Box sx={{ width: "100%", px: 2 }}>
          <CommentComp
            comment={rootComment}
            handleNewComment={handleNewComment}
          />
        </Box>
        <Box sx={{ width: 500, mx: 2 }}>
          <Card
            variant="outlined"
            sx={{
              minWidth: 300,
              borderWidth: 2,
              borderRadius: "10px",
              mb: 2,
            }}
          >
            <CardMedia
              component="img"
              height={130}
              src={CodingImg}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5" textAlign="left">
                <span style={{ color: "#0277bd", fontWeight: "bold" }}>
                  Grow
                </span>
                <br /> With Challenges
              </Typography>
            </CardContent>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                padding: 0,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mb: 2,
                  height: "40px",
                  borderRadius: "20px",
                }}
              >
                Register
              </Button>
            </Container>
          </Card>
          <Card
            variant="outlined"
            sx={{
              minWidth: 300,
              borderWidth: 2,
              borderRadius: "10px",
              mb: 2,
            }}
          >
            <CardMedia
              component="img"
              height={130}
              src={HoodieImg}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5" textAlign="left">
                <span style={{ color: "#0277bd", fontWeight: "bold" }}>
                  Win
                </span>
                <br /> Merchandise
              </Typography>
            </CardContent>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                padding: 0,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                href="/store"
                sx={{
                  mb: 2,
                  height: "40px",
                  borderRadius: "20px",
                }}
              >
                Visit Store
              </Button>
            </Container>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Discussion;
