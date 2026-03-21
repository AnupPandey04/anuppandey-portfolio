import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-4 sm:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Desktop Line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-white h-full"></div>

        {/* Mobile Line */}
        <div className="sm:hidden absolute left-5 w-[2px] bg-white h-full"></div>

        {/* Items */}
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex flex-col sm:flex-row items-start mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >

            {/* Circle */}
            <div
              className="
                absolute 
                left-4 sm:left-1/2 
                sm:-translate-x-1/2
                bg-gray-400 border-4 border-[#8245ec]
                w-10 h-10 sm:w-12 sm:h-12
                rounded-full flex justify-center items-center z-10
              "
            >
              <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`
                w-[85%] ml-12 sm:ml-0 sm:w-[45%]
                p-4 sm:p-6 
                mt-12 sm:mt-0
                rounded-2xl shadow-2xl border border-white 
                bg-gray-900 backdrop-blur-md
                shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                transform transition duration-300 hover:scale-105
                ${
                  index % 2 === 0
                    ? "sm:ml-8 sm:mr-auto"
                    : "sm:mr-8 sm:ml-auto"
                }
              `}
            >

              {/* Header */}
              <div className="flex items-start gap-4">

                {/* Logo */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-300 mt-1">
                    {exp.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    {exp.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
                {exp.desc}
              </p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="text-white font-medium">Skills:</h5>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#8245ec] text-gray-200 px-3 py-1 text-xs rounded-lg border border-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;