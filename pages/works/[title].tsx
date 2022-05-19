import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { request, gql } from "graphql-request";
import { ParsedUrlQuery } from "querystring";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import Image from "next/image";

const gqlUrl =
  "https://api-eu-central-1.graphcms.com/v2/cl345gm6m5eza01xmfos9hxfz/master";

const query = gql`
  query ($title: String!) {
    works(where: { _search: $title }) {
      workSrc {
        url
      }
      description {
        markdown
      }
    }
  }
`;

type Works = {
  works: [
    {
      workSrc: {
        url: string;
      } | null;
      description: { markdown: string };
    }
  ];
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { title: "/works/Flightlog-APP" } },
      { params: { title: "/works/MyMizu" } },
      { params: { title: "/works/YouTube-shared-playlist" } },
      { params: { title: "My-internship" } },
    ],
    // check
    fallback: true,
  };
}

interface Params extends ParsedUrlQuery {
  title: string;
}

export const getStaticProps = async (
  context: GetStaticPropsContext<Params>
) => {
  const variables = {
    title: context.params!.title.replaceAll("-", " "),
  };

  const data: Works = await request(gqlUrl, query, variables);

  return {
    props: {
      works: data.works,
    },
  };
};

const Works = ({ works }: Works) => {
  const router = useRouter();
  let { title } = router.query;

  if (Array.isArray(title)) {
    title = title[0];
  }

  title = title ?? "";

  return (
    <motion.section
      animate={{ x: [-1000, 0] }}
      transition={{ ease: "easeOut", duration: 1 }}
      style={{
        minHeight: "90vh",
        padding: "1rem 10rem",
        backgroundColor: "#00589b",
        color: "#f1f0ec",
      }}
    >
      <h2 style={{ marginBottom: "3rem" }}>{title.replaceAll("-", " ")}</h2>
      {/* picture is not ready
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {works[0].workSrc && (
          <div style={{ textAlign: "center" }}>
            <Image
              src={works[0].workSrc.url}
              alt="Picture of my work"
              width={200}
              height={400}
              objectFit="cover"
            />
          </div>
        )} */}
      <div>
        <ReactMarkdown>{works[0].description.markdown}</ReactMarkdown>
      </div>
      {/* </div> */}
    </motion.section>
  );
};

export default Works;
