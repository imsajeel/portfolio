import React from "react";
import "./App.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import ProjectsGallery from "./components/ProjectsGallery/ProjectsGallery";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Skills />
      <ProjectsGallery />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
