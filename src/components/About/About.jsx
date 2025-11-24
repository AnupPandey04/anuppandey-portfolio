import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpeg';

const About = () => {
  return (
    <section id="about" className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-4 md:mt-8 lg:mt-10">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">

          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Anup Pandey
          </h2>

          {/* Skills Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                'Full-Stack MERN Developer', 2000,
                'Data Science Enthusiast', 2000,
                'Machine Learning Practitioner', 2000,
                'AI Developer', 2000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h3>

          {/* About Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 leading-relaxed">
            I’m Anup Pandey, a Full-Stack MERN Developer and AI enthusiast with a strong 
            background in Data Science and Machine Learning. I specialize in building 
            end-to-end web applications, integrating AI models, and creating intelligent 
            user experiences. I enjoy solving real-world problems through clean code, 
            powerful data insights, and innovative AI integrations.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1RVNE3WaEew3bgF_ra0t-0Ubh67m5ZnH8/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Anup Pandey"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
