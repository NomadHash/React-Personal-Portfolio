import React from "react";
import styled from "styled-components";
import section1 from "../public/background.png";
import Introduction from "../components/Contents/Introduction";
import Portfolio from "../components/Contents/Portfolio";
import Introduce from "../components/Contents/Introduce";
import Stack from "../components/Contents/Stack";

const Block = styled.div`
  padding-top: 55px;
  background: #ffffff;
`;
const Section1 = styled.div`
  height: 53vw;
  background: url(${section1});
  position: relative;
  background-repeat: no-repeat;
  background-size: 100vw;
`;
const Section2 = styled.div`
  background: #ffffff;
`;

const HomeContainer = () => {
  return (
    <Block>
      <Section1>
        <Introduction />
      </Section1>
      <Section2>
        <Introduce />
        <Stack />
        <Portfolio />
      </Section2>
    </Block>
  );
};

export default HomeContainer;
