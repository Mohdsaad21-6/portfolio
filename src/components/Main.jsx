
import React from "react";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-white dark:from-gray-900 dark:to-gray-800 px-4"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-700 dark:text-white mb-4">
            Full Stack Developer
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            I build dynamic applications using the MERN stack — blending performance and design into seamless user experiences.
          </p>

          <motion.a
            href="https://drive.google.com/file/d/1faxaZh2253YlaSvZEU47Sl3O2QdsWTMa/view?usp=sharing" 
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:shadow-lg transition hover:bg-indigo-700"
          >
            📄 Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/051/966/255/large_2x/a-man-in-glasses-holding-a-laptop-free-png.png"
            alt="Developer illustration"
            className="w-[300px] md:w-[400px] rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MainPage;
