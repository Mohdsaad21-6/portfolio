import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    bg: "bg-orange-100",
    shadow: "hover:shadow-orange-400",
    description: "Markup language used to structure content on the web."
  },
  {
    name: "CSS",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    bg: "bg-blue-100",
    shadow: "hover:shadow-blue-400",
    description: "Styling layout with Flexbox, Grid, and responsive design."
  },
  {
    name: "JavaScript",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    bg: "bg-yellow-100",
    shadow: "hover:shadow-yellow-400",
    description: "Bringing interactivity and logic to web applications."
  },
  {
    name: "React",
    logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    bg: "bg-cyan-100",
    shadow: "hover:shadow-cyan-400",
    description: "Frontend library for building reusable UI components."
  },
  {
    name: "Node.js",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    bg: "bg-green-100",
    shadow: "hover:shadow-green-400",
    description: "JavaScript runtime for building scalable backend services."
  },
  {
    name: "Express.js",
    logo: "https://cdn-icons-png.flaticon.com/512/91/91397.png",
    bg: "bg-gray-100",
    shadow: "hover:shadow-gray-400",
    description: "Minimal web framework to handle routes and APIs in Node.js."
  },
  {
    name: "MongoDB",
    logo: "https://cdn-icons-png.flaticon.com/512/5126/5126785.png",
    bg: "bg-green-200",
    shadow: "hover:shadow-green-500",
    description: "NoSQL database for storing and retrieving application data."
  },
  {
    name: "AWS",
    logo: "https://cdn-icons-png.flaticon.com/512/622/622397.png",
    bg: "bg-yellow-200",
    shadow: "hover:shadow-yellow-500",
    description: "Cloud platform for deploying and scaling web applications."
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -80 : 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-6 h-[250px] rounded-xl ${skill.bg} transition-transform transform hover:-translate-y-1 hover:scale-105 shadow-md ${skill.shadow} flex flex-col justify-center`}
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={skill.logo} alt={`${skill.name} logo`} className="w-12 h-12 object-contain" />
              <span className="text-xl font-semibold">{skill.name}</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-900">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
