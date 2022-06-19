import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
const StyledSpinner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  h4 {
    margin: 5px;
  }
`;
interface LoaderProps {
    size: string;
}
const Loader = styled.div<LoaderProps>`
  font-size: 10px;
  margin: 10px;
  /* text-indent: -9999em; */
  width: 5em;
  height: 5em;
  width: ${ el => el.size };
  height: ${ el => el.size };
  border-radius: 50%;
  background: #2196F3;
  background: linear-gradient(
    to right,
    var(green) 10%,
    rgba(128, 0, 255, 0) 42%
  );
  position: relative;
  animation: ${rotate} 1.4s infinite linear;
  transform: translateZ(0);
  &::before {
  width: 50%;
  height: 50%;
  background: white;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  }
  &::after {
  background: #ffffff;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  }
`;
const TestDiv = styled.div`
  display: block;
  height: 15px;
`
interface SpinnerProps {
    text?:string;
    size?:string;
}
export const Spinner: FC<SpinnerProps> = ({ text = "", size = "5em" }) => {
  const header = text ? <h4>{text}</h4> : null;
  return (
    <StyledSpinner>
      <TestDiv >{header}</TestDiv>
      <Loader size={size} />
    </StyledSpinner>
  );
};
