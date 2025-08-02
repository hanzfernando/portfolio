import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profile from '../assets/public/hanz-img.png';
import { Link } from 'react-router-dom';
import PageNavigation from '../components/PageNavigation';
import BurgerNav from '../components/BurgerNav';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center h-full md:w-[70%] w-[90%] mx-auto md:pt-4 pt-16 md:pb-4"
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

        {/* Fancy Fade-in Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[1.6em] md:text-[1.8em] leading-[2em] text-center font-bold text-[var(--color-foreground)]"
        >
          Hello, I'm Hanz Fernando
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-justify text-[0.9em] md:text-[1.05em] leading-[2em] font-poppins max-w-xl text-[var(--color-muted)] mt-2"
        >
          I'm a 20-year-old college student with a passion for web development. Feel free to explore my{' '}
          <Link to="/projects" className="font-bold underline underline-offset-2 text-[var(--color-foreground)] hover:text-[var(--color-accent)]">
            previous projects
          </Link>{' '}
          to get a sense of my work. You can contact me via
          <span className="font-bold text-[var(--color-foreground)]">
            fernandohanz23@gmail.com
          </span>
        </motion.p>

        {/* Resume Button */}
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

        {/* Social Icons */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex gap-4 mt-8"
        >
          <li>
            <a
              href="https://www.facebook.com/HanzFernando.23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaFacebookF className="w-8 h-8 text-blue-600" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/hanz_hanz21/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram className="w-8 h-8 text-pink-500" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hanzfernando"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub className="w-8 h-8 text-[var(--color-foreground)]" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hanz-fernando-1a0b5428b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedinIn className="w-8 h-8 text-blue-500" />
            </a>
          </li>
        </motion.ul>
      </motion.div>

      <div className="hide-on-small">
        <PageNavigation
          nextPage="/projects"
          nextPageName="projects"     
        />
      </div>

    </>
  );
};

export default AboutPage;
