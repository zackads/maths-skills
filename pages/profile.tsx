import type { NextPage } from "next";
import { Avatar, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";

import { useAuth } from "../src/hooks/useAuth";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, router, user]);

  return (
    <Stack spacing={2} alignContent={"center"} minWidth={500}>
      <Typography variant={"h5"} component={"h1"}>
        Profile
      </Typography>
      <Avatar>Z</Avatar>
      <dl>
        <dt>Email: </dt> <dd>{user?.email}</dd>
      </dl>
    </Stack>
  );
};

export default Profile;
