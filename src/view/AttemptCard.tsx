import { Card, CardContent, Typography } from "@mui/material";
import { MathJax } from "better-react-mathjax";

export const AttemptCard = ({ children }: { children: string }) => {
  return (
    <Card>
      <CardContent>
        <Typography align="center">
          <MathJax>{children}</MathJax>
        </Typography>
      </CardContent>
    </Card>
  );
};
