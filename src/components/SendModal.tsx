import { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { StyledModal } from "src/styles/common";

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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

type Props = {
  open: boolean;
  handleClose: () => void;
  title: string;
};

type FormData = {
  name: string;
  projectName: string;
};

export const SendModal: NextPage<Props> = (props) => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { name: "", projectName: props.title },
  });

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
    <Modal open={props.open} onClose={props.handleClose}>
      <StyledModal className="border">
        <IconButton
          sx={{ position: "absolute", right: 0 }}
          onClick={props.handleClose}
        >
          <CloseIcon />
        </IconButton>

        <StyledDiv className="height-100">
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
                  id="outlined-basic"
                  label="name(optional)"
                  variant="outlined"
                  {...register("name")}
                />

                <Button variant="contained" onClick={onSubmit}>
                  Send 💌
                </Button>
              </form>
            ) : (
              <Loading />
            )
          ) : (
            <p>Thank you!</p>
          )}
        </StyledDiv>
      </StyledModal>
    </Modal>
  );
};
