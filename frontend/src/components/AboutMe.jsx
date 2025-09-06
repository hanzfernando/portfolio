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

  if (!hasBirthdayPassedThisYear) {
    age--;
  }
  return age;
};

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center h-full md:w-[70%] w-[90%] mx-auto md:pt-4 pt-16 md:pb-4 mb-32"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-7 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
      >
        <img
          src={profile}
          alt="Hanz Fernando"
          className="w-full h-full rounded-full object-cover shadow-md"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-[1.6em] md:text-[1.8em] leading-[2em] font-bold text-[var(--color-foreground)]"
      >
        Hello, I'm Hanz Fernando
      </motion.h1>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-justify text-[0.9em] md:text-[1.05em] leading-[2em] font-poppins max-w-xl text-[var(--color-muted)] mt-2"
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        href="https://drive.google.com/file/d/1IhpaPNk-HnLWzHqIB4tDdu_xguuFoG92/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-[var(--color-foreground)] text-white dark:text-neutral-900 font-bold py-2 px-6 rounded-lg hover:bg-neutral-900 dark:hover:bg-white transition-colors"
      >
        View Resume
      </motion.a>

      {/* Social Links */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="flex gap-4 mt-8"
      >
        {[
          { href: "https://www.facebook.com/HanzFernando.23", icon: <FaFacebookF /> },
          { href: "https://www.instagram.com/hanz_hanz21/", icon: <FaInstagram /> },
          { href: "https://github.com/hanzfernando", icon: <FaGithub /> },
          { href: "https://www.linkedin.com/in/hanz-fernando-1a0b5428b/", icon: <FaLinkedinIn /> },
        ].map((item, i) => (
          <li key={i}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-foreground)] text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors duration-300"
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
