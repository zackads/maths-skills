import type { NextPage } from "next";
import {
  Alert,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

import { useAuth } from "../src/hooks/useAuth";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();
  const { user, logIn, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [working, setWorking] = useState(false);
  const [linkSent, setLinkSent] = useState(false);

  if (!loading && user) {
    router.push("/profile");
  }

  const handleLogin = async (email: string) => {
    try {
      setWorking(true);
      const { error } = await logIn(email);
      if (error) throw error;
      setLinkSent(true);
    } catch (error) {
      alert(error);
    } finally {
      setWorking(false);
    }
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(email);
        }}
      >
        <Stack spacing={2} alignContent={"center"} minWidth={500}>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <Typography variant={"h5"} component={"h1"}>
                Login
              </Typography>
              <Typography variant={"body1"}>
                No password? No problem!
              </Typography>
              <Typography variant={"body1"}>
                Log in using a magic link with your email below.
              </Typography>
              <TextField
                type="email"
                value={email}
                label="Email address"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
              <LoadingButton
                loading={working}
                type="submit"
                variant={"contained"}
                fullWidth
              >
                Send me a secure link
              </LoadingButton>
              {linkSent && (
                <Alert severity="success">
                  Link sent! Check your email inbox.
                </Alert>
              )}
            </>
          )}
        </Stack>
      </form>
    </Grid>
  );
};

export default Login;
