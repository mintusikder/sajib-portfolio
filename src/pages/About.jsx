import React from "react";
import aboutImg from "../assets/aboutImg.jpeg";
import { Link } from "react-router";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={aboutImg}
            alt="About me"
            className="w-full max-w-md rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-berkshire mb-6 text-gray-900">
            About Me
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Dynamic and results-driven{" "}
            <span className="font-semibold text-gray-900">
              Brand Ambassador, Country Head, and Media Professional
            </span>{" "}
            with over{" "}
            <span className="font-semibold text-gray-900">
              10+ years of experience
            </span>{" "}
            in brand promotion, marketing communication, video production, and
            media operations. Proven ability to represent brands, build audience
            trust, manage teams, and deliver impactful visual and digital
            content. Strong background in hospitality, food & beverage branding,
            media, and training.
          </p>

          {/* Button */}
          <div className="flex">
            <Link
            to={"/contact"}
              className="px-8 py-3 rounded bg-red-600 text-white font-medium
                         hover:bg-red-700 transition duration-300 shadow-md"
            >
              Contact Me
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
