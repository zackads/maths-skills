import { MathJax } from "better-react-mathjax";
import { Button, Grid } from "@mui/material";
import React, { RefObject } from "react";

export const MathButtons = ({
  inputRef,
}: {
  inputRef: RefObject<HTMLInputElement>;
}) => {
  const append = (asciimath: string) => {
    if (inputRef.current) {
      inputRef.current.value = inputRef.current.value + asciimath;
      inputRef.current.focus();
    }
  };

  const prepend = (asciimath: string) => {
    if (inputRef.current) {
      inputRef.current.value = asciimath + inputRef.current.value;
      inputRef.current.focus();
    }
  };

  return (
    <MathJax>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            sx={{ height: "100%" }}
            variant="outlined"
            onClick={() => append("pi")}
          >
            {"`pi`"}
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ height: "100%" }}
            variant="outlined"
            onClick={() => append("/")}
          >
            {"`□/□`"}
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ height: "100%" }}
            variant="outlined"
            onClick={() => prepend("sqrt")}
          >
            √
          </Button>
        </Grid>
      </Grid>
    </MathJax>
  );
};
