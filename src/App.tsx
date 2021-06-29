import React from "react";
import "./App.css";
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
    </div>
  );
}

export default App;
