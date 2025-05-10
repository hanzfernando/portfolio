import React from 'react'
import PageNavigation from '../components/PageNavigation';

const ProjectsPage = () => {
    const tags = ["HTML", "CSS", "JavaScript", "C#", "MySQL", "ReactJS"];
    return (
        <div className="w-full min-h-screen bg-[#2a2a2a] text-[#c5c5c5] box-border pt-20">
            <div className="w-[60%] mx-auto pt-10"> {/* Adjust padding here */}
                <div className="mb-8 px-5">
                    <h1 className="font-bold text-4xl tracking-tight">
                        Software Development Portfolio
                    </h1>
                    <p className="text-lg text-[1.05em] leading-[2em] text-[#949494] font-poppins">
                        Check out my latest software development works
                    </p>
                    <div className="flex flex-wrap mt-4">
                        {tags.map((tag, index) => (
                            <div key={index} className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 mr-2 mb-2 text-sm">
                                <p>{tag}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <PageNavigation previousPage={'/about'} nextPage={'/contact'} />
        </div>
    );
}
export default ProjectsPage;
