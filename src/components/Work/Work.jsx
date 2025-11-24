import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (id) => {
    setOpenProject(openProject === id ? null : id);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transition-all duration-300"
          >
            <div
              onClick={() => toggleProject(project.id)}
              className="cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                {/* IF CLOSED → show small preview */}
                {openProject !== project.id && (
                  <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                    {project.description}
                  </p>
                )}
              </div>
            </div>

            {/* EXPANDED CONTENT */}
            {openProject === project.id && (
              <div className="px-6 pb-6 transition-all duration-300">
                <p className="text-gray-400 mb-6">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-300 px-6 py-2 rounded-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>

                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
