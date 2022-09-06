import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ImageContainer } from "src/styles/common";

const StyledH3 = styled.h3`
  @media only screen and (max-width: 480px) {
    text-align: center;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;

  & > li {
    margin: 1rem 1rem 1rem 0;
  }

  @media only screen and (max-width: 480px) {
    justify-content: center;
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
      <li key={frontEnd.id}>
        <Card sx={{ border: "2px solid #333" }}>
          <CardContent>
            <ImageContainer smaill>
              <Image
                src={frontEnd.url}
                layout="fill"
                objectFit="contain"
                alt={frontEnd.name}
              />
            </ImageContainer>

            <span className="block">{frontEnd.name}</span>
          </CardContent>
        </Card>
      </li>
    ));

  const backEnd = props.skills
    .filter((skill) => skill.type === "back-end")
    .map((backEnd) => (
      <li key={backEnd.id}>
        <Card sx={{ border: "2px solid #333" }}>
          <CardContent>
            <ImageContainer smaill>
              <Image
                src={backEnd.url}
                layout="fill"
                objectFit="contain"
                alt={backEnd.name}
              />
            </ImageContainer>

            <span className="block">{backEnd.name}</span>
          </CardContent>
        </Card>
      </li>
    ));

  return (
    <section id="skills">
      <h2 className="margin-buttom-3">Skills 🛠</h2>

      <StyledH3>front-end</StyledH3>
      <StyledUl>{frontEnd}</StyledUl>

      <StyledH3>back-end</StyledH3>
      <StyledUl>{backEnd}</StyledUl>
    </section>
  );
};
