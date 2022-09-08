import { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";
import { NextPage } from "next";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  h1, h2, h3 {
    font-family: Poppins;
  }

  p {
    font-size: 1.5vw;
    line-height: 1.5;
  }

  ul {
    list-style-type: none;
    padding-left: 0
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  section {
    padding: 3rem 7rem;
  }

  .primary-color {
    color: #333;
  }

  .secondary-color {
    color: #ffffff;
  }

  .tertiary-color {
    color: #11bbb3;
  }

  .primary-background-color {
    background: #333;
  }

  .secondary-background-color {
    background: #ffffff;
  }

  .viewport-height-100 {
    height: 100vh;
  }

  .viewport-min-height-70 {
    min-height: 70vh;
  }

  .height-100 {
    height: 100%;
  }

  .block {
    display: block;
  }

  .flex {
    display: flex;
  }

  .gap-1 {
    gap: 1rem;
  }

  .flex-1 {
    flex: 1;
  }

  .align-self-center {
    align-self: center
  };

  .margin-buttom {
    margin-bottom: 3rem;
  }

  .margin-right-1 {
    margin-right: 1rem;
  }

  .border {
    border: 1px solid #333;
  }

  .image-container {
    position: relative;
    width: 40%;
    height: 80%;
  }

  .border {
    border: 3px solid #333;
    border-radius: 7px;
  }

  .margin-center {
    margin: 0 auto;
  }
  
  @media only screen and (max-width: 480px) {
    p {
      font-size: 1rem;
      line-height: 1.3;
    }

    section {
      padding: 0.5rem 1rem;
    }

    .height-100 {
      height: 80%;
    }

  .mobile-margin-center {
    margin: 0 auto;
  }

    .margin-buttom {
      margin-bottom: 1rem;
    }

    .image-container {
      width: 90%;
      height: 50%;
    }
  }
`;

type Props = {
  children: ReactNode;
};

export const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  );
};
