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

const StyledLi = styled.li`
  width: 7rem;
  height: 7rem;
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
      <StyledLi key={frontEnd.id} className="border">
        <Card sx={{ height: "100%" }}>
          <CardContent sx={{ height: "100%" }}>
            <ImageContainer large>
              <Image
                src={frontEnd.url}
                layout="fill"
                objectFit="cover"
                alt={frontEnd.name}
              />
            </ImageContainer>

            <span className="block">{frontEnd.name}</span>
          </CardContent>
        </Card>
      </StyledLi>
    ));

  const backEnd = props.skills
    .filter((skill) => skill.type === "back-end")
    .map((backEnd) => (
      <StyledLi key={backEnd.id} className="border">
        <Card sx={{ height: "100%" }}>
          <CardContent sx={{ height: "100%" }}>
            <ImageContainer large>
              <Image
                src={backEnd.url}
                layout="fill"
                objectFit="cover"
                alt={backEnd.name}
              />
            </ImageContainer>

            <span className="block">{backEnd.name}</span>
          </CardContent>
        </Card>
      </StyledLi>
    ));

  return (
    <section id="skills" className="viewport-min-height-70">
      <h2 className="margin-buttom">Skills 🛠</h2>

      <StyledH3>front-end</StyledH3>
      <StyledUl>{frontEnd}</StyledUl>

      <StyledH3>back-end</StyledH3>
      <StyledUl>{backEnd}</StyledUl>
    </section>
  );
};
