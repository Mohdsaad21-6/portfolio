import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md"
      >
        <form className="flex flex-col space-y-6">
          <motion.input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-md border focus:outline-none focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-md border focus:outline-none focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.textarea
            rows="5"
            placeholder="Your Message"
            className="px-4 py-3 rounded-md border focus:outline-none focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
