import React, { useState } from 'react';
import PageNavigation from '../components/PageNavigation';
import ProjectShowcase from '../components/ProjectShowcase';
import projects from '../assets/data/projects.json';
import BurgerNav from '../components/BurgerNav';

const ProjectsPage = () => {
  // State for the selected tag
  const [selectedTag, setSelectedTag] = useState(null);

  // Extract unique tags from the projects data
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

  // Filter projects based on the selected tag
  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags?.includes(selectedTag))
    : projects;

  // Handle tag click to toggle selection
  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      // If the clicked tag is already selected, deselect it (show all projects)
      setSelectedTag(null);
    } else {
      // Otherwise, select the clicked tag
      setSelectedTag(tag);
    }
  };

  return (
    <>
        <BurgerNav />
        <div className="md:w-[70%] w-[90%] max-w-4xl mx-auto pt-32 pb-20">
            <div className="mb-8 px-5">
            <h1 className="font-bold text-4xl tracking-tight text-[#c5c5c5]">
                Software Development Portfolio
            </h1>
            <p className="text-lg text-[#949494] leading-[2em] font-poppins">
                Check out my latest software development works
            </p>
            <div className="flex flex-wrap mt-5">
                {allTags.map((tag, index) => (
                <div
                    key={index}
                    onClick={() => handleTagClick(tag)}
                    className={`cursor-pointer bg-[#313131] text-[#999] border-b-2 border-[#222] rounded-[5px] text-[.8em] leading-[1em] shadow-[1px_1px_0_rgba(0,0,0,.25)] px-[8px] py-[10px] mr-2 mb-2 uppercase font-bold ${
                        selectedTag === tag ? 'bg-[#444] text-white' : ''
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
