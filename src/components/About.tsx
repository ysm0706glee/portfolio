import { NextPage } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { StyledFlex, ImageContainer } from "src/styles/common";

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
    <section id="about" className="viewport-min-height-70 padding">
      <h2 className="margin-buttom">About 😎</h2>

      <StyledFlex className="height-30rem gap-1">
        <ImageContainer smaill className="mobile-margin-center border">
          <Image
            src={props.abouts[0].profile.url}
            layout="fill"
            objectFit="cover"
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
