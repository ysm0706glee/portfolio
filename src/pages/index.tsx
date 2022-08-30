import { GetStaticProps, NextPage } from "next";
import { request, gql } from "graphql-request";
import { Title } from "src/components/Title";
import { About } from "src/components/About";
import { Skills } from "src/components/Skills";
import { Work } from "src/components/Work";
import { Contact } from "src/components/Contact";
import { gqlUrl } from "src/utills/const";

const query = gql`
  query {
    abouts {
      about {
        markdown
      }
      url
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
      deployUrl
      githubUrl
    }
  }
`;

type Props = {
  abouts: [{ about: { markdown: string }; url: string }];
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
      deployUrl: string;
      githubUrl: string;
    }
  ];
};

const IndexPage: NextPage<Props> = (props) => {
  return (
    <div>
      <Title />
      <About abouts={props.abouts} />
      <Skills skills={props.skills} />
      <Work works={props.works} />
      <Contact />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data: Props = await request(gqlUrl, query);

  return { props: data };
};

export default IndexPage;
