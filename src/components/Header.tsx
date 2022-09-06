import Link from "next/link";
import { NextPage } from "next";
import styled from "styled-components";
import { AnimatedA } from "src/styles/common";

const StledHeader = styled.header`
  height: 10vh;
  padding: 0 7rem;
  background: #333;

  @media only screen and (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const StledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  height: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StledLi = styled.li`
  margin: 1rem;

  @media only screen and (max-width: 480px) {
    margin: 0.5rem;
  }
`;

const Labels = ["ABOUT", "SKILLS", "WORK"];

export const Header: NextPage = () => {
  return (
    <>
      <StledHeader>
        <StledUl>
          <div></div>
          <StyledDiv>
            {Labels.map((label) => (
              <StledLi key={label}>
                <Link href={`#${label.toLowerCase()}`}>
                  <AnimatedA white>{label}</AnimatedA>
                </Link>
              </StledLi>
            ))}
          </StyledDiv>
        </StledUl>
      </StledHeader>
    </>
  );
};
