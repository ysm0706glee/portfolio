import About from "../components/About";
import Work from "../components/Work";

import { request, gql } from "graphql-request";
import Contact from "../components/Contact";

const gqlUrl =
  "https://api-eu-central-1.graphcms.com/v2/cl345gm6m5eza01xmfos9hxfz/master";

const query = gql`
  query {
    abouts {
      about {
        markdown
      }
    }
    works {
      title
      titleSrc {
        url
      }
    }
  }
`;

type Data = {
  abouts: [{ about: { markdown: string } }];
  works: [
    {
      title: string;
      titleSrc: {
        url: string;
      };
    }
  ];
};

export async function getStaticProps() {
  const data: Data = await request(gqlUrl, query);

  return {
    props: {
      data,
    },
  };
}

const IndexPage = ({ data }: { data: Data }) => {
  return (
    <>
      <About abouts={data.abouts} />
      <Work works={data.works} />
      <Contact />
    </>
  );
};

export default IndexPage;
