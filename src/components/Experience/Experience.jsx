import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-4 sm:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 w-0.5 sm:w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex items-start mb-12 sm:mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div
              className="
                absolute
                top-0 sm:top-6
                left-6 sm:left-1/2 sm:-translate-x-1/2
                z-10
                bg-gray-400
                border-4 border-[#8245ec]
                w-8 h-8 sm:w-12 sm:h-12
                rounded-full flex justify-center items-center
              "
            >
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md ml-12 sm:ml-0 ${
                index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
              }`}
            >
              <div className="p-4 sm:p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">

                {/* Flex container for image + role text */}
                <div className="flex items-start space-x-4">

                  {/* Company Logo/Image */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white break-words">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm sm:text-base text-gray-300 mt-1">
                      {experience.company}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">
                      {experience.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed break-words">
                  {experience.desc}
                </p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white text-sm sm:text-base">Skills:</h5>
                  <ul className="flex flex-wrap mt-2 gap-2">
                    {experience.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs rounded-lg border border-gray-400 break-words"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
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
