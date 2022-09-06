import styled from "styled-components";

type AnimatedAProps = {
  white?: boolean;
};

type ImageContainerProps = {
  smaill?: boolean;
};

export const AnimatedA = styled.a<AnimatedAProps>`
color: ${(props) => (props.white ? "#ffffff" : " #333")};
position: relative;
text-decoration: none;

&: before {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: ${(props) => (props.white ? "#ffffff" : " #333")};
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

&: hover: before {
  transform-origin: left;
  transform: scaleX(1);
}
`;

export const StyledBorder = styled.div`
  border: 3px solid #333;
  border-radius: 7px;

  @media only screen and (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: ${(props) => (props.smaill ? "7rem" : "25rem")};
  height: ${(props) => (props.smaill ? "7rem" : "25rem")};

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.smaill ? "5rem" : "10rem")};
    height: ${(props) => (props.smaill ? "5rem" : "10rem")};
  }
`;
