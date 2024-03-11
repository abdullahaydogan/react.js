import { Container, TextField, Button, Typography, Box, CssBaseline, Avatar, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form gönderimini işleyebilir veya başka bir işlem yapabilirsiniz.
    console.log("Email:", email, "Password:", password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 3,
            width: "100%",
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-Mail"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!email || !password}
            sx={{ mt: 3 }}
          >
            Log In
          </Button>
          <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="textSecondary" align="center">
            Already have an account?{" "}
            <Link component={RouterLink} to="/SignUp" variant="body2">
              Sign up
            </Link>
          </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
