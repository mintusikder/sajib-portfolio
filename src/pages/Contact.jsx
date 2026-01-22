// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Contact | Sagar Chandra Roy</title>
        <meta
          name="description"
          content="Get in touch with Sagar Chandra Roy for brand collaborations, content creation, media production, and digital branding opportunities."
        />
      </Helmet>

      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-gray-50 min-h-screen">
        
        {/* Page Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-berkshire mb-14 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Let’s work together
            </h2>

            <p className="text-gray-600 mb-8">
              Have a project in mind or just want to say hello?  
              Feel free to reach out — I’m always open to new opportunities.
            </p>

            <div className="space-y-5 text-gray-700">
              <div>
                <p className="font-medium">📍 Location</p>
                <p>Bangladesh</p>
              </div>

              <div>
                <p className="font-medium">📧 Email</p>
                <p>sr59835@gmail.com</p>
              </div>

              <div>
                <p className="font-medium">📞 Phone</p>
                <p>+88 01974408410</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-gray-100 rounded-2xl p-8 shadow-md"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-3 bg-red-600 text-white rounded font-medium
                           hover:bg-red-700 transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Contact;
