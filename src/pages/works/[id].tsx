import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { request, gql } from "graphql-request";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { gqlUrl } from "src/utills/const";
import { AnimatedA, ImageContainer, StyledBorder } from "src/styles/common";
import { IconButton } from "@mui/material";
import Head from "next/head";

const StyledContainer = styled.div`
  height: 100%;
  padding: 1rem;
  border: 3px solid #333;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLeftContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  left: 3rem;
  top: calc(100vh / 2);

  @media only screen and (max-width: 480px) {
    left: 1rem;
    top: 1rem;
  }
`;

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
      image {
        id
        url(transformation: { document: { output: { format: png } } })
      }
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
      image: {
        id: string;
        url: string;
      } | null;
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
    <>
      <Head>
        <title>{props.works[0].title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className="viewport-height-100 primary-color secondary-background-color">
        <Link href="/">
          <a className="secondary-color">
            <StyledIconButton
              sx={{
                position: "absolute",
                left: "3rem",
                top: "calc(100vh / 2)",
              }}
            >
              <ArrowBackIcon fontSize="large" />
            </StyledIconButton>
          </a>
        </Link>

        <StyledContainer>
          <StyledLeftContainer>
            <h2>{props.works[0].title}</h2>

            <div>
              <ReactMarkdown
                components={{
                  p: AnimatedParagraph,
                }}
              >
                {props.works[0].description.markdown}
              </ReactMarkdown>
            </div>

            <div className="flex">
              {props.works[0].deployUrl && (
                <div className="primary-color margin-right-1">
                  <AnimatedA
                    href={props.works[0].deployUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deploy
                  </AnimatedA>
                </div>
              )}

              {props.works[0].githubUrl && (
                <div className="primary-color">
                  <AnimatedA
                    href={props.works[0].githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositories
                  </AnimatedA>
                </div>
              )}
            </div>
          </StyledLeftContainer>

          <ImageContainer className="border flex-1">
            {props.works[0].image ? (
              <Image
                src={props.works[0].image.url}
                layout="fill"
                objectFit="contain"
                alt="project image"
              />
            ) : null}
          </ImageContainer>
        </StyledContainer>
      </section>
    </>
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
