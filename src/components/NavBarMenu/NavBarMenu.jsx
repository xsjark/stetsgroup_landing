import { useState } from 'react';
import './NavBarMenu.css';
import { Link } from 'react-router-dom';
import NavBarMenuItem from './NavBarMenuItem/NavBarMenuItem';
import NavBarMenuItemList from './NavBarMenuItemList/NavBarMenuItemList';

const NavBarMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuJSON = {
        'About us': [
            {
                name: 'item1',
                route: 'route1'
            },
            {
                name: 'item2',
                route: 'route2'
            }
        ],
        'Warehouse': [
            {
                name: 'item1',
                route: 'route1'
            },
            {
                name: 'item2',
                route: 'route2'
            }
        ],
        'Trucking': [
            {
                name: 'item1',
                route: 'route1'
            },
            {
                name: 'item2',
                route: 'route2'
            }
        ],
        'Custom Brokerage': [
            {
                name: 'item1',
                route: 'route1'
            },
            {
                name: 'item2',
                route: 'route2'
            }
        ],
        'Contact Us': [
            {
                name: 'item1',
                route: 'route1'
            },
            {
                name: 'item2',
                route: 'route2'
            }
        ]
    }
    const testMenuJSON = {
        'About us': {
            'route': 'parentroute',
            'items': [
                {
                    name: 'item1',
                    route: 'route1'
                },
                {
                    name: 'item2',
                    route: 'route2'
                }
            ]
        },
        'Warehouse': {
            'items': [
                {
                    name: 'item1',
                    route: 'route1'
                },
                {
                    name: 'item2',
                    route: 'route2'
                }
            ]
        },
        'Trucking': {
            'items': [
                {
                    name: 'item1',
                    route: 'route1'
                },
                {
                    name: 'item2',
                    route: 'route2'
                }
            ]
        },
        'Custom Brokerage': {
            'items': [
                {
                    name: 'item1',
                    route: 'route1'
                },
                {
                    name: 'item2',
                    route: 'route2'
                }
            ]
        },
        'Contact Us': {
            'items': [
                {
                    name: 'item1',
                    route: 'route1'
                },
                {
                    name: 'item2',
                    route: 'route2'
                }
            ]
        }
    };
    
    

    return (
        <>
            <ul className="menu">
                <NavBarMenuItemList itemsJSON={testMenuJSON} />
            </ul>
            <div className="navbar-burger" onClick={toggleMenu}>
                <img src='list.svg' width="24" height="24" />
            </div>
            <div className={`mobile-menu ${isOpen ? 'isOpen' : 'isClosed'}`}>
                <ul>
                    <Link to={'about-us'} className="menu-item">About Us</Link>
                    <Link to={'warehouse'} className="menu-item">Warehouse</Link>
                    <Link to={'trucking'} className="menu-item">Trucking</Link>
                    <Link to={'custom-brokerage'} className="menu-item">Custom Brokerage</Link>
                    <Link to={'contact-us'} className="menu-item">Contact Us</Link>
                </ul>
            </div>
        </>
    );
};

export default NavBarMenu;
