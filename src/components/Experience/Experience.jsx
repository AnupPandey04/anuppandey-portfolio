import React, { useState } from "react";
import { experiences } from "../../constants";

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-4 sm:px-[7vw] lg:px-[16vw] bg-skills-gradient clip-path-custom-2"
    >
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Desktop Line */}
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-white h-full"></div>

        {/* Mobile Line */}
        <div className="sm:hidden absolute left-[24px] w-[2px] bg-white h-full"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex flex-col sm:flex-row mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Circle */}
            <div className="absolute left-[18px] sm:left-1/2 sm:-translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-10">
              <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-[calc(100%-60px)] ml-[60px] sm:ml-0 sm:w-[45%] p-5 rounded-2xl bg-gray-900 border border-white shadow-[0_0_20px_rgba(130,69,236,0.3)] hover:scale-105 transition ${
                index % 2 === 0
                  ? "sm:ml-8 sm:mr-auto"
                  : "sm:mr-8 sm:ml-auto"
              }`}
            >
              {/* Header */}
              <div className="flex gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{exp.desc}</p>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#8245ec] text-white text-xs px-3 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certificate */}
              {exp.certificate && (
                <button
                  onClick={() => setSelectedCert(exp.certificate)}
                  className="mt-4 bg-purple-600 px-4 py-2 rounded text-white"
                >
                  View Certificate 🎓
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-gray-900 p-4 rounded-xl w-[90%] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="text-white float-right text-xl"
            >
              ✖
            </button>

            <img src={selectedCert} className="w-full mt-4 rounded" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;