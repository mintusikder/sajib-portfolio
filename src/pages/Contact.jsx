// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-gray-50 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-berkshire mb-14 text-center">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Left: Contact Info */}
        <div>
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
              <p>yourname@email.com</p>
            </div>

            <div>
              <p className="font-medium">📞 Phone</p>
              <p>+880 XXXXXXXX</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-full font-medium hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
