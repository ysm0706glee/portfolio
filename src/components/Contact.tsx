import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";

const Loading = styled.div`
  --size: 24px;
  --stroke-width: calc(var(--size) / 6);
  --color: currentColor;
  --animation-duration: 1s;
  position: relative;
  width: var(--size);
  height: var(--size);

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-width: var(--stroke-width);
    border-style: solid;
    border-color: var(--color) var(--color) transparent transparent;
    border-radius: 50%;
    transform: rotate(0deg);
    animation: var(--animation-duration) infinite circle-spin-4-animation;
  }

  &::before {
    animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0);
  }

  &::before {
    animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  }

  @keyframes circle-spin-4-animation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );
      setIsLoading(false);
      setIsSent(true);
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <section id="contact">
      <h2 style={{ marginBottom: "7rem" }}>Contact</h2>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <motion.a
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/takuma-yoshimi"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: 70 }} />
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/ysm0706glee"
            target="_blank"
          >
            <GitHubIcon sx={{ fontSize: 70 }} />
          </motion.a>
        </div>

        {!isSent ? (
          !isLoading ? (
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
              onSubmit={onSubmit}
            >
              <TextField
                sx={{ marginBottom: "1rem" }}
                error={errors.name ? true : false}
                id="outlined-basic"
                label="name"
                variant="outlined"
                {...register("name", { required: true })}
              />

              <TextField
                sx={{ marginBottom: "1rem" }}
                error={errors.email ? true : false}
                id="outlined-basic"
                label="email"
                variant="outlined"
                {...register("email", { required: true })}
              />

              <TextField
                sx={{ marginBottom: "1rem" }}
                error={errors.message ? true : false}
                id="outlined-multiline-static"
                label="message"
                multiline
                rows={4}
                {...register("message", { required: true })}
              />

              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={onSubmit}
              >
                Send
              </Button>
            </form>
          ) : (
            <Loading />
          )
        ) : (
          <p>Thank you for contacting me! I will repry soon!</p>
        )}
      </div>
    </section>
  );
};
