import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/shared/logo.svg';
import iconHamburger from '../assets/shared/iconHamburger.svg';
import iconClose from '../assets/shared/iconClose.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <img src={logo} alt="Space Tourism Logo" className="logo" />
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
        <img
          src={isMenuOpen ? iconClose : iconHamburger}
          alt={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="hamburger-icon"
        />
      </button>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span>01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) => `nav-text ${isActive ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;