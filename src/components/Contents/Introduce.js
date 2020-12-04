import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const IntroBlock = styled.div`
  margin-bottom: 135px;
  @media (max-width: 768px) {
    padding: 25px;
  }

  h1 {
    margin: 0;
    font-weight: 300;
    font-size: 45px;
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
  h3 {
    font-weight: 200;
    font-size: 15px;
  }
`;

const Introduce = () => {
  return (
    <div>
      <Fade bottom>
        <IntroBlock>
          <h1>
            행사 기획자에서 부터 <br />
            퍼스널 트레이너, <br />
            그리고 <strong>개발자</strong>를 꿈꾸기 까지
          </h1>
          <h3>
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry. Lorem Ipsum has been <br />
            the industry's standard dummy text ever since the 1500s
          </h3>
        </IntroBlock>
      </Fade>
    </div>
  );
};

export default Introduce;
