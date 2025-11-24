import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto px-4">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">

        {/* Desktop Vertical Line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Mobile Vertical Line */}
        <div className="sm:hidden absolute left-6 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-start mb-16 md:mb-20 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >

            {/* Timeline Circle */}
            <div
              className="
                absolute 
                left-6 sm:left-1/2 
                transform -translate-x-1/2
                bg-gray-400 border-4 border-[#8245ec]
                w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16
                rounded-full 
                flex justify-center items-center
                z-10
              "
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`
                w-[90%] mx-auto sm:w-[85%] md:max-w-md 
                p-4 sm:p-6 md:p-8 
                mt-12 sm:mt-0 
                rounded-2xl shadow-2xl border border-white 
                bg-gray-900 backdrop-blur-md
                shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                transform transition-transform duration-300 hover:scale-105
                break-words
                ${index % 2 === 0 
                  ? "sm:ml-8 sm:mr-auto" 
                  : "sm:mr-8 sm:ml-auto"
                }
              `}
            >

              {/* Logo + Text Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                
                {/* School Logo */}
                <div className="w-20 h-16 sm:w-24 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Degree + School */}
                <div className="flex-1 min-w-0 break-words">
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight break-words">
                    {edu.degree}
                  </h3>
                  <h4 className="text-base sm:text-md text-gray-300 mt-1 break-words">
                    {edu.school}
                  </h4>

                  {/* Date */}
                  <p className="text-sm text-gray-500 mt-2 break-words">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-4 text-gray-400 font-bold break-words">
                Grade: {edu.grade}
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed break-words">
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
