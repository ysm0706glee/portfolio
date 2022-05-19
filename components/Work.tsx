import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Slides = styled.div`
  padding: 1rem;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const Slide = styled.div`
  cursor: pointer;
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 15rem;
  height: 15rem;
  margin-right: 3rem;
  border-radius: 10px;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    width: 10rem;
    height: 10rem;
  }
`;

type WorkProps = {
  works: [
    {
      title: string;
      titleSrc: {
        url: string;
      };
    }
  ];
};

const Work = ({ works }: WorkProps) => {
  return (
    <section
      style={{
        minHeight: "70vh",
        padding: "1rem 10rem",
        backgroundColor: "#f1f0ec",
      }}
    >
      <h2 style={{ marginBottom: "5rem" }}>Work 👨‍💻</h2>

      <Slides>
        {works?.map((work, i: number) => (
          <Link key={i} href={`/works/${work.title.replaceAll(/\s+/g, "-")}`}>
            <Slide>
              <ul>
                <li>
                  <div>
                    {work.titleSrc && (
                      <div style={{ textAlign: "center" }}>
                        <Image
                          className="work"
                          src={work.titleSrc.url}
                          alt="Picture of my work"
                          width={100}
                          height={100}
                        />
                      </div>
                    )}
                    <h3>{work.title}</h3>
                  </div>
                </li>
              </ul>
            </Slide>
          </Link>
        ))}
      </Slides>
    </section>
  );
};

export default Work;
