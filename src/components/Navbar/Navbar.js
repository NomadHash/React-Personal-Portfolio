import React from "react";
import styled from "styled-components";
import Burger from "./Buger";

const Nav = styled.nav`
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  background: white;
  width: 100%;
`;

const Navbar = ({ open, setOpen, navHandler, goHome, goAbout }) => {
  return (
    <Nav>
      <Burger
        open={open}
        setOpen={setOpen}
        navHandler={navHandler}
        goAbout={goAbout}
        goHome={goHome}
      />
    </Nav>
  );
};

export default Navbar;
