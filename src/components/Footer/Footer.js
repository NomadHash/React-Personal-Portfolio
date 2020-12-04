import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { SiBloglovin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const Block = styled.div`
  z-index: 1;
  bottom: 0px;
  position: relative;
  background: #7510f7;
  height: 200px;
  padding: 50px;

  strong {
    font-weight: 200;
    color: white;
    font-size: 20px;
  }
`;

const ItemBlock = styled.div`
  display: flex;
  font-weight: 500;
  flex-direction: column;
  align-items: flex-start;
`;
const GitIcon = styled(AiFillGithub)`
  color: white;
  font-size: 50px;
`;
const BlogIcon = styled(SiBloglovin)`
  color: white;
  font-size: 50px;
`;
const EmailIcon = styled(HiOutlineMail)`
  color: white;
  font-size: 50px;
`;

const IconBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 275px;
`;

const FooterText = styled.div`
  margin-bottom: 50px;
`;
const Footer = () => {
  return (
    <Block>
      <FooterText>
        <strong>
          Life is a journey, not a guided tour. <br />
          -Anonymous-{" "}
        </strong>
      </FooterText>

      <IconBlock>
        <ItemBlock>
          <a href="http://www.github.com/NomadHash">
            <GitIcon />
          </a>
        </ItemBlock>
        <ItemBlock>
          <a href="badsoap141@gmail.com">
            <EmailIcon />
          </a>
        </ItemBlock>
        <ItemBlock>
          <a href="https://velog.io/@nomadhash">
            <BlogIcon />
          </a>
        </ItemBlock>
      </IconBlock>
    </Block>
  );
};

export default Footer;
