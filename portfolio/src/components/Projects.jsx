import React from "react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    image: "path_to_image_1",
    liveLink: "https://example.com",
    codeLink: "https://github.com/example",
  },
  {
    id: 2,
    title: "Project 2",
    image: "path_to_image_2",
    liveLink: "https://example.com",
    codeLink: "https://github.com/example",
  },
  // Add more project objects as needed
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-12 px-12" id="Projects">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 flex justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg"
                >
                  View Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
