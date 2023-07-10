import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  createTheme,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import DiscussionCard from "../Components/DiscussionCard";
// import { AspectRatio, Box, Button, Stack, Typography } from "@mui/joy";
// import { Link } from "react-router-dom";
import Background from "../Images/backgrnd.png";
// import { Avatar } from "@mui/material";
import Logo from "../Images/ScliqueLogo.png";
import { useAuthContext } from "../hooks/useAuthContext";
import { usePostsContext } from "../hooks/usePostsContext";

const Home = (props) => {
  const DiscussionAr = [
    {
      username: "Abhaumik",
      title: "Hello",
      content: "Content",
      image: null,
    },
    {
      username: "ninjamayank",
      title: "Hello2",
      content: "Content",
      image: Background,
    },
  ];

  const topChartAr = [
    { username: "Abhaumik", bitcnt: 100 },
    { username: "Abhaumik", bitcnt: 100 },
    { username: "Abhaumik", bitcnt: 100 },
    { username: "Abhaumik", bitcnt: 100 },
    { username: "Abhaumik", bitcnt: 100 },
  ];

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

  const { posts, dispatch: postDispatch } = usePostsContext();
  const { user } = useAuthContext();

  const [isPosting, setIsPosting] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:4000/api/posts", {});

      const json = await response.json();

      if (response.ok) {
        postDispatch({ type: "SET", payload: json });
      }
    };

    fetchPosts();
  }, [postDispatch, user]);

  const handleIsPosting = () => {
    console.log("posting");
    setIsPosting(user && !isPosting);
  };

  const handlePosting = async (event) => {
    event.preventDefault();
    console.log("here");
    const post = {
      title: title,
      content: content,
      image: image,
      username: user.username,
      voteCnt: 0,
    };

    const response = await fetch(
      "http://localhost:4000/api/posts/create_post",
      {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
          Authorization: `User ${user.token}`,
        },
      }
    );

    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      setError(json.error);
      setIsLoading(false);
      console.log(error);
    }

    if (response.ok) {
      setTitle("");
      setIsLoading(false);
      setIsPosting(false);
      setContent("");
      setImage(null);
      setError(null);
      postDispatch({ type: "CREATE", payload: json });
      console.log(posts);
    }
  };

  console.log(posts);

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
        <Box width="100%" padding="10px" sx={{ pt: 4 }}>
          <Grid
            container
            direction="row"
            spacing={3}
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            {isPosting && (
              <Grid item xs={12}>
                <Card
                  variant="outlined"
                  component="form"
                  onSubmit={handlePosting}
                  sx={{
                    width: "100%",
                    borderWidth: 2,
                    borderRadius: "10px",
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="title"
                          label="Title"
                          name="title"
                          onChange={(e) => setTitle(e.target.value)}
                          value={title}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          multiline
                          name="content"
                          label="content"
                          id="content"
                          onChange={(e) => setContent(e.target.value)}
                          value={content}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      disabled={isLoading}
                    >
                      Post
                    </Button>
                    {error && <div>{error}</div>}
                  </CardContent>
                </Card>
              </Grid>
            )}
            {posts?.map((disItem, index) => (
              <Grid item xs={12} key={index}>
                <DiscussionCard {...disItem}></DiscussionCard>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box margin={1} marginTop={4}>
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
              src={Background}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5" textAlign="left">
                <span style={{ color: "#0277bd", fontWeight: "bold" }}>
                  Grow
                </span>
                <br /> Without Boudaries
              </Typography>
            </CardContent>
            {!user && (
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
                  href="/login"
                  sx={{
                    mb: 2,
                    height: "40px",
                    borderRadius: "20px",
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  href="/signup"
                  sx={{
                    height: "40px",
                    borderWidth: 2,
                    borderRadius: "20px",
                    mb: 2,
                  }}
                >
                  Sign Up
                </Button>
              </Container>
            )}

            {user && (
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
                  onClick={handleIsPosting}
                >
                  Create Post
                </Button>
              </Container>
            )}
          </Card>
          <Card
            variant="outlined"
            sx={{
              minWidth: 300,
              borderWidth: 2,
              borderRadius: "10px",
              mb: 2,
              padding: 1,
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  src={Logo}
                  sx={{ height: 30, width: 30, padding: 0.5, bgcolor: "white" }}
                />
              }
              title="Top Charts"
              style={{ textAlign: "left" }}
            />
            <Divider />
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Username</TableCell>
                  <TableCell align="center">Bit Count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topChartAr.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.username}
                    </TableCell>
                    <TableCell align="center">{row.bitcnt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
