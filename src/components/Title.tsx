import { NextPage } from "next";
import styled from "styled-components";

const StyledDiv = styled.div`
  &:before {
    content: "";
    border-radius: 3px;
    top: 0;
    width: 85%;
    margin: 0 auto;
    margin-bottom: 2vw;
    height: 0.5vw;
    border: 1px solid #e2333b;
    box-shadow: 0 0 10px #a32128, 0 0 20px #3f0716;
    display: block;
  }
`;

const StyledH3 = styled.h3`
  color: #000000;
  font-family: "indira_kregular";
  font-size: 8rem;
  text-transform: uppercase;
  font-weight: normal;
  text-align: center;
  letter-spacing: -5px;
  text-shadow: -1px -1px 0 #e2333b, 1px -1px 0 #e2333b, -1px 1px 0 #e2333b,
    1px 1px 0 #e2333b, 0 0 2px #f9c2af, 0 0 14px#a32128, 0 0 10px#a32128,
    0 0 13px #a32128, 0 0 20px #3f0716;
  position: relative;
  line-height: 0.9;
  transform: scale(0.9, 1);
  margin: 0 auto;

  &:after {
    content: "";
    position: absolute;
    border-radius: 3px;
    top: 65%;
    width: 12vw;
    height: 0.5vw;
    transform: translate(0vw, 0);
    border: 1px solid #e2333b;
    box-shadow: 0 0 10px #a32128, 0 0 20px #3f0716;
  }

  &:before {
    content: "";
    position: absolute;
    border-radius: 3px;
    top: 66%;
    width: 12vw;
    height: 0.5vw;
    transform: translate(-9.5vw, 0);
    border: 1px solid #e2333b;
    box-shadow: 0 0 10px #a32128, 0 0 20px #3f0716;
  }

  > span:first-child {
    transform: scale(1.4) translate(-1.5vw, 1vw);
    display: inline-block;
  }

  > span:last-child {
    transform: scale(1.4) translate(2.5vw, 1vw);
    display: inline-block;
  }

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
        alignItems: "center",
      }}
    >
      <StyledDiv>
        <StyledH3>
          <span>F</span>RONT-EN<span>D</span>ENGINEER
        </StyledH3>
      </StyledDiv>
    </section>
  );
};
