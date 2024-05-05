import React, { useState } from "react";
import "./NavBarMenuItem.css";
import { Link, NavLink } from "react-router-dom";

const NavBarMenuItem = ({ title, items, route }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="navbar-menu-item-container"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {route ? (
                 <NavLink  className={({ isActive }) => (isActive ? 'active' : '')} to={route}>{title}</NavLink>
            ) : (
                <span>{title}</span>
            )}
            {isOpen && (
                <div className="dropdown-menu">
                    {items.map((item, index) => (
                        <div key={index}>
                            <NavLink  className={({ isActive }) => (isActive ? 'active' : '')}  to={item.route}>{item.name}</NavLink>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavBarMenuItem;
