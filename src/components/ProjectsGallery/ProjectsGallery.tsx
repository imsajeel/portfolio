import React from "react";
import { FaGithub, FaLaptop, FaServer } from "react-icons/fa";

interface ProjectsDataType {
  title: any;
  imageUrl: any;
  webUrl: any;
  githubUrl: any;
  serverUrl?: any;
}

const ProjectsGallery = () => {
  let ProjectsData: ProjectsDataType[] = [
        {
      title: "Lahori Karahi Manchester",
      imageUrl: "images/projects/lahori.jpeg",
      webUrl: "https://www.lahorimanchester.co.uk",
      githubUrl: "https://github.com/imsajeel/lahori-karahi",
    },
    {
      title: "Uncle M's Sandwich Bar (React)",
      imageUrl: "images/projects/uncleeee.jpg",
      webUrl: "https://unclem.uk/",
      githubUrl: "https://github.com/imsajeel/uncle-m",
    },
    {
      title: "Skyfares UK (React - express - amadeus)",
      imageUrl: "images/projects/skyfares.png",
      webUrl: "https://skyfares.uk/",
      githubUrl: "https://github.com/imsajeel/skyfares",
    },
    {
      title: "SpaceX (Graphql - PWA - Typescript)",
      imageUrl: "images/projects/space-x.png",
      webUrl: "https://spacex-sajeel.surge.sh/",
      githubUrl: "https://github.com/imsajeel/spacex-react",
    },
    {
      title: "Quiz App (PWA - Typescript)",
      imageUrl: "images/projects/quiz.png",
      webUrl: "http://quiz-ts-sajeel.surge.sh",
      githubUrl: "https://github.com/imsajeel/quiz-ts",
    },
    {
      title: "Landing Page",
      imageUrl: "images/projects/landing-page.png",
      webUrl: "http://bootcamp-project-4b-sajeel.surge.sh/",
      githubUrl: "https://github.com/imsajeel/bootcamp-project-4a",
    },
    {
      title: "Shoe Shop",
      imageUrl: "images/projects/shoe-shop.png",
      webUrl: "http://bootcamp-sajeel-shoes-shop.surge.sh/",
      githubUrl: "https://github.com/imsajeel/bootcamp-shoes-shop",
    },
    {
      title: "Covid Tracker",
      imageUrl: "images/projects/covid-tracker.png",
      webUrl: "https://bootcamp-sajeel-covid-tracker.surge.sh/",
      githubUrl: "https://github.com/imsajeel/covid19-tracker-bootcamp",
    },
    {
      title: "Web Animation",
      imageUrl: "images/projects/web-animation.png",
      webUrl: "http://bootcamp-sajeel-project-4a.surge.sh/",
      githubUrl: "https://github.com/imsajeel/bootcamp-project-4a",
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
            onClick={() => window.open(item.webUrl, "_blank")}
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
            {item.serverUrl && (
              <>
                &nbsp; &nbsp; &nbsp;
                <FaServer
                  title="Server Github"
                  onClick={() => window.open(item.serverUrl, "_blank")}
                  className="buttonIcons"
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGallery;
