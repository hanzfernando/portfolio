import React, { useState } from 'react';
import PageNavigation from '../components/PageNavigation';
import ProjectShowcase from '../components/ProjectShowcase';
import projects from '../assets/data/projects.json';
import BurgerNav from '../components/BurgerNav';
import { tagBadges } from '../assets/data/tagBadges';
const ProjectsPage = () => {

  const [selectedTag, setSelectedTag] = useState(null);

  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags?.includes(selectedTag))
    : projects;


  const handleTagClick = (tag) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  return (
    <>
      <div className="md:w-[70%] w-[90%] max-w-4xl mx-auto pt-32 pb-20">
        <div className="mb-8 px-5">
          <h1 className="font-bold text-4xl tracking-tight text-[var(--color-foreground)]">
            Software Development Portfolio
          </h1>
          <p className="text-lg leading-[2em] font-poppins text-[var(--color-muted)]">
            Check out my latest software development works
          </p>
    
          <div className="flex flex-wrap mt-5 gap-3">
            {Object.keys(tagBadges).map((tag, index) => {
              const selected = selectedTag === tag;
              return (
                <img
                  key={index}
                  src={tagBadges[tag]}
                  alt={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`cursor-pointer transition-transform duration-150 ease-in-out
                    ${selected ? 'scale-110 ring-2 ring-blue-400 rounded-md' : 'hover:scale-105'}
                  `}
                />
              );
            })}
          </div>

        </div>

        <ProjectShowcase projects={filteredProjects} />
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
