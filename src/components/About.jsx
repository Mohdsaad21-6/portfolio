import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/image.png"; // Add your image here

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <img
            src={Image}
            alt="Profile"
            className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full text-center md:text-left"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Hi, I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Mohd Saad</span>, a final-year BSc student with a strong interest in full-stack development. I've focused on learning the MERN stack and have built several web projects that highlight both user experience and performance across devices and platforms.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
           Alongside project work, I've explored AWS for hosting and deployment and implemented Razorpay for payment integration in my applications. I’m now preparing for internships, refining my skills, and constantly pushing myself to create smarter, more impactful solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
