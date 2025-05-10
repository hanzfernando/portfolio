import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const BurgerNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => setIsOpen(prev => !prev)

    return (
        <>
            {/* Burger Icon */}
            <div className="fixed top-12 right-20 z-1100 cursor-pointer" onClick={toggleMenu}>
                <div className={`w-8 h-1 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''} dark:bg-gray-300`} />
                <div className={`w-8 h-1 bg-white mt-2 transition-all duration-300 ${isOpen ? 'hidden mt-3 ' : ''} dark:bg-gray-300`} />
                <div className={`w-8 h-1 bg-white mt-2 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 mt-3 ' : ''} dark:bg-gray-300`} />
            </div>

            {/* Overlay Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-neutral-800 flex flex-col justify-center items-center gap-8 z-1000 transition-transform duration-500 ${isOpen ? "translate-y-0" : "-translate-y-full"} dark:bg-neutral-900`}>
                <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className={`w-3/5 min-w-[300px] text-center py-8 text-3xl font-bold uppercase transition-colors duration-300 ${
                        location.pathname === "/about"
                            ? "text-gray-300 bg-neutral-700 dark:bg-neutral-600"
                            : "text-gray-500 hover:bg-neutral-700 hover:text-gray-300 dark:text-gray-400 dark:hover:bg-neutral-800"
                    }`}
                >
                    About
                </Link>
                <Link
                    to="/projects"
                    onClick={() => setIsOpen(false)}
                    className={`w-3/5 min-w-[300px] text-center py-8 text-3xl font-bold uppercase transition-colors duration-300 ${
                        location.pathname === "/projects"
                            ? "text-gray-300 bg-neutral-700 dark:bg-neutral-600"
                            : "text-gray-500 hover:bg-neutral-700 hover:text-gray-300 dark:text-gray-400 dark:hover:bg-neutral-800"
                    }`}
                >
                    Projects
                </Link>
                <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className={`w-3/5 min-w-[300px] text-center py-8 text-3xl font-bold uppercase transition-colors duration-300 ${
                        location.pathname === "/contact"
                            ? "text-gray-300 bg-neutral-700 dark:bg-neutral-600"
                            : "text-gray-500 hover:bg-neutral-700 hover:text-gray-300 dark:text-gray-400 dark:hover:bg-neutral-800"
                    }`}
                >
                    Contact
                </Link>
            </div>
        </>
    )
}

export default BurgerNav
