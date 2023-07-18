import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Paper,
  Link,
  TextField,
  Grid,
  Box,
  Typography,
  Button,
  Avatar,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Logo from "../Images/ScliqueLogo.png";
import { useState } from "react";
import { useSignin } from "../hooks/useSignin";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0277bd",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, isLoading, error, link } = useSignin(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signin(email, password);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        height="100vh"
        maxWidth="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Paper
          variant="outlined"
          sx={{
            width: "500px",
            padding: "20px",
            bgcolor: "black",
            borderWidth: 2,
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              margin: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src={Logo}
              variant="circular"
              sx={{
                m: 2,
                bgcolor: "secondary.main",
                padding: 1,
                height: 50,
                width: 50,
              }}
            ></Avatar>
            <Typography component="h1" variant="h5" fontWeight="bold">
              Log In
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={error === "Incorrect email"}
                    helperText={error === "Incorrect email" ? error : ""}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="new-password"
                    error={error === "Incorrect password"}
                    helperText={error === "Incorrect password" ? error : ""}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
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
                Log In
              </Button>
              {link && navigate(link)}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="signup" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
