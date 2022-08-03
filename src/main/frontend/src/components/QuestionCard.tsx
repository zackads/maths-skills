import { Card, CardContent, Typography } from "@mui/material";
import { MathJax } from "better-react-mathjax";

export const QuestionCard = ({ children }: { children: string }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography align="center">
          <MathJax dynamic>{children}</MathJax>
        </Typography>
      </CardContent>
    </Card>
  );
};
