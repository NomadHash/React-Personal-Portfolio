import React from "react";
import styled from "styled-components";
import cocoColor from "../../public/projects/cocoColor.png";
import tindux from "../../public/projects/tindux.png";
import movieApp from "../../public/projects/movieApp.png";
import mbp from "../../public/projects/mbp.png";
import Fade from "react-reveal/Fade";

const Block = styled.div`
  background: white;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  padding: 50px 7vw;
  h2 {
    font-size: 100px;
    font-size: 70px;
  }
  span {
    color: #494949;
  }
  strong {
    font-size: 3vw;
    color: #2c2c2c;
    margin-right: 10px;
  }
  img {
    transition: width 0.5s;
    width: 35vw;
    border-radius: 4px;
    box-shadow: 0px 7px 3px rgba(0, 0, 0, 0.4);
    &:hover {
      width: 40vw;
      box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 768px) {
      width: 75vw;
    }
  }
`;
const ProjectBlockL = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
`;
const ProjectBlockR = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50px;
  @media (max-width: 768px) {
    top: 0;
  }
`;
const ProjectTitleBlock = styled.div`
  text-align: left;
`;

const Portfolio = () => {
  return (
    <>
      <Fade bottom>
        <h2>Projects</h2>
      </Fade>
      <Block>
        <Fade bottom>
          <ProjectBlockL>
            <ProjectTitleBlock>
              <strong>Tindux</strong>
              <span>소셜 블라인드 데이트 앱</span>
            </ProjectTitleBlock>
            <img src={tindux}></img>
          </ProjectBlockL>
        </Fade>
        <Fade bottom>
          <ProjectBlockR>
            <ProjectTitleBlock>
              <strong>Coco Color</strong>
              <span>SNS 형태의 칼라 스키마 공유 웹앱</span>
            </ProjectTitleBlock>
            <img src={cocoColor}></img>
          </ProjectBlockR>
        </Fade>
        <Fade bottom>
          <ProjectBlockL>
            <ProjectTitleBlock>
              <strong>TMDB</strong>
              <span>Vue기반의 영화 검색 및 추천 사이트</span>
            </ProjectTitleBlock>
            <img src={movieApp}></img>
          </ProjectBlockL>
        </Fade>
        <Fade bottom>
          <ProjectBlockR>
            <ProjectTitleBlock>
              <strong>M.B.P</strong>
              <span>MERN스택 기반의 보일러 플레이트</span>
            </ProjectTitleBlock>
            <img src={mbp}></img>
          </ProjectBlockR>
        </Fade>
      </Block>
    </>
  );
};

export default Portfolio;
