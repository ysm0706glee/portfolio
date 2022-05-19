import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      style={{
        minHeight: "70vh",
        padding: "1rem 10rem",
        backgroundColor: "#00589b",
        color: "#f1f0ec",
      }}
    >
      <h2 style={{ marginBottom: "7rem" }}>Contact</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <motion.a
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/takuma-yoshimi"
        >
          <LinkedInIcon sx={{ fontSize: 100 }} />
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/ysm0706glee"
        >
          <GitHubIcon sx={{ fontSize: 100 }} />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
