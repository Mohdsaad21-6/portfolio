import devtinder from "../assets/devtinder.png"; 
import amazon from "../assets/amazon.png"; 
import recipe from "../assets/recipe.png"; 
import location from "../assets/location.png"; 
import project from "../assets/project.jpg"; 
import React from "react";
import { motion } from "framer-motion";


const projects = [
  {
    title: "DevTinder",
    image: devtinder,
    description:
      "DevTinder is a MERN-based matchmaking app where developers send connection requests, accept or reject them, chat via WebSocket, and deploy scalable features on AWS. Razorpay powers premium membership upgrades.",
    links: [
      { label: "Live Site", url: "https://devtindercode.site" },
      { label: "GitHub", url: "https://github.com/mohdsaad21-6/DevTinder" }
    ]
  },
  {
    title: "Shopping App",
    image: amazon,
    description:
      "Full-stack e-commerce project featuring a React frontend with Redux and Vite, and an Express backend with RESTful APIs, middleware, and MongoDB integration.",
    links: [
      // { label: "Live Demo", url: "#" },
      { label: "GitHub", url: "https://github.com/Mohdsaad21-6/amazon" }
    ]
  },
  {
    title: "Recipe Finder",
    image: recipe,
    description:
      "React-based recipe browsing application utilizing the MealDB API. Features include popular, trending, category views, and search functionality with responsive sliders and cards.",
    links: [
      { label: "Live Demo", url: "https://recipe-nine-zeta.vercel.app/" },
      { label: "GitHub", url: "https://github.com/Mohdsaad21-6/Recipe-" }
    ]
  },
  {
    title: "Real-Time Location Tracker",
    image:location,
    description:
      "Developed a real-time location tracking web app using socket.io and Leaflet.js, enabling live geolocation updates and multi-user map visualization",
    links: [
      // { label: "Live Demo", url: "https://admissionanytime.vercel.app" },
      { label: "GitHub", url: "https://github.com/Mohdsaad21-6/Realtime_tracker" }
    ]
  },
  {
    title: "All Recent Projects",
    image:project ,
    description:
      "This section showcases all my recent projects, including the ones listed above. Each project highlights my skills in full-stack development, responsive design, and user experience.",
    links: [
      // { label: "Live Demo", url: "https://admissionanytime.vercel.app" },
      { label: "GitHub", url: "https://github.com/mohdsaad21-6" }
    ]
  }
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>

      <div className="space-y-20 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <motion.div
              key={index}
              initial={{ x: isReversed ? 100 : -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col md:flex-row ${
                isReversed ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 rounded-xl shadow-lg hover:shadow-xl transition"
              />

              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
