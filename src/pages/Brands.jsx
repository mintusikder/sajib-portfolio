// src/pages/Brands.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import shaun from "../assets/Brands/shaun.jpeg";
import ethan from "../assets/Brands/wthan.jpeg";
import moeen from "../assets/Brands/moeen.jpeg";
import parvez from "../assets/Brands/parvez.jpeg";

const brands = [
  {
    name: "Shaun Tait",
    description:
      "With the legendary Shaun Tait! One of the fastest bowlers in cricket history and a true inspiration.",
    image: shaun,
    link: "https://www.espncricinfo.com/cricketers/shaun-tait-8076",
  },
  {
    name: "Ethan Brookes",
    description:
      "Behind the scenes with Ethan Brookes — turning ideas into engaging content that connects.",
    image: ethan,
    link: "https://www.espncricinfo.com/cricketers/ethan-brookes-1150964",
  },
  {
    name: "Moeen Ali",
    description:
      "Behind the scenes with Moeen Ali — transforming concepts into media that connects.",
    image: moeen,
    link: "https://www.espncricinfo.com/cricketers/moeen-ali-8917",
  },
  {
    name: "Parvez Hossain Emon",
    description:
      "Behind the scenes with Parvez Hossain Emon — turning ideas into engaging content that connects.",
    image: parvez,
    link: "https://www.espncricinfo.com/cricketers/parvez-hossain-emon-1139511",
  },
];

const Brands = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Brands & Collaborations | Sagar Chandra Roy</title>
        <meta
          name="description"
          content="International brand collaborations and partnerships with renowned personalities including Shaun Tait, Moeen Ali, and leading creators."
        />
      </Helmet>

      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-gray-50 min-h-screen">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-berkshire mb-4">
            Partnering with Stars to Elevate Brands
          </h1>
          <p className="text-gray-600 text-lg">
            Crafting engaging media and branding content with international stars
            that inspires, connects, and drives impact.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group bg-white hover:bg-red-50
                         rounded-2xl overflow-hidden shadow-md
                         hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-56 object-cover
                             transition-transform duration-500
                             group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <h3
                    className="text-xl font-semibold mb-3
                               transition duration-300
                               group-hover:text-red-600"
                  >
                    {brand.name}
                  </h3>
                </a>

                <p className="text-gray-600 leading-relaxed">
                  {brand.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold">Work With Me</h2>
          <p className="text-gray-600 mt-3">
            Let’s collaborate to create impactful branding and media experiences.
          </p>
        </motion.div>

      </section>
    </>
  );
};

export default Brands;
