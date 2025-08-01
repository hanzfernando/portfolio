import React, { useState } from 'react';
import PageNavigation from '../components/PageNavigation';
import ProjectShowcase from '../components/ProjectShowcase';
import projects from '../assets/data/projects.json';
import BurgerNav from '../components/BurgerNav';

const ProjectsPage = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = projects.reduce((acc, project) => {
    if (project.tags) {
      project.tags.forEach(tag => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
    }
    return acc;
  }, []).sort();

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

          <div className="flex flex-wrap mt-5">
            {allTags.map((tag, index) => (
              <div
                key={index}
                onClick={() => handleTagClick(tag)}
                className={`cursor-pointer
                  bg-gray-200 text-gray-600 
                  border-b-2 border-gray-300 
                  rounded-md text-[0.75rem] leading-[1em]
                  px-3 py-[10px] mr-2 mb-2 uppercase font-bold 
                  shadow-[1px_1px_0_rgba(0,0,0,0.1)] 
                  transition-all duration-150 ease-in-out
                  hover:bg-gray-300 hover:text-gray-800

                  dark:bg-[#2b2b2b] dark:text-[var(--color-muted)] 
                  dark:border-[#1a1a1a] 
                  dark:shadow-[1px_1px_0_rgba(0,0,0,0.3)] 
                  dark:hover:bg-[#3a3a3a] dark:hover:text-[var(--color-accent)]

                  ${
                    selectedTag === tag
                      ? 'bg-gray-400 text-gray-900 border-gray-500 dark:bg-[#444] dark:text-white dark:border-[#333]'
                      : ''
                  }`}
              >
                {tag}
              </div>
            ))}
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
