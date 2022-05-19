import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: roboto;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    backgroundColor: #f1f0ec;
    color: #333;
  }

  p {
    font-size: 1.5rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
