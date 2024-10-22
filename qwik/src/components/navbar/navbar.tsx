import { component$ } from '@builder.io/qwik';
import styles from './navbar.module.css';

export default component$(() => {
    const navItems = {
        Home: '#home',
        About: '#about',
        Certificates: '/certificates',
        Services: '#services',
        Contact: '#contact'
    };

    return (
        <nav class={styles.nav}>
            <ul class={styles.navList}>
                {Object.entries(navItems).map(([name, href]) => (
                    <li key={name} class={styles.navItem}>
                        <a href={href} class={styles.navLink}>{name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
});
