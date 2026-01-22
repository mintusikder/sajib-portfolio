import React from "react";
import About from "./About";
import aboutImg from "../assets/banner.jpeg";
import Experience from "./Experience";
import Contact from "./Contact";
import Work from "./Work";
import Brands from "./Brands";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center px-4 md:px-16"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImg})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="font-berkshire text-4xl md:text-6xl leading-tight">
            Sagar Chandra Roy
          </h1>

          <p className="mt-6 text-lg text-gray-200">Brand Content Creator</p>

          {/* About Me Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="#about"
              className="px-8 py-3 rounded bg-red-600 text-white font-medium text-lg
                         hover:bg-red-700 transition duration-300 shadow-lg"
            >
              About Me
            </a>
          </div>
        </div>
      </section>

      <About />
      <Work />
      <Experience />
      <Brands />
      <Contact />
    </>
  );
};

export default Home;
