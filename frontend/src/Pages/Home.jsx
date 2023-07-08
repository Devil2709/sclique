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
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import "../Styles/Home.css";
import DiscussionCard from "../Components/DiscussionCard";
// import { AspectRatio, Box, Button, Stack, Typography } from "@mui/joy";
// import { Link } from "react-router-dom";
import Background from "../Images/backgrnd.png";
// import { Avatar } from "@mui/material";
import Logo from "../Images/ScliqueLogo.png";
import { useAuthContext } from "../hooks/useAuthContext";

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

  const { user } = useAuthContext();

  return (
    // <div>
    //   <div
    //     style={{
    //       height: "100vh",
    //       display: "flex",
    //       justifyContent: "space-around",
    //       background: "black",
    //       padding: 10,
    //     }}
    //   >
    //     <Box
    //       className="home-back"
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Box className="home-header">
    //         <Typography level="display1" textColor="#0277bd" textAlign="left">
    //           Grow
    //         </Typography>
    //         <Typography
    //           level="display1"
    //           textColor="common.white"
    //           textAlign="left"
    //         >
    //           without
    //         </Typography>
    //         <Typography
    //           level="display1"
    //           textColor="common.white"
    //           textAlign="left"
    //         >
    //           bounderies
    //         </Typography>
    //         <Typography level="h4" textColor="common.white" textAlign="left">
    //           Join the largest and smartest student <br /> community in the
    //           world and grow together.
    //         </Typography>
    //       </Box>
    //       <Box
    //         className="button-div"
    //         sx={{ marginTop: 8, display: "flex", justifyContent: "flex-start" }}
    //       >
    //         <Button
    //           component={Link}
    //           to="/login"
    //           color="primary"
    //           sx={{
    //             width: "120px",
    //             height: "60px",
    //             marginRight: "10px",
    //             fontSize: 20,
    //             bgcolor: "#0277bd",
    //           }}
    //         >
    //           Login
    //         </Button>
    //         <Button
    //           sx={{
    //             width: "120px",
    //             height: "60px",
    //             marginLeft: "10px",
    //             fontSize: 20,
    //             bgcolor: "#0277bd",
    //           }}
    //           color="primary"
    //           component={Link}
    //           to="/signup"
    //         >
    //           Sign Up
    //         </Button>
    //       </Box>
    //     </Box>
    //     <Box alignSelf="center">
    //       <Stack
    //         flexDirection="row"
    //         justifyContent="center"
    //         gap={2}
    //         alignContent="center"
    //         marginBottom={4}
    //       >
    //         <Avatar
    //           src={Logo}
    //           variant="circular"
    //           sx={{
    //             bgcolor: "white",
    //             height: 30,
    //             width: 30,
    //             alignSelf: "center",
    //             padding: 1,
    //           }}
    //         />
    //         <Typography level="h1" textColor="common.white">
    //           Sclique
    //         </Typography>
    //       </Stack>
    //       <AspectRatio
    //         variant="plain"
    //         ratio="4/3"
    //         sx={{ borderRadius: "md", width: 600, alignSelf: "center" }}
    //       >
    //         <img src={Background} alt="back" />
    //       </AspectRatio>
    //     </Box>
    //   </div>
    //   <DiscussionCard username="Abhaumik" title="Hello" content="Content" />
    // </div>
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
        <Grid
          container
          direction="row"
          spacing={3}
          alignItems="stretch"
          justifyContent="flex-start"
          margin={1}
        >
          {DiscussionAr.map((disItem, index) => (
            <Grid item xs={12} key={index}>
              <DiscussionCard {...disItem}></DiscussionCard>
            </Grid>
          ))}
        </Grid>
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
