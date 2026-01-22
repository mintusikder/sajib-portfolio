import React from "react";
import { Helmet } from "react-helmet";
import { TypeAnimation } from "react-type-animation";
import About from "./About";
import aboutImg from "../assets/banner.jpeg";
import Experience from "./Experience";
import Contact from "./Contact";
import Work from "./Work";
import Brands from "./Brands";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sagar Chandra Roy | Brand Content Creator & Media Professional</title>
        <meta
          name="description"
          content="Sagar Chandra Roy is a Brand Content Creator, Media Professional, and Brand Ambassador with 10+ years of experience in branding, video production, and digital storytelling."
        />
      </Helmet>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center px-4 md:px-16"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImg})` }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl text-white">
          {/* Name */}
          <h1 className="font-berkshire text-4xl md:text-6xl leading-tight tracking-wide">
            <TypeAnimation
              sequence={["Sagar Chandra Roy", 2000]}
              speed={50}
              wrapper="span"
              cursor={false}
            />
          </h1>

          {/* Role */}
          <p className="mt-4 text-xl md:text-2xl text-red-400 font-medium">
            <TypeAnimation
              sequence={[
                "Brand Content Creator",
                1500,
                "Media Professional",
                1500,
                "Brand Ambassador",
                1500,
              ]}
              speed={60}
              repeat={Infinity}
              wrapper="span"
              cursor={true}
            />
          </p>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Helping brands grow through{" "}
            <span className="text-white font-semibold">impactful videos</span>,{" "}
            <span className="text-white font-semibold">
              creative storytelling
            </span>
            , and{" "}
            <span className="text-white font-semibold">
              strategic digital branding
            </span>
            . Over <b>10+ years of experience</b> working with hospitality, food &
            beverage, and media brands across Bangladesh.
          </p>

          {/* Button */}
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
