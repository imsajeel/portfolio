import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  return (
    <div
      className="flex-centered"
      style={{
        padding: "20px 40px",
        fontSize: "1.4rem",

        justifyContent: "space-between",
      }}
    >
      <div>
        <b className="color-a"> Sajeel </b> Aalam
      </div>
      <div className="flex-centered">
        <nav className="nav-top">
          <li>
            <AnchorLink href="#about">About</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#skills">Skills</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#project-gallery">Projects</AnchorLink>
          </li>
        </nav>
        <AnchorLink href="#contacts">
          <button className="lg" style={{ marginLeft: "30px" }}>
            Hire me!
          </button>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Nav;
