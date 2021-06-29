import React from "react";

const Home = () => {
  return (
    <div
      className="flex-centered"
      style={{
        flexDirection: "column",
        height: "calc(100vh - 100px)",
      }}
    >
      <div className="color-a" style={{ fontSize: "1.3rem" }}>
        Plan. Build. Optimize.
      </div>
      <p style={{ maxWidth: "600px", marginTop: "0px", fontSize: "2.5rem" }}>
        I build
        <b> powerful</b> web apps using
        <b> modern workflows</b>
      </p>
      <button className="lg hover-grow">Get in Touch</button>
    </div>
  );
};

export default Home;
