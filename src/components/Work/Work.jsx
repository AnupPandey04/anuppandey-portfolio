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
            className="relative cursor-pointer border border-white/20 bg-gray-900 rounded-2xl overflow-hidden 
            hover:scale-105 transition duration-300 
            hover:shadow-[0_0_25px_rgba(130,69,236,0.5)]"
          >
            {/* 🔴 LIVE BADGE */}
            {project.webapp && (
              <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full font-semibold shadow-md z-10 animate-pulse">
                LIVE
              </div>
            )}

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4">
          <div
            className="bg-gray-900 w-full max-w-2xl rounded-2xl p-6 relative 
            animate-[fadeIn_0.3s_ease-in-out]"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
            >
              ✖
            </button>

            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-60 object-cover rounded-lg"
            />

            {/* Title */}
            <h2 className="text-2xl font-bold text-white mt-4">
              {selectedProject.title}
            </h2>

            {/* Description */}
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
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center py-3 rounded-lg text-white transition ${
                    selectedProject.webapp
                      ? "w-1/2 bg-gray-800 hover:bg-gray-700"
                      : "w-full bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  Code
                </a>
              )}

              {selectedProject.webapp && (
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 text-center bg-purple-600 hover:bg-purple-700 py-3 rounded-lg text-white transition"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;