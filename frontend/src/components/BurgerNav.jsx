import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import ThemeToggleButton from "./ThemeToggleButton"

const BurgerNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => setIsOpen(prev => !prev)

    return (
        <>
            {/* Top Glassy Bar with Burger Icon */}
            <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 bg-white/10 backdrop-blur-lg md:backdrop-blur-none md:border-none border-b border-white/20 z-[1101] md:bg-transparent">
            {/* Burger Icon */}
                <div className="cursor-pointer z-[1102] md:fixed md:top-12 md:right-20 ml-auto" onClick={toggleMenu}>
                    <div className={`w-12 h-1 bg-[var(--color-muted)] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''} dark:bg-[#666666]`} />
                    <div className={`w-12 h-1 bg-[var(--color-muted)] mt-2 transition-all duration-300 ${isOpen ? 'hidden mt-3 ' : ''} dark:bg-[#666666]`} />
                    <div className={`w-12 h-1 bg-[var(--color-muted)] mt-2 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 mt-3 ' : ''} dark:bg-[#666666]`} />
                </div>
            </div>


            {/* Overlay Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-neutral-800 flex opacity-98 flex-col justify-center items-center gap-8 z-1000 transition-transform duration-500 ${isOpen ? "translate-y-0" : "-translate-y-full"} dark:bg-neutral-900`}>
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

                <ThemeToggleButton />

            </div>
        </>
    )
}

export default BurgerNav
