import React, { useState, useEffect } from 'react'
import menuOpen from '../../assets/menu_open.svg'
import menuClose from '../../assets/menu_close.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.offsetTop - navbarHeight

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    closeMenu()
  }

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer group" onClick={() => scrollToSection('home')}>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-purple bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            Phương
          </h1>
          <span className="text-sm text-gray-400 tracking-wider group-hover:text-white transition-colors">FullStack Developer</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className="text-lg font-medium text-gray-300 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(218,124,37,0.4)]"
            onClick={() => scrollToSection('contact')}
          >
            Connect with me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50 focus:outline-none" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? menuClose : menuOpen}
            alt={isMenuOpen ? "Close Menu" : "Open Menu"}
            className="w-8 h-8 transition-transform duration-300 transform hover:scale-110"
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-dark-900/95 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className="text-3xl font-bold text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-purple text-white text-xl font-bold shadow-lg hover:shadow-primary/50 transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Connect with me
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
