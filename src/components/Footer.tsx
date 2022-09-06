import { motion } from "framer-motion";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const StyledFooter = styled.footer`
  height: 10vh;
`;

const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const Footer = () => {
  return (
    <StyledFooter className="primary-background-color">
      <StyledDiv className="secondary-color">
        <motion.a
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/takuma-yoshimi"
          target="_blank"
        >
          <LinkedInIcon />
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
          <GitHubIcon />
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          href="mailto: ysm0706glee@gmail.com"
        >
          <EmailIcon />
        </motion.a>
      </StyledDiv>
    </StyledFooter>
  );
};
