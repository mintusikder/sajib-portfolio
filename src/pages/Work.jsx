// import React from "react";

// import fiza from "../assets/work/fiza.jpg";
// import panorama from "../assets/work/panorama.jpg";
// import grandAkther from "../assets/work/grand-akther.jpg";
// import khushbu from "../assets/work/khushbu.jpg";
// import roastedBrew from "../assets/work/roasted-brew.jpg";
// import hiltown from "../assets/work/hiltown.jpg";

// const works = [
//   {
//     title: "Fiza & Co. Private Limited",
//     description:
//       "Fiza & Co. is one of the most trusted food brands in Bangladesh and has been recognized for its quality and dedication.",
//     image: fiza,
//   },
//   {
//     title: "Panorama – Rooftop Restaurant & Party Centre",
//     description:
//       "PANORAMA: Where dining embraces panoramic vistas and celebrations reach new heights at Sylhet!",
//     image: panorama,
//   },
//   {
//     title: "Hotel Grand Akther",
//     description: "Redefining luxury stay with premium hospitality services.",
//     image: grandAkther,
//   },
//   {
//     title: "খুশবু রেস্টুরেন্ট (Khushbu Restaurant)",
//     description:
//       "নান্দনিক ধাঁচের অন্দরসজ্জা আর অনন্য স্বাদসমৃদ্ধ খাবারের সমারোহে আপনাকে স্বাগতম!",
//     image: khushbu,
//   },
//   {
//     title: "Roasted Brew Cafe",
//     description:
//       "Something new for coffee lovers with a modern cafe experience.",
//     image: roastedBrew,
//   },
//   {
//     title: "Hiltown Hotel",
//     description:
//       "Welcome to Hiltown Hotel, where VIP comfort meets unparalleled luxury.",
//     image: hiltown,
//   },
// ];

// const Work = () => {
//   return (
//     <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-white min-h-screen">
//       {/* Header */}
//       <div className="text-center max-w-3xl mx-auto mb-16">
//         <h1 className="text-4xl md:text-5xl font-berkshire mb-4">
//           Work With
//         </h1>
//         <p className="text-gray-600 text-lg">
//           Helping brands shine with videos, graphics, and social media strategies.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {works.map((work, index) => (
//           <div
//             key={index}
//             className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
//           >
//             {/* Image */}
//             <img
//               src={work.image}
//               alt={work.title}
//               className="w-full h-48 object-cover"
//             />

//             {/* Content */}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-3">
//                 {work.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {work.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Work;
