import React from 'react';
import { BsHouse, BsBasket, BsPersonBadge, BsPatchCheck, BsCompass, BsPersonRolodex, BsCodeSlash } from 'react-icons/bs';

const Navbar = () => {
    const navItems = [
        { name: 'Home', href: '/', icon: BsHouse },
        { name: 'Services', href: '/#services', icon: BsBasket },
        { name: 'About', href: '/#about', icon: BsPersonBadge },
        { name: 'Certificates', href: '/certificates', icon: BsPatchCheck },
        { name: 'Interests', href: '/#interests', icon: BsCompass },
        { name: 'DevJourney', href: '/devjourney', icon: BsCodeSlash },
        { name: 'Contact', href: '/#contact', icon: BsPersonRolodex }
    ];

    return (
        <nav>
            <ul>
                {navItems.map(({ name, href, icon: Icon }) => (
                    <li key={name}>
                        <a href={href}>
                            <Icon />{' '}
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;