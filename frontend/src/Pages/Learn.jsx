import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  ThemeProvider,
  Toolbar,
  createTheme,
  InputBase,
  styled,
  alpha,
  Grid,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CourseCards from "../Components/CourseCards";
import CoursesImg from "../Images/CourcesImg.jpeg";
import "../Styles/Learn.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0277bd",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginTop: theme.spacing(3),
  marginRight: theme.spacing(3),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const CourseAr = [
  {
    image: CoursesImg,
    title: "Data Structures and Algorithms",
    skills: "Data Structures, Algorithms, C++",
    website: "Coursera",
    link: "www.coursera.com",
    likeCount: 104,
  },
  {
    image: CoursesImg,
    title: "Advanced Algorithms",
    skills: "Algorithms",
    website: "Udacity",
    link: "www.udacity.com",
    likeCount: 78,
  },
  {
    image: CoursesImg,
    title: "FrontEnd Development",
    skills: "HTML, CSS, Javascript",
    website: "Udacity",
    link: "www.udacity.com",
    likeCount: 143,
  },
  {
    image: CoursesImg,
    title: "Competative Programming",
    skills: "Data Structures, Algorithms",
    website: "Udemy",
    link: "www.udmey.com",
    likeCount: 87,
  },
];

CourseAr.sort(function (a, b) {
  return b.likeCount - a.likeCount;
});

console.log(CourseAr);

let initialFilter = new Set(["Coursera", "Udacity", "Udemy"]);

const Learn = (props) => {
  const [filter, setFilter] = useState(initialFilter);
  const filteredCourses = CourseAr.filter((item) => {
    return filter.has(item.website);
  });

  const onFilterChange = (event, label) => {
    if (event.target.checked) {
      setFilter((filter) => new Set(filter.add(label)));
    } else {
      setFilter((filter) => {
        filter.delete(label);
        return new Set(filter);
      });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Box>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                zIndex: 0,
              },
              padding: 3,
            }}
            variant="permanent"
            anchor="left"
            arr={CourseAr}
          >
            <Toolbar sx={{ height: "80px" }} />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                id="search_input"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Divider variant="middle" sx={{ my: 3 }} />
            <Typography
              variant="h6"
              textAlign="left"
              fontWeight="bold"
              sx={{ mx: 3 }}
            >
              Filters
            </Typography>
            <Divider variant="middle" sx={{ my: 2 }} />
            <FormGroup sx={{ px: 3, py: 1 }}>
              <Typography
                variant="body2"
                fontWeight="bold"
                textAlign="left"
                sx={{ mb: 1 }}
              >
                WEBSITE
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    id="coursera_filter"
                    defaultChecked
                    onChange={(event) => onFilterChange(event, "Coursera")}
                  />
                }
                label="Coursera"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="udacity_filter"
                    defaultChecked
                    onChange={(event) => onFilterChange(event, "Udacity")}
                  />
                }
                label="Udacity"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="udemy_filter"
                    defaultChecked
                    onChange={(event) => onFilterChange(event, "Udemy")}
                  />
                }
                label="Udemy"
              />
            </FormGroup>
          </Drawer>
        </Box>
        <Box sx={{ height: "100%", width: "100%", padding: "40px" }}>
          <Grid
            container
            direction="row"
            spacing={3}
            alignItems="stretch"
            justifyContent="left"
          >
            {filteredCourses.map((course, index) => {
              course.id = index;
              return (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <CourseCards {...course}></CourseCards>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Learn;
