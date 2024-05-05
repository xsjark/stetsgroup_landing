import React, { useState } from "react";
import "./NavBarMenuItem.css";
import { Link } from "react-router-dom";

const NavBarMenuItem = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="navbar-menu-item-container"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <span className="menu-text">{title}</span>
            {isOpen && (
                <div className="dropdown-menu">
                    {items.map((item, index) => (
                        <div key={index}>
                            <Link to={item.route}>{item.name}</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavBarMenuItem;
