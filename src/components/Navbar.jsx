import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../planet.svg';
import './Navbar.css';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/mission',
      text: 'Mission',
    },
    {
      id: 3,
      path: '/profile',
      text: 'Profile',
    },
  ];
  return (
    <header>
      <nav className="nav-bar">
        <div className="logo-brand">
          <img src={logo} alt="planet logo" className="logo-image" />
          <h2 className="nav-brand"><a href="/">Space Travelers&apos; Hub</a></h2>
        </div>
        <ul className="nav-links">
          {links.map((link) => (
            <li className="nav-link" key={link.id}>
              <NavLink className={(navData) => (navData.isActive ? 'active' : 'none')} to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
