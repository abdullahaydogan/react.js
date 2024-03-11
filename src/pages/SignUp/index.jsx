import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CssBaseline,
  Avatar,
  Link,
  Grid,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { signUpApi } from "./api";
import { useState } from "react";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [apiProgress, setApiProgress] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage("");
    setGeneralError("");
    setApiProgress(true);
    try {
      const response = await signUpApi({
        username,
        email,
        password,
      });
      setSuccessMessage(response.data.message);
    } catch (axiosError) {
      if (
        axiosError.response?.data &&
        axiosError.response.data.status === 400
      ) {
        setErrors(axiosError.response.data.validationErrors);
      } else {
        setGeneralError("Unexpected error occurred. Please try again");
      }
    } finally {
      setApiProgress(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "#f8f9fa",
          padding: 4,
          borderRadius: 8,
          boxShadow: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={onSubmit} style={{ width: "100%", mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="username"
                label="Username"
                variant="outlined"
                onChange={(event) => setUsername(event.target.value)}
                error={!!errors.username}
                helperText={errors.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="E-Mail"
                variant="outlined"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="passwordRepeat"
                label="Password Repeat"
                type="password"
                variant="outlined"
                onChange={(event) => setPasswordRepeat(event.target.value)}
              />
            </Grid>
          </Grid>
          {generalError && (
            <Typography variant="body2" color="error" mt={2}>
              {generalError}
            </Typography>
          )}
          {successMessage && (
            <Typography variant="body2" color="success" mt={2}>
              {successMessage}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={apiProgress || !password || password !== passwordRepeat}
            mt={3}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end" mt={2}>
            <Grid item>
              <Link href="/Login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
