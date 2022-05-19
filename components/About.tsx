import Image from "next/image";
import { useRef } from "react";
import ReactMarkdown from "react-markdown";
import { useIntersectionObserver } from "usehooks-ts";

type AboutProps = {
  abouts: [
    {
      about: { markdown: string };
    }
  ];
};

const About = ({ abouts }: AboutProps) => {
  const aboutRef = useRef(null);
  const entry = useIntersectionObserver(aboutRef, {});
  const isVisible = !!entry?.isIntersecting;

  console.log(isVisible);

  return (
    <section
      style={{
        minHeight: "70vh",
        padding: "1rem 10rem",
        backgroundColor: "#00589b",
        color: "#f1f0ec",
      }}
    >
      <h2
        className={isVisible ? "is-visible" : ""}
        style={{ marginBottom: "1rem" }}
        ref={aboutRef}
      >
        About
      </h2>
      <Image
        priority
        className="selfie"
        src="/selfie.jpeg"
        height={250}
        width={300}
        alt="Selfie"
        objectFit="cover"
      />
      <ReactMarkdown>{abouts[0].about.markdown}</ReactMarkdown>
    </section>
  );
};

export default About;
