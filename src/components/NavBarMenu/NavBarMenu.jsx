import { useState } from 'react';
import './NavBarMenu.css';

const NavBarMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <ul className="menu">
                <li className="menu-item"><a href="#about-us">About Us</a></li>
                <li className="menu-item"><a href="#warehouse">Warehouse</a></li>
                <li className="menu-item"><a href="#trucking">Trucking</a></li>
                <li className="menu-item"><a href="#custom-brokerage">Custom Brokerage</a></li>
                <li className="menu-item"><a href="#contact-us">Contact Us</a></li>
            </ul>
            <div className="navbar-burger" onClick={toggleMenu}>
                <img src='list.svg' width="24" height="24" />
            </div>
            <div className={`mobile-menu ${isOpen ? 'isOpen' : 'isClosed'}`}>
                <ul>
                    <li className="menu-item"><a href="#about-us">About Us</a></li>
                    <li className="menu-item"><a href="#warehouse">Warehouse</a></li>
                    <li className="menu-item"><a href="#trucking">Trucking</a></li>
                    <li className="menu-item"><a href="#custom-brokerage">Custom Brokerage</a></li>
                    <li className="menu-item"><a href="#contact-us">Contact Us</a></li>
                </ul>
            </div>
        </>
    );
};

export default NavBarMenu;
