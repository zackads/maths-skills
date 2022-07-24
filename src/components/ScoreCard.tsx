import { Card, CardContent, ListItemText, Stack } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import { delimit } from "../controller/GameController";
import { Attempt, isCorrect } from "../model/Question";

export const ScoreCard = ({ attempts }: { attempts: Attempt[] }) => {
  const numberCorrect = attempts.filter((a) => isCorrect(a)).length;
  const percentageCorrect = (numberCorrect / attempts.length) * 100;

  return (
    <Stack spacing={2}>
      <p>
        You scored {numberCorrect} out of {attempts.length}. That&apos;s{" "}
        <b>{percentageCorrect}%</b>.
      </p>
      {attempts.map((attempt, i) => {
        return (
          <Card variant="outlined" key={i}>
            <CardContent>
              <ListItemText key={i}>
                <MathJax>
                  {i + 1}. {attempt.question.text}
                </MathJax>
                {isCorrect(attempt) ? (
                  <p>
                    You said{" "}
                    <MathJax inline>{delimit(attempt.playerAnswer)}</MathJax>.
                    {"  "}
                    Correct! ✅
                  </p>
                ) : (
                  <>
                    <p>
                      You said{" "}
                      <MathJax inline>{delimit(attempt.playerAnswer)}</MathJax>{" "}
                      ❌
                    </p>
                    <p>
                      The correct answer was{" "}
                      <MathJax inline>
                        {attempt.question.acceptedAnswers
                          .map(delimit)
                          .join(" or ")}
                      </MathJax>
                    </p>
                  </>
                )}
              </ListItemText>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};
