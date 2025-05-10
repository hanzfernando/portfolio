import React, { useState } from "react"

const ProjectShowcase = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleClose = () => setSelectedProject(null)

  return (
    <>
      {selectedProject ? (
        <div className="flex border-t border-gray-700">
          {/* Left panel - vertical list */}
          <div className="w-1/3 border-r border-gray-700 overflow-y-auto p-4">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`cursor-pointer p-4 rounded-lg mb-3 transition text-sm ${
                  selectedProject.id === project.id
                    ? "bg-gray-700 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <h3 className="font-semibold">{project.title}</h3>
                <p>{project.shortDescription}</p>
              </div>
            ))}
          </div>

          {/* Right panel - details */}
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
        // Grid View
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-gray-800 text-gray-200 p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.shortDescription}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ProjectShowcase
