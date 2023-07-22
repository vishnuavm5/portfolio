import React from "react";
import Button from "./Button";

const Skills = () => {
  const skills = [
    "html",
    "CSS",
    "Javascript",
    "React",
    "NodeJS",
    "git",
    "Python",
    "Websockets",
    "WebRTC",
    "Next JS",
    "C",
    "C#",
    "MongoDB",
    "SQL",
  ];
  return (
    <section className="bg-black text-white py-12" id="skills">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Skills</h1>
        <div className="flex flex-wrap justify-center items-center space-x-5 space-y-5">
          {skills.map((skill) => {
            return <Button skill={skill} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
