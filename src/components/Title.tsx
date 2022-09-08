import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { StyledFlex } from "src/styles/common";

const StyledSection = styled.section`
  height: calc(100vh - 10vh);
`;

const StyledP = styled.p`
  font-size: 3vw;

  @media only screen and (max-width: 480px) {
    margin: 1rem 0 1rem 0;
    font-size: 5vw;
  }
`;

type Props = {
  titles: [
    {
      japan: {
        id: string;
        url: string;
      };
      spain: {
        id: string;
        url: string;
      };
    }
  ];
};

export const Title: NextPage<Props> = (props) => {
  const [language, setLanguage] = useState<"en" | "ja">("en");

  return (
    <StyledSection className="primary-background-color padding">
      <StyledFlex className="height-100">
        <StyledP className="secondary-color">
          Hello, my name is Takuma,
          <br /> I am a {""}
          <AnimatePresence initial={false} exitBeforeEnter>
            {language === "en" ? (
              <motion.span
                className="tertiary-color"
                key="en"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setLanguage("ja")}
                onMouseLeave={() => setLanguage("en")}
              >
                Front-end engineer
              </motion.span>
            ) : (
              <motion.span
                className="tertiary-color"
                key="ja"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setLanguage("ja")}
                onMouseLeave={() => setLanguage("en")}
              >
                フロントエンドエンジニア
              </motion.span>
            )}
          </AnimatePresence>
        </StyledP>

        <AnimatePresence initial={false} exitBeforeEnter>
          {language === "en" ? (
            <motion.div
              className="image-container margin-center"
              key="en"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                priority
                className="image"
                src={props.titles[0].spain.url}
                layout="fill"
                objectFit="cover"
                alt="spain"
              />
            </motion.div>
          ) : (
            <motion.div
              className="image-container margin-center"
              key="ja"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                priority
                src={props.titles[0].japan.url}
                layout="fill"
                objectFit="cover"
                alt="spain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </StyledFlex>
    </StyledSection>
  );
};
