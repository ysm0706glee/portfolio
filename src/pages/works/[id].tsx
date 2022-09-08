import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { ReactNode, useState } from "react";
import { request, gql } from "graphql-request";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { SendModal } from "src/components/SendModal";
import { gqlUrl } from "src/utills/const";
import { AnimatedA, ImageContainer, StyledFlex } from "src/styles/common";

const StyledContainer = styled.div`
  height: 100%;
  padding: 1rem;
  border: 3px solid #333;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

type AnimatedParagraphProps = {
  children: ReactNode & ReactNode[];
};

const AnimatedParagraph: NextPage<AnimatedParagraphProps> = ({ children }) => {
  return (
    <motion.p variants={sentence} initial="hidden" animate="visible">
      {(children[0] as string).split("").map((str: string, i: number) => (
        <motion.span key={`${str}-${i}`} variants={letter}>
          {str}
        </motion.span>
      ))}
    </motion.p>
  );
};

const Works: NextPage<Props> = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Head>
        <title>{props.works[0].title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="viewport-height-100 padding primary-color secondary-background-color">
        <StyledContainer>
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

          <StyledFlex>
            <h2>{props.works[0].title}</h2>
            <button className="button" onClick={handleOpen}>
              Do you like this project?
            </button>
          </StyledFlex>

          <ImageContainer className="border align-self-center">
            {props.works[0].image ? (
              <Image
                priority
                src={props.works[0].image.url}
                layout="fill"
                objectFit="cover"
                alt="project image"
              />
            ) : null}
          </ImageContainer>

          <ReactMarkdown
            components={{
              p: AnimatedParagraph,
            }}
          >
            {props.works[0].description.markdown}
          </ReactMarkdown>

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
        </StyledContainer>

        <SendModal
          open={open}
          handleClose={handleClose}
          title={props.works[0].title}
        />
      </main>
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
