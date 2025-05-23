import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css' // Ensure the file name matches exactly

const NavBar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Handle closing menus
  const closeMenus = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    // NAVBAR 
    <nav className="px-6 py-4 bg-primary text-fontLight flex items-center justify-between relative">

      {/* Home Page - Main Brand */}
      <Link to="/" className="text-5xl font-bold no-underline color-fontLight" onClick={closeMenus}>
        Katelyn Mehner
      </Link>

      {/* Mobile Device Toggle */}
      <button
        className="text-3xl md:hidden"
        onClick={() => {
          setMenuOpen(!menuOpen)
          setDropdownOpen(false)
        }}
        aria-label="Toggle navigation"
      >
        &#9776;
      </button>

      {/* Menu Items */}
      <div
  className={`md:flex md:items-center absolute md:static top-16 right-0 w-full md:w-auto z-50 ${
    menuOpen ? 'block' : 'hidden'
  }`}
>
    {/* Links */}
      <div>
        
        <Link to="/about" className="block px-4 mx-4 py-2 hover:text-accent" onClick={closeMenus}>
          About Me
        </Link>
        <Link to="/projects" className="block px-4 mx-4 py-2 hover:text-accent" onClick={closeMenus}>
          Projects
        </Link>
        <Link to="/contact" className="block pgx-4 mx-4 py-2 hover:text-accent" onClick={closeMenus}>
          Contact
        </Link>

        {/* Responsive dropdown */}
        <div
          className="relative w-full md:w-auto"
          onMouseEnter={() => window.innerWidth >= 768 && setDropdownOpen(true)}
          onMouseLeave={() => window.innerWidth >= 768 && setDropdownOpen(false)}
        >
          <button
            className="block px-4 mx-4 py-2 hover:text-accent w-full text-left md:text-center"
            onClick={() => {
              if (window.innerWidth < 768) setDropdownOpen(!dropdownOpen)
            }}
          >
            More
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 md:right-0 md:left-auto mt-2 w-full md:w-40 bg-black text-white rounded shadow-lg z-50">
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
      </div>
    </nav>
  )
}

export default NavBar2
