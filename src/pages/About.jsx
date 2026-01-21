import React from "react";
import aboutImg from "../assets/aboutImg.jpeg";
const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About me"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-berkshire mb-6">
            About Me
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Dynamic and results-driven <b>Brand Ambassador, Country Head, and Media Professional</b> with over <b>10+ years of experience</b> in brand promotion, marketing communication, video production, and media operations. Proven ability to represent brands, build audience trust, manage teams, and deliver impactful visual and digital content. Strong background in hospitality, food & beverage branding, media, and training.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
