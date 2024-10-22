import { component$, useStylesScoped$ } from '@builder.io/qwik';
import navbarStyles from './navbar.css?inline';

export default component$(() => {
    const navItems = {
        Home: '#home',
        About: '#about',
        Certificates: '/certificates',
        Services: '#services',
        Contact: '#contact'
    };

    useStylesScoped$(navbarStyles);

    return (
        <nav>
            <ul>
                {Object.entries(navItems).map(([name, href]) => (
                    <li key={name}>
                        <a href={href}>{name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
});