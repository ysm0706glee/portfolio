import Link from "next/link";
import { NextPage } from "next";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";

const StledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 0 7rem;

  @media only screen and (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const StyledA = styled.a`
  color: #ffffff;
  position: relative;
  text-decoration: none;

  &: before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #ffffff;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &: hover: before {
    transform-origin: left;
    transform: scaleX(1);
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
              <li key={label} style={{ margin: "1rem" }}>
                <Link href={`#${label.toLowerCase()}`}>
                  <StyledA>{label}</StyledA>
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </StledHeader>
    </>
  );
};
