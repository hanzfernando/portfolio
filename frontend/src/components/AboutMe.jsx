import profile from "../assets/public/hanz-img.png";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const calculateAge = (birthDate) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassedThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());
  if (!hasBirthdayPassedThisYear) age--;
  return age;
};

// Parent container animation + stagger
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.35, 
      staggerChildren: 0.1 
    }
  }
};

// Individual child animations
const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
};

const AboutMe = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center h-full md:w-[70%] w-[90%] mx-auto md:pt-8 pt-16 md:pb-14 mb-16"
    >
      {/* Profile Image */}
      <motion.div
        variants={childVariants}
        className="mb-7 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64"
      >
        <img
          src={profile}
          alt="Hanz Fernando"
          className="w-full h-full rounded-full object-cover shadow-md"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={childVariants}
        className="text-2xl tracking-tight sm:text-3xl md:text-4xl font-bold text-center leading-tight heading-gradient"
      >
        Hello, I'm Hanz Fernando
      </motion.h1>

      {/* Bio */}
      <motion.p
        variants={childVariants}
        className="text-center md:text-justify text-[0.9em] md:text-[1.05em] leading-[1.9em] font-poppins max-w-xl text-[var(--color-muted)] mt-4"
      >
        I'm a {calculateAge(new Date(2003, 6, 21))}-year-old junior full-stack
        developer with a strong passion for building modern web applications.
        Feel free to explore my{" "}
        <Link
          to="/projects"
          className="font-bold underline underline-offset-2 text-[var(--color-foreground)] hover:text-[var(--color-accent)]"
        >
          previous projects
        </Link>{" "}
        to get a sense of my work. You can reach me at{" "}
        <span className="font-bold text-[var(--color-foreground)]">
          fernandohanz23@gmail.com
        </span>
        .
      </motion.p>

      {/* Resume */}
      <motion.a
        variants={childVariants}
        href="https://drive.google.com/file/d/1IhpaPNk-HnLWzHqIB4tDdu_xguuFoG92/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-[var(--color-foreground)] text-white dark:text-neutral-900 font-bold py-2 px-6 rounded-lg hover:bg-neutral-900 dark:hover:bg-white transition-colors"
      >
        View Resume
      </motion.a>

      {/* Social Links */}
      <motion.ul
        variants={childVariants}
        className="flex gap-4 mt-8"
      >
        {[
          { href: "https://www.facebook.com/HanzFernando.23", icon: <FaFacebookF /> },
          { href: "https://www.instagram.com/hanz_hanz21/", icon: <FaInstagram /> },
          { href: "https://github.com/hanzfernando", icon: <FaGithub />, highlight: true },
          { href: "https://www.linkedin.com/in/hanz-fernando-1a0b5428b/", icon: <FaLinkedinIn />, highlight: true },
        ].map((item, i) => (
          <li key={i}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 rounded-full border transition-colors duration-300 ${
                item.highlight
                  ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  : "border-[var(--color-foreground)] text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
              }`}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default AboutMe;
