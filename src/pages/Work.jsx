import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import fiza from "../assets/work/fiza.jpeg";
import panorama from "../assets/work/panorama.jpeg";
import grandAkther from "../assets/work/grand-akther.jpeg";
import khushbu from "../assets/work/khushbu.jpeg";
import roastedBrew from "../assets/work/roasted-brew.jpeg";
import hiltown from "../assets/work/hiltown.jpeg";

const works = [
  {
    title: "Fiza & Co. Private Limited",
    description:
      "Fiza & Co. is one of the most trusted food brands in Bangladesh and has been recognized for its quality and dedication.",
    image: fiza,
    link: "https://www.facebook.com/fizaandco",
  },
  {
    title: "Panorama – Rooftop Restaurant & Party Centre",
    description:
      "PANORAMA: Where dining embraces panoramic vistas and celebrations reach new heights at Sylhet!",
    image: panorama,
    link: "https://www.facebook.com/PANORAMASYL",
  },
  {
    title: "Hotel Grand Akther",
    description: "Redefining luxury stay with premium hospitality services.",
    image: grandAkther,
    link: "https://www.facebook.com/hotelgrandakther",
  },
  {
    title: "খুশবু রেস্টুরেন্ট (Khushbu Restaurant)",
    description:
      "নান্দনিক ধাঁচের অন্দরসজ্জা আর অনন্য স্বাদসমৃদ্ধ খাবারের সমারোহে আপনাকে স্বাগতম!",
    image: khushbu,
    link: "https://www.facebook.com/KhusbuRestaurant",
  },
  {
    title: "Roasted Brew Cafe",
    description:
      "Something new for coffee lovers with a modern cafe experience.",
    image: roastedBrew,
    link: "https://www.facebook.com/profile.php?id=61577169398690",
  },
  {
    title: "Hiltown Hotel",
    description:
      "Welcome to Hiltown Hotel, where VIP comfort meets unparalleled luxury.",
    image: hiltown,
    link: "https://www.facebook.com/HiltownHotel",
  },
];

const Work = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Work With | Sagar Chandra Roy</title>
        <meta
          name="description"
          content="Brands and businesses that Sagar Chandra Roy has worked with, delivering impactful brand storytelling, video production, and digital marketing solutions."
        />
      </Helmet>

      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-white min-h-screen">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-berkshire mb-4">
            Work With
          </h1>
          <p className="text-gray-600 text-lg">
            Helping brands shine with videos, graphics, and social media
            strategies.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group bg-gray-50 hover:bg-red-50 
                         rounded-2xl overflow-hidden shadow-md 
                         hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-48 object-cover
                             transition-transform duration-500
                             group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-3"
                >
                  <h3
                    className="text-xl font-semibold rounded-lg
                               transition duration-300
                               group-hover:text-red-600"
                  >
                    {work.title}
                  </h3>
                </a>

                <p className="text-gray-600 leading-relaxed">
                  {work.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
