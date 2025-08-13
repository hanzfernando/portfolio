import React, { useState } from "react";
import placeholderImg from "../assets/public/placeholder-img.jpg";
import TagBadge from "./TagBadge";
import { tagBadges } from "../assets/data/tagBadges";

const ProjectShowcase = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleClose = () => setSelectedProject(null);

  const Card = ({ project, onClick, isActive }) => (
    <div
      onClick={onClick}
      className={`shrink-0 group relative overflow-hidden border transform transition duration-300 md:mr-0 mr-2 
        ${selectedProject ? "w-[calc(100%-2rem)]" : "w-full"}
        ${
          isActive
            ? "bg-[--color-muted] border-[--color-muted] scale-[1.05] shadow-[4px_4px_12px_rgba(120,120,120,0.2)]"
            : "bg-[--color-background] border-[--color-muted] hover:bg-[--color-accent] hover:shadow-[4px_4px_12px_rgba(120,120,120,0.25)] hover:scale-105"
        } cursor-pointer`}
    >

      <div className="bg-[var(--color-background)] text-[var(--color-foreground)] uppercase text-left px-2 py-2 text-xs font-semibold text-[var(--color-foreground)] z-20 relative truncate">
          {project.title}
      </div>


      <div className="relative w-full h-0 pb-[56.25%]">
        <img
          src={project.thumbnail || placeholderImg}
          alt={project.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-lg text-white text-xs p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 flex items-center justify-center text-center">
        {project.shortDescription}
      </div>

      <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 rounded-lg z-10 max-w-[85%] flex flex-wrap gap-1 overflow-hidden">
        {project.tags?.slice(0, 3).map((tag, i) => (
          <TagBadge key={i} text={tag} />
        ))}
        {project.tags?.length > 3 && (
          <TagBadge
            text={`+${project.tags.length - 3} more`}
            variant="more"
          />
        )}
      </div>



    </div>
  );

  return (
    <>
      {selectedProject ? (
        <div className="flex flex-col md:flex-row border-t border-border min-h-[70vh]">
          {/* Project List */}
          <div className="w-full md:w-2/5 border-b md:border-b-0 md:border-r border-border p-4">
              <div
                className="flex flex-row md:flex-col overflow-x-auto md:overflow-y-auto gap-4 p-2 md:pb-0 scroll-smooth"
                style={{
                  WebkitOverflowScrolling: "touch",
                  maxHeight: "calc(100vh - 150px)",
                  scrollSnapType: "x mandatory",
                }}
              >
                {projects.map((project) => (
                  <Card
                    key={project.id + project.title}
                    project={project}
                    isActive={selectedProject.id === project.id}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
          </div>


          {/* Project Detail */}
          <div className="w-full md:w-3/5 p-6 relative">
            <button
              className="absolute top-2 right-0 text-4xl text-muted hover:text-foreground cursor-pointer"
              onClick={handleClose}
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-foreground mb-2">
              {selectedProject.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-3">
              {selectedProject.tags?.map((tag, i) => {
                const badgeUrl = tagBadges[tag];
                return (
                  <TagBadge
                    key={i}
                    text={badgeUrl || tag}
                    variant={badgeUrl ? "shield" : "detail"}
                  />
                );
              })}
            </div>


            <p className="text-muted mb-4">{selectedProject.description}</p>

            {selectedProject.learningPoints?.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Learning Highlights
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted">
                  {selectedProject.learningPoints.map((point, i) => (
                    <li key={i} className="leading-snug">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedProject.link && (
              <a
                href={selectedProject.link}
                className="text-brand hover:text-brandHover hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            )}
          </div>
        </div>
      ) : (
        // Default grid view
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5">
          {projects.map((project) => (
            <Card
              key={project.id + project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectShowcase;
