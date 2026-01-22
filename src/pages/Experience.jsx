// src/pages/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Country Head",
    company: "Relaks Limited",
    location: "Bangladesh",
    responsibilities: [
      "Led national-level brand operations and representation.",
      "Managed marketing strategy, partnerships, and brand communication.",
      "Oversaw promotional campaigns and team coordination.",
    ],
  },
  {
    title: "Brand Ambassador",
    company: "Roasted Brew Cafe",
    responsibilities: [
      "Represented the brand across digital and physical platforms.",
      "Created promotional content and improved customer engagement.",
    ],
  },
  {
    title: "Brand Ambassador",
    company: "Fiza & Co. Private Limited",
    responsibilities: [
      "Actively promoted brand image and products.",
      "Supported marketing campaigns and public engagement.",
    ],
  },
  {
    title: "Brand Ambassador",
    company: "খুশবু রেস্টুরেন্ট (Khushbu Restaurant)",
    responsibilities: [
      "Built brand awareness through content and customer interaction.",
      "Strengthened local market presence.",
    ],
  },
  {
    title: "Brand Ambassador",
    company: "Hotel Grand Akther",
    responsibilities: [
      "Promoted hospitality services and events.",
      "Supported digital marketing and branding activities.",
    ],
  },
  {
    title: "Brand Ambassador",
    company: "Panorama – Rooftop Restaurant & Party Centre",
    responsibilities: [
      "Represented the brand in promotional campaigns.",
      "Enhanced visibility through creative content.",
    ],
  },
  {
    title: "Video Editor",
    company: "BBC71NEWS – Full-time",
    location: "Mathbaria (On-site)",
    duration: "Jan 2018 – May 2021",
    responsibilities: [
      "Edited news videos, interviews, and digital reports.",
      "Supported media publishing and content optimization.",
    ],
  },
  {
    title: "Video Editing Teacher",
    company: "Tarango Computer and Technology – Full-time",
    location: "Pirojpur Sadar, Barisal (On-site)",
    duration: "Jan 2016 – Dec 2019",
    responsibilities: [
      "Taught professional video editing courses.",
      "Trained students using Adobe Audition and Wondershare Filmora.",
    ],
  },
  {
    title: "Video Editor",
    company: "Barishal TV – Full-time",
    location: "Mathbaria (On-site)",
    duration: "Jan 2013 – Dec 2018",
    responsibilities: [
      "Edited news segments and promotional videos.",
      "Supported broadcast-quality media production.",
    ],
  },
];

// Motion variants for scroll animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Experience = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-gray-50 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-berkshire mb-14 text-center">
        Professional Experience
      </h1>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md flex flex-col transition duration-300 group hover:bg-red-50 hover:shadow-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-red-600">
              {exp.title}
            </h2>

            <p className="text-sm mb-4">
              <span className="text-black font-medium group-hover:text-red-600">
                {exp.company}
              </span>
              {exp.location && ` | ${exp.location}`}
              {exp.duration && ` | ${exp.duration}`}
            </p>

            <ul className="list-disc list-inside space-y-2 text-sm text-black group-hover:text-gray-800">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
