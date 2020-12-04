import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 15px 10px;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    z-index: 2;
    margin-top: 0;
    background-color: #7510f7;
    position: fixed;

    transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(-100%)")};

    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      font-size: 25px;
      font-weight: 400;
    }
  }
`;

const RightNav = ({ open, goAbout, goHome, navHandler }) => {
  return (
    <Ul open={open}>
      <li
        onClick={() => {
          goHome();
          navHandler();
        }}
      >
        Home
      </li>
      <li
        onClick={() => {
          goAbout();
          navHandler();
        }}
      >
        About me
      </li>
    </Ul>
  );
};

export default RightNav;
