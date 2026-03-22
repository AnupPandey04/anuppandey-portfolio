import React, { useState } from "react";
import { certificates } from "../../constants";
import Tilt from "react-parallax-tilt";

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, 3);

  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-[7vw] lg:px-[20vw]"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          CERTIFICATES
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4">
          Certifications that validate my skills and learning journey
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCertificates.map((cert) => (
          <Tilt
            key={cert.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.03}
            transitionSpeed={400}
          >
            <div
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer bg-gray-900 border border-white rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="text-white text-sm sm:text-base font-semibold text-center">
                  {cert.title}
                </h3>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* View More Button */}
      {certificates.length > 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition"
          >
            {showAll ? "Show Less ▲" : "View More ▼"}
          </button>
        </div>
      )}

      {/* 🔥 MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-gray-900 p-4 rounded-xl w-[90%] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedCert(null)}
              className="text-white text-xl float-right"
            >
              ✖
            </button>

            {/* Image */}
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full mt-4 rounded"
            />

            {/* Title */}
            <h3 className="text-white text-lg mt-4 text-center">
              {selectedCert.title}
            </h3>

            {/* 🔗 Link Button */}
            {selectedCert.link && (
              <div className="text-center mt-4">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg text-white"
                >
                  Certificate Link🔗
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;