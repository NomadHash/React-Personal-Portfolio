import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Block = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 140px;

  h3 {
    font-size: 3vw;
    font-weight: 200;
  }

  li {
    font-weight: 200;
    margin-bottom: 10px;
    font-size: 1vw;
  }
`;

const SubBlock1 = styled.ul`
  list-style: none;
  border-left: 1px solid #ababab;
  border-right: 1px solid #ababab;
  padding: 4vw;
`;
const SubBlock = styled.ul`
  list-style: none;
  border-right: 1px solid #ababab;
  padding: 4vw;
`;

const Stack = () => {
  return (
    <Fade bottom>
      <Block>
        <SubBlock1>
          <h3>Design</h3>
          <li>PhotoShop</li>
          <li>Figma</li>
        </SubBlock1>
        <SubBlock>
          <h3>Deployment</h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java Script</li>
          <li>React</li>
          <li>Node js</li>
          <li>Mongo DB</li>
        </SubBlock>
        <SubBlock>
          <h3>Libraries</h3>
          <li>JWT</li>
          <li>Bcrypt</li>
          <li>Styled-components</li>
          <li>BootStrap</li>
          <li>Redux</li>
          <li>Redux Saga</li>
          <li>Mongoose</li>
        </SubBlock>
      </Block>
    </Fade>
  );
};

export default Stack;
