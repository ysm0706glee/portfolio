import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Slides = styled.div`
  width: 100vw;
  padding: 1rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1;
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
      deployUrl: string;
      githubUrl: string;
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
      <h2
        style={{
          marginBottom: "3rem",
        }}
      >
        Work 👨‍💻
      </h2>

      <Slides>
        
        <div style={{ position: "absolute", top: "0px", zIndex: 10 }}>
          <ArrowCircleLeftIcon onClick={() => paginate(-1)}>
            Left
          </ArrowCircleLeftIcon>
        </div>

        <AnimatePresence initial={false} custom={direction}>
          <Link href={`/works/${props.works[index].id}`}>
            <Card
              sx={{ width: "100%", height: "30rem" }}
              component={motion.div}
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ position: 'absolute', maxWidth: '100%' }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    width: "100%",
                    height: "30rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h3>{props.works[index].title}</h3>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </AnimatePresence>

        <div style={{ position: "absolute", top: "0px", left: "90%", zIndex: 20 }}>
          <ArrowCircleRightIcon onClick={() => paginate(1)}>
            Right
          </ArrowCircleRightIcon>
        </div>
      </Slides>
    </section>
  );
};
