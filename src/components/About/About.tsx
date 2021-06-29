import React from "react";

const About = () => {
  return (
    <div
      className="bg-color-a flex-centered"
      style={{
        color: "white",
        flexDirection: "column",
        padding: "10px",
        paddingBottom: "20px",
      }}
    >
      <h1>ABOUT ME</h1>
      <p style={{ maxWidth: "500px", marginTop: "1px" }}>
        Hi, My Name is Sajeel Aalam and I am full stack software engineer. I can
        help you solve your business problems through software. Ready to work on
        excellent projects with wonderful people.
      </p>
    </div>
  );
};

export default About;
