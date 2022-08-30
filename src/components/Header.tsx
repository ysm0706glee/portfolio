import Link from "next/link";
import { NextPage } from "next";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { StyledA } from "src/styles/common";

const StledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 0 7rem;

  @media only screen and (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const StledLi = styled.li`
  margin: 1rem;

  @media only screen and (max-width: 480px) {
    margin: 0.5rem;
  }
`;

const Labels = ["ABOUT", "SKILLS", "WORK", "CONTACT"];

export const Header: NextPage = () => {
  return (
    <>
      <StledHeader>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0",
          }}
        >
          <li>
            <Link href="/">
              <a>
                <HomeIcon sx={{ cursor: "pointer" }} />
              </a>
            </Link>
          </li>
          <div style={{ display: "flex" }}>
            {Labels.map((label) => (
              <StledLi key={label}>
                <Link href={`#${label.toLowerCase()}`}>
                  <StyledA>{label}</StyledA>
                </Link>
              </StledLi>
            ))}
          </div>
        </ul>
      </StledHeader>
    </>
  );
};
