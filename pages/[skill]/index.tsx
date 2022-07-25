import type { GetStaticProps, NextPage } from "next";
import { Box, Container, Stack, Typography } from "@mui/material";
import { NavCrumbs } from "../../src/components/NavCrumbs";
import data from "../../src/data/evaluating-trigonometric-expressions/trig.json";

const TopicHome: NextPage<{
  title: string;
  body: string;
}> = ({ title, body }) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Stack spacing={2}>
          <NavCrumbs path={[{ Home: "/" }]} current={title} />
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { title: data.title, intro: data.body } };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { topic: "trigonometry" } }],
    fallback: false,
  };
}

export default TopicHome;
