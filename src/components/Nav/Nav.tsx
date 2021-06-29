import React from "react";

const Nav = () => {
  return (
    <div
      className="flex-centered"
      style={{
        padding: "20px 40px",
        fontSize: "1.4rem",
        // maxWidth: "1000px",
        // backgroundColor: "rgba(0,0,0,0.2)",
        justifyContent: "space-between",
      }}
    >
      <div>
        <b className="color-a"> Sajeel </b> Aalam
      </div>
      <div className="flex-centered">
        <nav className="nav-top">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </nav>
        <button className="lg" style={{ marginLeft: "30px" }}>
          Hire me!
        </button>
      </div>
    </div>
  );
};

export default Nav;
