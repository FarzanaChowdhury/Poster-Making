import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink exact to="/design1" activeClassName="active-link">
            Design1
          </NavLink>
        </li>
        <li>
          <NavLink to="/design2" activeClassName="active-link">
            Design2
          </NavLink>
        </li>
        <li>
          <NavLink to="/design3" activeClassName="active-link">
            Design3
          </NavLink>
        </li>
        <li>
          <NavLink to="/design4" activeClassName="active-link">
            Design4
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
