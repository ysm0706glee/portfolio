import { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextPage } from "next";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

type Props = {
  children: ReactNode;
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: roboto;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p {
    font-size: 1.5rem;
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
    min-height: 100vh;
    padding: 0 7rem;
  }
  
  .selfie {
    border-radius: 50%;
  }
  
  .work {
    border-radius: 1rem;
  }

  
  @media only screen and (max-width: 480px) {
    section {
      padding: 0 1rem;
    }
  }
`;

export const Layout: NextPage<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
