import { useState } from 'react'
import { links } from '../data'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative z-10 w-full bg-violet-950 shadow-sm">
      <nav className="relative flex items-center justify-between w-full ">
        <div className="absolute inset-0 z-0 block w-full h-full max-w-screen-x px-5 py-5 mx-auto text-white lg:px-2 lg:shadow-none">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <h1 className=" text-2xl font-bold tracking-wider text-violet-600">
              Sandra<span className="text-cyan-800">Williams</span>{' '}
            </h1>
          </div> */}

          {/* Links Container (centered on larger screens) */}
          <div className="hidden md:flex justify-center w-full gap-x-10 text-violet-500 uppercase font-semibold px-5 py-1">
            {links.map((link) => {
              const { id, href, text } = link
              return (
                <a
                  key={id}
                  href={href}
                  className="capitalize text-2xl tracking-wider hover:text-white duration-300"
                >
                  {text}
                </a>
              )
            })}
          </div>

          {/* Hamburger Button (on small screens) */}
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-2xl text-white">
              {isOpen ? (
                <span className="text-4xl">&times;</span> // Close icon
              ) : (
                <span className="text-4xl">&#9776;</span> // Hamburger icon
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-5 py-4 transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-2xl text-violet-500 tracking-wider hover:text-violet-800 duration-300"
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
