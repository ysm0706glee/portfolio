import type { AppProps } from "next/app";
import { Layout } from "src/components/Layout";
import { Header } from "src/components/Header";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default MyApp;
