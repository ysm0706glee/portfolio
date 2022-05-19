import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  return (
    <>
      <header style={{ backgroundColor: "#f1f0ec" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "0",
          }}
        >
          <li>
            <h2>Takuma</h2>
          </li>
          <li>
            <Link href="/">
              <HomeIcon sx={{ cursor: "pointer" }}>
                <a></a>
              </HomeIcon>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
