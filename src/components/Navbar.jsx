
import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-white">
            Mohd.Saad
          </h1>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-xl">
            {open ? "✕" : "☰"}
          </button>
        </div>

        <ul
          className={`${
            open ? "block" : "hidden"
          } md:flex gap-6 items-center transition-all duration-300`}
        >
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                offset={-60} // Adjust if you have a fixed navbar
                activeClass="text-indigo-600 font-semibold border-b-2 border-indigo-600"
                className="cursor-pointer text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition px-2 py-1"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
