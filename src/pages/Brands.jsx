// src/pages/Brands.jsx
import React from "react";

// import shaun from "../assets/brands/shaun-tait.jpg";
// import ethan from "../assets/brands/ethan-brookes.jpg";
// import moeen from "../assets/brands/moeen-ali.jpg";
// import parvez from "../assets/brands/parvez-emon.jpg";

const brands = [
  {
    name: "Shaun Tait",
    description:
      "With the legendary Shaun Tait! One of the fastest bowlers in cricket history and a true inspiration.",
    // image: shaun,
  },
  {
    name: "Ethan Brookes",
    description:
      "Behind the scenes with Ethan Brookes — turning ideas into engaging content that connects.",
    // image: ethan,
  },
  {
    name: "Moeen Ali",
    description:
      "Behind the scenes with Moeen Ali — transforming concepts into media that connects.",
    // image: moeen,
  },
  {
    name: "Parvez Hossain Emon",
    description:
      "Behind the scenes with Parvez Hossain Emon — turning ideas into engaging content that connects.",
    // image: parvez,
  },
];

const Brands = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-berkshire mb-4">
          Partnering with Stars to Elevate Brands
        </h1>
        <p className="text-gray-600 text-lg">
          Crafting engaging media and branding content with international stars
          that inspires, connects, and drives impact.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            {/* <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-56 object-cover"
            /> */}

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                {brand.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {brand.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">Work With Me</h2>
        <p className="text-gray-600 mt-3">
          Let’s collaborate to create impactful branding and media experiences.
        </p>
      </div>

    </section>
  );
};

export default Brands;
