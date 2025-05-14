import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'  // import official icons
import profile from '../assets/public/hanz-img.png' 
import { Link } from 'react-router-dom'
import PageNavigation from '../components/PageNavigation'
import BurgerNav from '../components/BurgerNav'

const AboutPage = () => {
    return (
        <>
            <BurgerNav />
            <div className="flex flex-col justify-center items-center h-full md:w-[70%] w-[90%] mx-auto px-4">
                <div className="mb-7 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                    <img 
                        src={profile} 
                        alt="Hanz Fernando" 
                        className="w-full h-full rounded-full object-cover" 
                    />
                </div>

                <h1 className="text-[1.8em] leading-[2em] text-red text-center font-bold text-[#c5c5c5]">
                    Hello, I'm Hanz Fernando
                </h1>

                <p className="text-center text-justify text-[1.05em] leading-[2em] text-[#949494] font-poppins max-w-xl">
                    I'm a 20-year-old college student with a passion for web development. Feel free to explore my{' '}
                    <Link to={'/projects'} className="font-bold no-underline text-[#c5c5c5]">
                        previous projects
                    </Link>{' '}
                    to get a sense of my work. I am available from UTC-5 to UTC-10.{' '}
                    <span className="font-bold no-underline text-[#c5c5c5]">
                        fernandohanz23@gmail.com
                    </span>
                </p>

                {/* Social Links */}
                <ul className="flex gap-4 mt-8">
                    <li>
                        <a 
                            href="https://www.facebook.com/HanzFernando.23" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <FaFacebookF className="w-8 h-8 text-blue-600" />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.instagram.com/hanz_hanz21/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <FaInstagram className="w-8 h-8 text-pink-500" />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/hanzfernando" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <FaGithub className="w-8 h-8 text-white" />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.linkedin.com/in/hanz-fernando-1a0b5428b/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <FaLinkedinIn className="w-8 h-8 text-blue-500" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="hide-on-small">
                <PageNavigation nextPage={'/projects'} nextPageName={'projects'} className="block [@media(min-width:1400px)]:hidden"/>
            </div>
        </>
    )
}

export default AboutPage
