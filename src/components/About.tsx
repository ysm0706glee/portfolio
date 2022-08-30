import { NextPage } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

type Props = {
  abouts: [
    {
      about: { markdown: string };
      url: string;
    }
  ];
};

export const About: NextPage<Props> = (props) => {
  return (
    <section id="about">
      <h2 style={{ marginBottom: "3rem" }}>About</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Image
          priority
          className="selfie"
          layout="fixed"
          objectFit="cover"
          src={props.abouts[0].url}
          height={300}
          width={300}
          alt="Selfie"
        />
        <div>
          <ReactMarkdown>{props.abouts[0].about.markdown}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};
