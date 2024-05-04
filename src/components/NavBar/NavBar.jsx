import React, { useState } from 'react';
import './NavBar.css'; // Create this CSS file for styling
import NavBarMenu from '../NavBarMenu/NavBarMenu';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="vite.svg" alt="Logo" width="24" height="24" />
      </div>
      <NavBarMenu />
    </nav>
  );
};

export default NavBar;
