import React from "react";

interface SkillsDataType {
  title: any;
  imageUrl: any;
}

const Skills = () => {
  let SkillsData: SkillsDataType[] = [
    { title: "React JS", imageUrl: "images/react.png" },
    { title: "Node JS", imageUrl: "images/nodejs.png" },
    { title: "Graphql", imageUrl: "images/graphql.png" },
    { title: "Firebase", imageUrl: "images/firebase.png" },
    { title: "MongoDB", imageUrl: "images/mongodb.png" },
    { title: "SQL", imageUrl: "images/sql.png" },
  ];

  return (
    <div style={{ margin: "20px 5px 50px 5px" }}>
      <h1 className="title">Skills</h1>
      <p>I work with tech such as</p>
      <SkillImages data={SkillsData} />
    </div>
  );
};

const SkillImages = ({ data }: { data: SkillsDataType[] }) => {
  return (
    <div className="flex-centered" style={{ justifyContent: "space-around" }}>
      {data.map((item) => (
        <div
          className="flex-centered"
          style={{
            margin: "5px 10px",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <img
            style={{ width: "100px", height: "100px", marginBottom: "10px" }}
            src={item.imageUrl}
            alt={item.title}
          />
          <label>{item.title}</label>
        </div>
      ))}
    </div>
  );
};

export default Skills;
