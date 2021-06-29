import React from "react";
import { FaGithub, FaLaptop } from "react-icons/fa";

interface ProjectsDataType {
  title: any;
  imageUrl: any;
  webUrl: any;
  githubUrl: any;
}

const ProjectsGallery = () => {
  let ProjectsData: ProjectsDataType[] = [
    {
      title: "London",
      imageUrl:
        "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
      webUrl: "https://gov.uk",
      githubUrl: "https://github.com/imsajeel",
    },
    {
      title: "London",
      imageUrl:
        "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
      webUrl: "https://gov.uk",
      githubUrl: "https://github.com/imsajeel",
    },
    {
      title: "London",
      imageUrl:
        "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
      webUrl: "https://gov.uk",
      githubUrl: "https://github.com/imsajeel",
    },
    {
      title: "London",
      imageUrl:
        "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
      webUrl: "https://gov.uk",
      githubUrl: "https://github.com/imsajeel",
    },
  ];

  return (
    <div style={{ margin: "20px 5px 50px 5px" }}>
      <h1 className="title">Projects</h1>
      <ProjectCards data={ProjectsData} />
    </div>
  );
};

const ProjectCards = ({ data }: { data: ProjectsDataType[] }) => {
  return (
    <div
      className="flex-centered"
      style={{ justifyContent: "center", flexWrap: "wrap" }}
    >
      {data.map((item) => (
        <div
          className="flex-centered"
          style={{
            backgroundColor: "rgba(0,0,0,0.05)",
            margin: "10px",
            borderRadius: "10px",
            padding: "30px",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <b onClick={() => window.open(item.webUrl, "_blank")}>{item.title}</b>
          <img
            style={{ width: "100%", maxWidth: "500px", margin: "20px 0px" }}
            src={item.imageUrl}
            alt={item.title}
          />
          <div style={{ fontSize: "2rem" }}>
            <FaGithub
              title="Github"
              onClick={() => window.open(item.githubUrl, "_blank")}
              className="buttonIcons"
            />
            &nbsp; &nbsp; &nbsp;
            <FaLaptop
              title="Website"
              onClick={() => window.open(item.webUrl, "_blank")}
              className="buttonIcons"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGallery;
