import React from 'react';
import { BsHouse, BsBasket, BsPersonBadge, BsPatchCheck, BsCompass, BsPersonRolodex } from 'react-icons/bs';
import navbarStyles from './navbar.module.css';

const Navbar = () => {
    const navItems = [
        { name: 'Home', href: '/', icon: BsHouse },
        { name: 'Services', href: '/#services', icon: BsBasket },
        { name: 'About', href: '/#about', icon: BsPersonBadge },
        { name: 'Certificates', href: '/certificates', icon: BsPatchCheck },
        { name: 'Interests', href: '/#interests', icon: BsCompass },
        { name: 'Contact', href: '/#contact', icon: BsPersonRolodex }
    ];

    return (
        <nav className={navbarStyles.nav}>
            <ul className={navbarStyles.navList}>
                {navItems.map(({ name, href, icon: Icon }) => (
                    <li key={name} className={navbarStyles.navItem}>
                        <a href={href} className={navbarStyles.navLink}>
                            <Icon className={navbarStyles.navIcon} />{' '}
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
