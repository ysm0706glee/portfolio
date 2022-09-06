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
    font-size: 1.3rem;
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

  .block {
    display: block;
  }

  .flex {
    display: flex;
  }

  .flex-1 {
    flex: 1;
  }

  .margin-buttom-3 {
    margin-bottom: 3rem;
  }

  .margin-right-1 {
    margin-right: 1rem;
  }

  .image-container {
    position: relative;
    width: 30rem;
    height: 30rem;
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

    .margin-buttom-2 {
      margin-bottom: 2rem;
    }

    .image-container {
      width: 20rem;
      height: 20rem;
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
