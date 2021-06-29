import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  const [SideMenu, setSideMenu] = useState(true);

  const hideSideMenu = () => {
    setSideMenu(false);
  };
  return (
    <div
      className="flex-centered"
      style={{
        padding: "20px 40px",
        fontSize: "1.4rem",
        // flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <div>
        <b className="color-a"> Sajeel </b> Aalam
      </div>

      <div className="sideMenuButtons" onClick={() => setSideMenu(!SideMenu)}>
        {SideMenu ? <AiOutlineClose /> : <FiMenu />}
      </div>
      <div
        className={`flex-centered sideMenuNav`}
        style={{ visibility: SideMenu ? "visible" : "hidden" }}
      >
        <nav className="nav-top" style={{ flexWrap: "wrap" }}>
          <li onClick={hideSideMenu}>
            <AnchorLink href="#about">About</AnchorLink>
          </li>
          <li onClick={hideSideMenu}>
            <AnchorLink href="#skills">Skills</AnchorLink>
          </li>
          <li onClick={hideSideMenu}>
            <AnchorLink href="#project-gallery">Projects</AnchorLink>
          </li>
        </nav>
        <AnchorLink href="#contacts" onClick={hideSideMenu}>
          <button className="lg" style={{ marginLeft: "30px" }}>
            Hire me!
          </button>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Nav;
