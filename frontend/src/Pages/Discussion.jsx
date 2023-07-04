import { AssignmentIndOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Container,
  createTheme,
  Divider,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import CommentComp from "../Components/CommentComp";
import DiscussionComp from "../Components/DiscussionComp";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const localCommmentAr = [
  {
    username: "Abhaumik1",
    text: "Comment1 asdfksjdfklasjf;lkasjdf;klsjkl skdf;aklsj klajfkldj saldkfj ;laskdj f;lasdj f;lksajd lkasjd ;lkasjd l;kcjf l;aksdj flks jf",
    commentAr: [
      {
        username: "Abhaumik2",
        text: "Comment2",
        commentAr: [
          {
            username: "Abhaumik2",
            text: "Comment2",
            commentAr: [
              {
                username: "Abhaumik24",
                text: "Comment3",
                commentAr: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "Abhaumik2",
    text: "Comment2",
    commentAr: [
      {
        username: "Abhaumik24",
        text: "Comment3",
        commentAr: [],
      },
    ],
  },
];

const Discussion = (props) => {
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
          <DiscussionComp username="Abhaumik" title="Hello" content="Content" />
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
                {localCommmentAr.map((comment, ind) => {
                  return <CommentComp {...comment} key={ind} />;
                })}
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ width: 500, mx: 2 }}>
          <Card
            variant="outlined"
            sx={{ borderWidth: 2, borderRadius: "10px" }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ height: 30, width: 30, bgcolor: "#0277bd" }}>
                  <AssignmentIndOutlined />
                </Avatar>
              }
              title="Notice"
              sx={{ textAlign: "left" }}
            />
            <Divider variant="middle" />
            <CardActionArea>
              <CardContent>
                <Typography variant="h6">Conding Challenge</Typography>
                <Typography variant="body1">Date...</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            variant="outlined"
            sx={{ borderWidth: 2, borderRadius: "10px", mt: 2 }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ height: 30, width: 30 }}>
                  <AssignmentIndOutlined />
                </Avatar>
              }
              title="Notice"
              sx={{ textAlign: "left" }}
            />
            <Divider variant="middle" />
            <CardActionArea>
              <CardContent>
                <Typography variant="h6">Conding Challenge</Typography>
                <Typography variant="body1">Date...</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Discussion;
