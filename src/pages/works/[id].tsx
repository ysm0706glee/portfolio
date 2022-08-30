import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { request, gql } from "graphql-request";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import { gqlUrl } from "src/utills/const";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
      staggerChildren: 0.07,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const query = gql`
  query ($id: ID!) {
    works(where: { id: $id }) {
      title
      description {
        markdown
      }
      deployUrl
      githubUrl
    }
  }
`;

type Props = {
  works: [
    {
      title: string;
      description: { markdown: string };
      deployUrl: string | null;
      githubUrl: string | null;
    }
  ];
};

// CHANGE
type AnimatedParagraphProps = {
  children: any;
};

const AnimatedParagraph: NextPage<AnimatedParagraphProps> = (props) => {
  return (
    <motion.p variants={sentence} initial="hidden" animate="visible">
      {props.children[0].split("").map((str: string, i: number) => (
        <motion.span key={`${str}-${i}`} variants={letter}>
          {str}
        </motion.span>
      ))}
    </motion.p>
  );
};

const Works: NextPage<Props> = (props) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h2>
        <span
          style={{ paddingBottom: "0.5rem", borderBottom: "1px solid #ed2b12" }}
        >
          {props.works[0].title}
        </span>
      </h2>

      <div style={{ flex: 1 }}>
        <ReactMarkdown
          components={{
            p: AnimatedParagraph,
          }}
        >
          {props.works[0].description.markdown}
        </ReactMarkdown>
      </div>

      <div style={{ flex: 1, display: "flex" }}>
        {props.works[0].deployUrl && (
          <div style={{ marginRight: "1rem" }}>
            <a href={props.works[0].deployUrl} target="_blank" rel="noreferrer">
              Deploy
            </a>
          </div>
        )}

        {props.works[0].githubUrl && (
          <div>
            <a href={props.works[0].githubUrl} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query MyQuery {
      works {
        id
      }
    }
  `;

  type Props = {
    works: [
      {
        id: string;
      }
    ];
  };

  const data: Props = await request(gqlUrl, query);
  const paths = data.works.map((work) => `/works/${work.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }

  const variables = {
    id: ctx.params.id,
  };

  const data: Props = await request(gqlUrl, query, variables);

  return {
    props: {
      works: data.works,
    },
  };
};

export default Works;
