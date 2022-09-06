import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { CardActionArea } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { ImageContainer } from "src/styles/common";

const StyledDiv = styled.div`
  width: 100%;
  height: 30rem;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1;
  display: flex;

  @media only screen and (max-width: 480px) {
    height: 15rem;
  }
`;

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

type Props = {
  works: [
    {
      id: string;
      title: string;
      image: {
        id: string;
        url: string;
      };
    }
  ];
};

export const Work: NextPage<Props> = (props) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const index = wrap(0, props.works.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section id="work">
      <h2 className="margin-buttom-3">Work 👨🏻‍💻</h2>

      <StyledDiv>
        <AnimatePresence initial={false} custom={direction}>
          <Link href={`/works/${props.works[index].id}`}>
            <Card
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                border: "3px solid #333",
              }}
              component={motion.div}
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <h3>{props.works[index].title}</h3>
                  <ImageContainer className="border">
                    {props.works[index].image?.url ? (
                      <Image
                        src={props.works[index].image.url}
                        layout="fill"
                        objectFit="contain"
                        alt="image"
                      />
                    ) : null}
                  </ImageContainer>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </AnimatePresence>

        <IconButton
          sx={{
            position: "absolute",
            top: "calc(50% - 20px)",
            zIndex: 2,
          }}
          onClick={() => paginate(-1)}
        >
          <ArrowCircleLeftIcon />
        </IconButton>

        <IconButton
          sx={{
            position: "absolute",
            top: "calc(50% - 1rem)",
            left: "calc(100% - 2.3rem)",
            zIndex: 2,
          }}
          onClick={() => paginate(1)}
        >
          <ArrowCircleRightIcon />
        </IconButton>
      </StyledDiv>
    </section>
  );
};
