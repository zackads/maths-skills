import { Button } from "@mui/material";

export const IntroView = ({ onContinue }: { onContinue: () => void }) => {
  return (
    <>
      <h2>Trigonometry</h2>
      <p>Evaluate the expressions shown as quickly as you can</p>
      <p>Ready?</p>
      <Button autoFocus fullWidth variant={"contained"} onClick={onContinue}>
        Start now
      </Button>
    </>
  );
};
