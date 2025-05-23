import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css' // Make sure this only includes your custom styles

const NavBar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const closeMenus = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <nav className="bg-primary text-fontLight px-6 py-4 flex items-center justify-between relative">
      <Link to="/" className="nav-brand" onClick={closeMenus}>
        Katelyn Mehner
      </Link>

      <button
        className="nav-button text-3xl md:hidden"
        onClick={() => {
          setMenuOpen(!menuOpen)
          setDropdownOpen(false)
        }}
        aria-label="Toggle navigation"
      >
        &#9776;
      </button>

      <div
        className={`md:flex absolute md:static top-16 right-0 w-full md:w-auto z-50 bg-primary text-fontLight ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <Link to="/about" className="block px-4 py-2 hover:text-accent" onClick={closeMenus}>
          About Me
        </Link>
        <Link to="/projects" className="block px-4 py-2 hover:text-accent" onClick={closeMenus}>
          Projects
        </Link>
        <Link to="/contact" className="block px-4 py-2 hover:text-accent" onClick={closeMenus}>
          Contact
        </Link>

        {/* Dropdown */}
        <div
          className="relative w-full md:w-auto"
          onMouseEnter={() => window.innerWidth >= 768 && setDropdownOpen(true)}
          onMouseLeave={() => window.innerWidth >= 768 && setDropdownOpen(false)}
        >
          <button
            className="nav-button block w-full md:w-auto text-left md:text-center"
            onClick={() => {
              if (window.innerWidth < 768) setDropdownOpen(!dropdownOpen)
            }}
          >
            More
          </button>

          {dropdownOpen && (
            <div className="nav-dropdown mt-2 w-full md:w-40">
              <Link to="/resume" className="block px-4 py-2 hover:bg-accent hover:text-primary" onClick={closeMenus}>
                Resume
              </Link>
              <Link to="/blog" className="block px-4 py-2 hover:bg-accent hover:text-primary" onClick={closeMenus}>
                Blog
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar2
