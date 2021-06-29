import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contacts = () => {
  return (
    <div
      className="flex-centered"
      style={{
        flexDirection: "column",
        height: "50vh",
        marginTop: "5rem",
        paddingBottom: "20px",
      }}
    >
      <h1>CONTACTS</h1>
      <br />
      <p style={{ maxWidth: "500px", marginTop: "1px" }}>
        Want to know more or just chat?
        <br />
        You are Welcome Send Message
      </p>
      <button
        className="lg hover-grow"
        onClick={() =>
          window.open("https://linkedin.com/in/imsajeel", "_blank")
        }
      >
        Send Message
      </button>
      <br />
      <div style={{ margin: "20px" }}>
        <FaLinkedin
          className="buttonIcons"
          size="50px"
          onClick={() =>
            window.open("https://linkedin.com/in/imsajeel", "_blank")
          }
        />
        &nbsp; &nbsp; &nbsp;
        <FaGithub
          className="buttonIcons"
          size="50px"
          onClick={() => window.open("https://github.com/imsajeel", "_blank")}
        />
      </div>
      <p style={{ marginTop: "1px", marginBottom: "70px" }}>
        Get in touch with me on
        <br />
        LinkedIn, Github
      </p>
    </div>
  );
};

export default Contacts;
