import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import aboutImg from "../assets/aboutImg.jpeg";

const About = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>About | Sagar Chandra Roy</title>
        <meta
          name="description"
          content="Learn more about Sagar Chandra Roy — Brand Ambassador, Country Head, and Media Professional with 10+ years of experience in branding, video production, and digital media."
        />
      </Helmet>

      <section
        id="about"
        className="px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-white overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          
          {/* Left: Image */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImg}
              alt="About Sagar Chandra Roy"
              className="w-full max-w-md rounded-2xl shadow-xl object-cover"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
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
              media operations. Proven ability to represent brands, build
              audience trust, manage teams, and deliver impactful visual and
              digital content. Strong background in hospitality, food & beverage
              branding, media, and training.
            </p>

            {/* Button */}
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded bg-red-600 text-white font-medium
                         hover:bg-red-700 transition duration-300 shadow-md"
            >
              Contact Me
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default About;
