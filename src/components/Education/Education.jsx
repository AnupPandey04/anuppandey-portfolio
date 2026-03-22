import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 sm:py-24 px-4 sm:px-[7vw] lg:px-[16vw] bg-skills-gradient clip-path-custom-3"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EDUCATION
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">

        {/* Desktop Line */}
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-white h-full"></div>

        {/* Mobile Line */}
        <div className="sm:hidden absolute left-[24px] w-[2px] bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-[18px] sm:left-1/2 sm:-translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-[calc(100%-60px)] ml-[60px] sm:ml-0 sm:w-[45%] p-5 rounded-2xl bg-gray-900 border border-white shadow-[0_0_20px_rgba(130,69,236,0.3)] hover:scale-[1.02] transition ${
                index % 2 === 0
                  ? "sm:ml-8 sm:mr-auto"
                  : "sm:mr-8 sm:ml-auto"
              }`}
            >
              {/* Header with Logo */}
              <div className="flex items-start gap-4">

                {/* Logo */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.date}</p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-3 text-gray-400 font-bold">
                Grade: {edu.grade}
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;