import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { request, gql } from "graphql-request";
import { Title } from "src/components/Title";
import { About } from "src/components/About";
import { Skills } from "src/components/Skills";
import { Work } from "src/components/Work";
import { gqlUrl } from "src/utills/const";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

const query = gql`
  query {
    titles {
      japan {
        id
        url
      }
      spain {
        id
        url
      }
    }
    abouts {
      about {
        markdown
      }
      profile {
        id
        url
      }
    }
    skills {
      id
      type
      name
      url
    }
    works {
      id
      title
      image {
        id
        url(transformation: { document: { output: { format: png } } })
      }
    }
  }
`;

type Props = {
  titles: [
    {
      japan: {
        id: string;
        url: string;
      };
      spain: {
        id: string;
        url: string;
      };
    }
  ];
  abouts: [
    {
      about: { markdown: string };
      profile: {
        id: string;
        url: string;
      };
    }
  ];
  skills: [
    {
      id: string;
      type: string;
      name: string;
      url: string;
    }
  ];
  works: [
    {
      id: string;
      title: string;
      image: {
        id: string;
        url: string;
      };
    }
  ];
};

const IndexPage: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        {/* Primary Meta Tags */}
        <title>Portfolio</title>
        <meta name="title" content="Portfolio" />
        <meta
          name="description"
          content="My portfolio using next.js and TypeScript. "
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Portfolio" />
        <meta
          property="og:description"
          content="My portfolio using next.js and TypeScript. "
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Portfolio" />
        <meta
          property="twitter:description"
          content="My portfolio using next.js and TypeScript. "
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>

      <Header />
      <main>
        <Title titles={props.titles} />
        <About abouts={props.abouts} />
        <Skills skills={props.skills} />
        <Work works={props.works} />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data: Props = await request(gqlUrl, query);

  return {
    props: data,
  };
};

export default IndexPage;
