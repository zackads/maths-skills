import { Card, CardContent, ListItemText, Stack } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import { delimit } from "../controller/GameController";
import { Attempt, isCorrect, Question } from "../model/Question";

export const ScoreCard = ({
  timeout,
  attempts,
  missed,
}: {
  timeout: number;
  attempts: Attempt[];
  missed: Question[];
}) => {
  const numberCorrect = attempts.filter((a) => isCorrect(a)).length;
  const totalQuestions = attempts.length + missed.length;
  const percentageCorrect = Math.round((numberCorrect / totalQuestions) * 100);

  return (
    <Stack spacing={2}>
      <p>
        You scored {numberCorrect} out of {totalQuestions} with {timeout}{" "}
        seconds per question. That&apos;s <b>{percentageCorrect}%</b>. (You
        missed {missed.length} questions.)
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
                  <p>
                    You said{" "}
                    <MathJax inline>{delimit(attempt.playerAnswer)}</MathJax>❌
                    {"  "}. The correct answer was{" "}
                    <MathJax inline>
                      {attempt.question.acceptedAnswers
                        .map(delimit)
                        .join(" or ")}
                    </MathJax>
                    .
                  </p>
                )}
              </ListItemText>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};
