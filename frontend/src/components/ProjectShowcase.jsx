import React, { useState } from "react";
import placeholderImg from "../assets/public/placeholder-img.jpg";

const ProjectShowcase = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleClose = () => setSelectedProject(null);

  const Card = ({ project, onClick, isActive }) => (
    <div
      onClick={onClick}
      className={`w-full shrink-0 group relative overflow-hidden border transform transition duration-300 md:mr-0 mr-4 ${
        isActive
            ? "bg-gray-700 border-gray-600 scale-[1.05] shadow-[4px_4px_12px_rgba(120,120,120,0.2)]"
            : "bg-[#1E1E1E] border-[#2d2d2d] hover:bg-[#1E1E1E] hover:shadow-[4px_4px_12px_rgba(120,120,120,0.25)] hover:scale-105"
        } cursor-pointer`}

    >
        <div className="bg-[#222] uppercase text-left px-2 py-2 text-xs font-semibold text-[#999] z-20 relative truncate">
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

        <div className="absolute bottom-3 right-3 bg-[#313131] px-2 py-1 rounded-lg z-10 max-w-[85%] flex flex-wrap gap-1 overflow-hidden">
            {project.tags?.map((tag, i) => (
                <span key={i} className="text-[#bbb] text-[10px] px-1 py-[1px] bg-[#444] rounded">
                {tag}
                </span>
            ))}
            {project.tags?.length > 5 && (
                <span className="text-[#aaa] text-[10px] px-1 py-[1px] bg-[#333] rounded">
                +{project.tags.length - 5} more
                </span>
            )}
        </div>

    </div>
  );

  return (
    <>
      {selectedProject ? (
        <div className="flex flex-col md:flex-row border-t border-gray-700 min-h-[70vh]">
          {/* Project List */}
          <div className="w-full md:w-2/5 border-b md:border-b-0 md:border-r border-gray-700 p-4">
            <div
              className="flex md:flex-col md:overflow-x-hidden gap-4 overflow-y-auto pb-2 md:pb-0"
              style={{ WebkitOverflowScrolling: "touch",
                maxHeight: "calc(100vh - 150px)",
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
              className="absolute top-2 right-0 text-4xl text-gray-400 hover:text-white cursor-pointer"
              onClick={handleClose}
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">
              {selectedProject.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-3">
              {selectedProject.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#313131] text-[#bbb] text-xs px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-300 mb-4">{selectedProject.description}</p>

            {selectedProject.learningPoints?.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Learning Highlights
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
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
                className="text-blue-400 hover:underline"
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
