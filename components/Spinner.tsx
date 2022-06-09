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
  justify-content: center;
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
  background: green;
  background: linear-gradient(
    to right,
    var(green) 10%,
    rgba(128, 0, 255, 0) 42%
  );
  position: relative;
  animation: ${rotate} 1.4s infinite linear;
  transform: translateZ(0);
`;
interface SpinnerProps {
    text:string;
    size?:string;
}
export const Spinner: FC<SpinnerProps> = ({ text = "", size = "5em" }) => {
  const header = text ? <h4>{text}</h4> : null;
  return (
    <StyledSpinner>
      {header}
      <Loader size={size} />
    </StyledSpinner>
  );
};
