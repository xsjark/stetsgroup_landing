import { useState } from 'react';
import './NavBarMenu.css';
import { Link } from 'react-router-dom';

const NavBarMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const MenuContent = () => (
        <>
            <Link to={'about-us'} className="menu-item">About Us</Link>
            <Link to={'warehouse'} className="menu-item">Warehouse</Link>
            <Link to={'trucking'} className="menu-item">Trucking</Link>
            <Link to={'custom-brokerage'} className="menu-item">Custom Brokerage</Link>
            <Link to={'contact-us'} className="menu-item">Contact Us</Link>
        </>
    )

    return (
        <>
            <ul className="menu">
                <MenuContent />
            </ul>
            <div className="navbar-burger" onClick={toggleMenu}>
                <img src='list.svg' width="24" height="24" />
            </div>
            <div className={`mobile-menu ${isOpen ? 'isOpen' : 'isClosed'}`}>
                <ul>
                    <MenuContent />
                </ul>
            </div>
        </>
    );
};

export default NavBarMenu;
