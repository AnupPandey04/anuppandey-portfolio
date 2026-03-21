import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer border border-white bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-2 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 w-[90%] md:w-[70%] lg:w-[50%] rounded-2xl p-6 relative">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✖
            </button>

            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-60 object-cover rounded-lg"
            />

            {/* Content */}
            <h2 className="text-2xl font-bold text-white mt-4">
              {selectedProject.title}
            </h2>

            <p className="text-gray-400 mt-3">
              {selectedProject.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href={selectedProject.github}
                target="_blank"
                className="w-1/2 text-center bg-gray-800 py-2 rounded-lg text-white"
              >
                Code
              </a>
              <a
                href={selectedProject.webapp}
                target="_blank"
                className="w-1/2 text-center bg-purple-600 py-2 rounded-lg text-white"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;