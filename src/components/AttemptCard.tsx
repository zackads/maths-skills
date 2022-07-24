import { Card, CardContent, Typography } from "@mui/material";
import { MathJax } from "better-react-mathjax";

/**
 * Display the user's attempt as rendered MathJax
 *
 * We use this display component to avoid the complexity of rendering MathJax directly within the _input_ component as
 * the user is typing.
 *
 * @param children A MathJax string
 */
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
