import React, { useState } from 'react';
import PageNavigation from '../components/PageNavigation';
import ProjectShowcase from '../components/ProjectShowcase';
import projects from '../assets/data/projects.json';
import BurgerNav from '../components/BurgerNav';
import { tagBadges } from '../assets/data/tagBadges';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags?.includes(selectedTag))
    : projects;

  const handleTagClick = (tag) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  return (
    <>
      <div className="md:w-[70%] w-[90%] max-w-4xl mx-auto pt-32 pb-20">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold heading-gradient text-4xl tracking-tight text-[var(--color-foreground)] mb-2 px-5"
        >
          Software Development Portfolio
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg leading-[2em] font-poppins text-[var(--color-muted)] px-5"
        >
          Check out my latest software development works
        </motion.p>

        {/* Tag Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap mt-5 gap-3 px-5"
        >
          {Object.keys(tagBadges).map((tag, index) => {
            const selected = selectedTag === tag;
            return (
              <img
                key={index}
                src={tagBadges[tag]}
                alt={tag}
                onClick={() => handleTagClick(tag)}
                className={`cursor-pointer transition-transform duration-150 ease-in-out
                  ${
                    selected
                      ? 'scale-110 ring-2 ring-blue-400 rounded-md'
                      : 'hover:scale-105'
                  }
                `}
              />
            );
          })}
        </motion.div>

        {/* Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ProjectShowcase projects={filteredProjects} />
        </motion.div>
      </div>

      <div className="hide-on-small">
        <PageNavigation
          previousPage="/about"
          nextPage="/contact"
          prevPageName="about"
          nextPageName="contact"
          className="block"
        />
      </div>
    </>
  );
};

export default ProjectsPage;
