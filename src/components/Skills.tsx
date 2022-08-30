import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

type Props = {
  skills: [
    {
      id: string;
      type: string;
      name: string;
      url: string;
    }
  ];
};

export const Skills: NextPage<Props> = (props) => {
  const frontEnd = props.skills
    .filter((skill) => skill.type === "front-end")
    .map((frontEnd) => (
      <li key={frontEnd.id} style={{ margin: "1rem" }}>
        <Card>
          <CardContent>
            <Image
              src={frontEnd.url}
              alt={frontEnd.name}
              width={100}
              height={100}
            />
            <Typography variant="body2">
              <span style={{ display: "block" }}>{frontEnd.name}</span>
            </Typography>
          </CardContent>
        </Card>
      </li>
    ));

  const backEnd = props.skills
    .filter((skill) => skill.type === "back-end")
    .map((backEnd) => (
      <li key={backEnd.id} style={{ margin: "1rem" }}>
        <Card>
          <CardContent>
            <Image
              className="skils"
              layout="fixed"
              objectFit="cover"
              src={backEnd.url}
              alt={backEnd.name}
              width={100}
              height={100}
            />
            <Typography variant="body2">
              <span style={{ display: "block" }}>{backEnd.name}</span>
            </Typography>
          </CardContent>
        </Card>
      </li>
    ));

  return (
    <section id="skills">
      <h2>Skills</h2>

      <StyledDiv>
        <h3 style={{ marginRight: "3rem" }}>front-end</h3>
        <ul
          style={{
            flex: 2,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {frontEnd}
        </ul>
      </StyledDiv>

      <StyledDiv>
        <h3 style={{ marginRight: "3rem" }}>back-end</h3>
        <ul style={{ flex: 2, display: "flex", flexWrap: "wrap" }}>
          {backEnd}
        </ul>
      </StyledDiv>
    </section>
  );
};
