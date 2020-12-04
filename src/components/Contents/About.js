import React from "react";
import styled from "styled-components";
import avatar from "../../public/avatar.png";
import Fade from "react-reveal/Fade";

const Block = styled.div`
  padding-top: 50px;
`;

const Title = styled.h2`
  font-size: 3.5vw;
  font-weight: 700;
  color: #222222;
  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

const SubTitle = styled.div`
  font-weight: 100;
  font-size: 2vw;
  margin: 0 auto;
  width: 51vw;
  @media (max-width: 768px) {
    width: 74%;
    font-size: 5vw;
  }
`;

const Img = styled.img`
  position: relative;
  top: 4px;
  width: 22vw;
  @media (max-width: 768px) {
    width: 287px;
  }
`;

const About = () => {
  return (
    <Block>
      <Fade bottom>
        <Title>"시간을 내편으로 만들어 하루하루 꾸준하게."</Title>
      </Fade>
      <SubTitle>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting.
      </SubTitle>
      <Fade>
        <Img src={avatar}></Img>
      </Fade>
    </Block>
  );
};

export default About;
