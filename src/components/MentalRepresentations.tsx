import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Skill } from "../model/Skill";

export const MentalRepresentations = ({ skill }: { skill: Skill }) => {
  return (
    <Stack spacing={2}>
      {skill.mentalRepresentations.map((mr, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{mr.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ReactMarkdown
                components={{
                  img: ({ node, ...props }) => (
                    // @ts-ignore
                    // eslint-disable-next-line
                    <Image
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="contain"
                      {...props}
                    />
                  ),
                }}
              >
                {mr.bodyMarkdown}
              </ReactMarkdown>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Stack>
  );
};
