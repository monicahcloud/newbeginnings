import { useState } from 'react'
import { links } from '../data' // Ensure this file exports an array of link objects

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="sticky top-0 z-20 w-full shadow-sm bg-fushia-950">
      <nav className="relative flex items-center justify-between w-full bg-fushia-950 px-5 py-4">
        {/* Desktop Links */}
        <div className="hidden lg:flex justify-center w-full gap-x-10 text-amber-400 uppercase font-semibold">
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className="capitalize bg-fushia-950 text-lg tracking-wide hover:text-white transition duration-300"
              >
                {text}
              </a>
            )
          })}
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="lg:hidden ">
          <button
            onClick={toggleNavbar}
            className="text-5xl  text-white focus:outline-none"
          >
            {isOpen ? (
              <span className="text-4xl">&times;</span> // Close icon
            ) : (
              <span className="text-4xl">&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>

        {/* Mobile Menu with Slide-in Effect */}
        <div
          className={`fixed top-0 left-0 h-screen w-64 bg-white flex flex-col items-start gap-5 py-4 px-5 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close Button Inside Menu */}
          <button
            onClick={toggleNavbar}
            className="self-end text-3xl text-purple-950 mb-4"
          >
            &times;
          </button>
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg text-violet-500 tracking-wide hover:text-violet-800 transition duration-300"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {text}
              </a>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default NavBar
