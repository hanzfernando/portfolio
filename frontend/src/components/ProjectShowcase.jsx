import React, { useState } from "react";
import placeholderImg from "../assets/public/placeholder-img.jpg"; // adjust the path based on your structure

const ProjectShowcase = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setSelectedProject(null);

  const Card = ({ project, onClick, isActive }) => (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden shadow-md border transition ${
        isActive
          ? "bg-gray-700 border-gray-600"
          : "bg-[#1f1f1f] border-[#2d2d2d] hover:bg-[#2a2a2a] hover:shadow-lg"
      } cursor-pointer`}
    >
      {/* Title bar - Make sure it's always on top */}
      <div className="bg-gray-100 uppercase text-center py-2 text-xs font-semibold text-gray-800 uppercase z-20 relative">
        {project.title}
      </div>

      {/* Image or placeholder */}
      <div className="relative w-full h-0 pb-[56.25%]">
        <img
          src={project.thumbnail || placeholderImg}
          alt={project.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Hover overlay with transparent glass effect */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent backdrop-blur-lg text-white text-xs p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 flex items-center justify-center text-center">
        {project.shortDescription}
      </div>

      {/* Tags at bottom-right with solid background */}
      <div className="absolute bottom-3 right-3 bg-[#313131] p-2 rounded-lg z-10">
        {project.tags?.map((tag, i) => (
          <span key={i} className="text-[#bbb] text-xs px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {selectedProject ? (
        <div className="flex border-t border-gray-700 min-h-[70vh]">
          {/* Left panel - project list */}
          <div className="w-1/3 border-r border-gray-700 overflow-y-auto p-4 space-y-4">
            {projects.map((project) => (
              <Card
                key={project.id + project.title}
                project={project}
                isActive={selectedProject.id === project.id}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Right panel - project details */}
          <div className="w-2/3 p-6 relative">
            <button
              className="absolute top-3 right-3 text-sm text-gray-400 hover:text-white"
              onClick={handleClose}
            >
              ✕ Close
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
        // Grid view
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

