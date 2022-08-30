import { NextPage } from "next";
import styled from "styled-components";

const StyledH3 = styled.h3`
  font-size: 5rem;
  color: #1c0502;
  text-shadow: -0.05rem -0.05rem 1px #ed2b12, 0.05rem -0.05rem 1px #ed2b12,
    -0.05rem 0.05rem 1px #ed2b12, 0.05rem 0.05rem 1px #ed2b12, 0 0 15px #630100,
    0 0 20px #450100;

  @media only screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const Title: NextPage = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledH3>Front-end engineer</StyledH3>
    </section>
  );
};
