import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { withRouter } from "react-router-dom";

const NavBarContainer = ({ history }) => {
  const [open, setOpen] = useState(false);

  const navHandler = () => {
    if (open) {
      setOpen(!open);
    }
  };
  const goAbout = () => {
    history.push("/about");
  };
  const goHome = () => {
    history.push("/");
  };
  return (
    <>
      <Navbar
        open={open}
        setOpen={setOpen}
        navHandler={navHandler}
        goAbout={goAbout}
        goHome={goHome}
      />
    </>
  );
};

export default withRouter(NavBarContainer);
