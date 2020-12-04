import React from "react";
import styled from "styled-components";
import Flash from "react-reveal/Flash";

const Strong = styled.strong`
  right: 10px;
  display: block;
  position: relative;
  font-size: 8vw;
  font-weight: 700;
  transform: rotateZ(-10deg);
  top: 2.3vw;
  cursor: pointer;
`;

const Introduction = () => {
  return (
    <Flash>
      <Strong>개발에 미치다</Strong>
    </Flash>
  );
};

export default Introduction;
