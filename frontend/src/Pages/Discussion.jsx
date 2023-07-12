import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  Skeleton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentComp from "../Components/CommentComp";
import { useNode } from "../hooks/useNode";
// import { usePostsContext } from "../hooks/usePostsContext";
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

const Discussion = () => {
  let currentPost;
  const { addComment, makeTree } = useNode();
  const [rootComment, setRootComment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id: postId } = useParams();

  // console.log(currentPost);

  useEffect(() => {
    (async () => {
      // console.log(currentPost);
      const response = await fetch(
        "http://localhost:4000/api/posts/" + postId,
        {}
      );

      const json = await response.json();

      if (response.ok) {
        currentPost = json;
        setRootComment(await makeTree(currentPost));
        setIsLoading(false);
      } else {
        console.log("Error");
        setIsLoading(false);
      }
    })();
  }, [postId]);

  const handleNewComment = async (commentId, newComment) => {
    // console.log(newComment);
    const tmp = await addComment(commentId, rootComment, newComment);
    setRootComment(tmp);
  };

  if (isLoading || !rootComment) {
    console.log("loading");
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
          <Container>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              sx={{ borderRadius: 2 }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              sx={{ borderRadius: 2, mt: 3 }}
            />
          </Container>
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
  }

  console.log("loading done");
  return (
    rootComment && (
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
    )
  );
};

export default Discussion;
