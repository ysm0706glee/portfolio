import styled from "styled-components";

export const StyledA = styled.a`
color: #ffffff;
position: relative;
text-decoration: none;

&: before {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #ffffff;
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
