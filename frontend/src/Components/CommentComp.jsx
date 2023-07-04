import {
  ThumbDownOutlined,
  ThumbDownRounded,
  ThumbUpOutlined,
  ThumbUpRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Checkbox,
  createTheme,
  Divider,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CommentComp = (props) => {
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
          avatar={<Avatar sx={{ height: 30, width: 30, mx: 0.2 }} />}
          title={props.username}
          style={{ textAlign: "left" }}
        />
        <Box sx={{ display: "flex" }}>
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
          <Box>
            <Typography variant="body1" textAlign="left">
              {props.text}
            </Typography>
            <Stack flexDirection="row" sx={{ mt: 1 }}>
              <Checkbox
                aria-label="LikeCheck"
                id={`like_check_${props.id}`}
                icon={<ThumbUpOutlined />}
                checkedIcon={<ThumbUpRounded />}
                sx={{ width: 40, height: 40 }}
                // onChange={}
              />
              <Checkbox
                aria-label="LikeCheck"
                id={`like_check_${props.id}`}
                icon={<ThumbDownOutlined />}
                checkedIcon={<ThumbDownRounded />}
                sx={{ width: 40, height: 40 }}

                // onChange={}
              />
            </Stack>
            <Box paddingLeft="5px" sx={{ py: 0 }}>
              {props?.commentAr?.map((comment, ind) => {
                return <CommentComp {...comment} key={ind} />;
              })}
            </Box>
          </Box>
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export default CommentComp;
