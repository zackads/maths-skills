import { Box, Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Skill } from "../../src/model/Skill";
import { ParsedUrlQuery } from "querystring";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getAllSkills } from "../../src/data/getAllSkills";
import { getSkillById } from "../../src/data/getSkillById";
const GameController = dynamic(
  () => import("../../src/controller/GameController"),
  {
    ssr: false,
  }
);

const Practise = ({
  skill,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { lives = "3", timeout = "10" } = router.query;

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {skill.title}
        </Typography>
        {skill.questions.length > 0 ? (
          <GameController
            skill={skill}
            startingLives={Number(lives)}
            timeoutSeconds={Number(timeout)}
          />
        ) : (
          <Typography>
            {"We didn't find any questions for this skill :-("}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

type Props = {
  skill: Skill;
};

interface Params extends ParsedUrlQuery {
  skillId: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  return {
    props: {
      skill: getSkillById(params!.skillId),
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: getAllSkills().map((skill) => ({ params: { skillId: skill.id } })),
    fallback: false,
  };
}

export default Practise;
