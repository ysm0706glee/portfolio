import { NextPage } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { StyledFlex, StyledBorder, ImageContainer } from "src/styles/common";

type Props = {
  abouts: [
    {
      about: { markdown: string };
      profile: {
        id: string;
        url: string;
      };
    }
  ];
};

export const About: NextPage<Props> = (props) => {
  return (
    <section id="about">
      <h2 className="margin-buttom-3">About 😎</h2>

      <StyledFlex>
        <ImageContainer className="border">
          <Image
            src={props.abouts[0].profile.url}
            layout="fill"
            objectFit="contain"
            alt="profile"
          />
        </ImageContainer>
        <div>
          <ReactMarkdown>{props.abouts[0].about.markdown}</ReactMarkdown>
        </div>
      </StyledFlex>
    </section>
  );
};
