import type { NextPage } from "next";
import { Box, Breadcrumbs, Container, Stack, Typography } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import { StyledLink } from "../src/components/NavCrumbs";

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">Home</Typography>
        </Breadcrumbs>
        <Typography variant="h4" component="h1">
          Precurs.io
        </Typography>
        <Stack spacing={2}>
          <Typography variant="body1">
            The deliberate practice platform for mathematics.
          </Typography>
          <Typography variant="h5" component="h2">
            Training
          </Typography>
          <MathJax>
            <ol>
              <li>
                Arithmetic
                <ol type="i">
                  <li>Addition of integers</li>
                  <li>Subtraction of integers</li>
                </ol>
              </li>
              <li>
                Trigonometry
                <ol type="i">
                  <li>
                    <StyledLink href="/trig/0">
                      Evaluating the sine function
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/trig/1">
                      Evaluating the cosine function
                    </StyledLink>
                  </li>
                </ol>
              </li>
            </ol>
          </MathJax>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
