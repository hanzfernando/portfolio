import React from 'react'
import PageNavigation from '../components/PageNavigation'
import ProjectShowcase from '../components/ProjectShowcase'
import projects from '../assets/data/projects.json'
import BurgerNav from '../components/BurgerNav'

const tags = ["HTML", "CSS", "JavaScript", "C#", "MySQL", "ReactJS"]

const ProjectsPage = () => {
  return (
    <>
        <BurgerNav />
        <div className="w-[90%] max-w-6xl mx-auto pt-32">
            <div className="mb-8 px-5">
            <h1 className="font-bold text-4xl tracking-tight text-[#c5c5c5]">
                Software Development Portfolio
            </h1>
            <p className="text-lg text-[#949494] leading-[2em] font-poppins">
                Check out my latest software development works
            </p>
            <div className="flex flex-wrap mt-5">
                {tags.map((tag, index) => (
                <div
                    key={index}
                    className="bg-[#313131] text-[#999] border-b-2 border-[#222] rounded-[5px] text-[.8em] leading-[1em] shadow-[1px_1px_0_rgba(0,0,0,.25)] px-[8px] py-[10px] mr-2 mb-2 uppercase font-bold"
                >
                    {tag}
                </div>
                ))}
            </div>
            </div>

            <ProjectShowcase projects={projects} />
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
  )
}

export default ProjectsPage
