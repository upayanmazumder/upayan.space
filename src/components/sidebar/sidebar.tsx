/* eslint-disable qwik/jsx-a */
/* eslint-disable qwik/jsx-img */
import { component$, $ } from "@builder.io/qwik";
import styles from "./sidebar.module.css";
import upayanlogo from "../../media/upayan.png";
import hamburgerIcon from "../../media/hamburger.svg";

export default component$(() => {
  const toggleSidebar = $(() => {
    const sidebar = document.querySelector(`.${styles.sidebar}`);
    if (sidebar) {
      sidebar.classList.toggle(styles.sidebarMinimized);
    }
  });
  
  return (
    <aside class={`${styles.sidebar} ${styles.sidebarMinimized}`}> 
      <div class={styles.hamburger} onClick$={toggleSidebar}><img src={hamburgerIcon} alt="Hamburger" /></div>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <img src={upayanlogo} alt="Upayan" width="100" height="100" />
        </div>
        <a class={styles.title}>Upayan</a>
        <hr class={styles.separator} />
        <div class={styles.sections}>
          {/* Other Sections */}
          <div class={styles.section}>
            <ul class={styles.navList}>
              <li><a href="/">Home</a></li>
            </ul>
          </div>
          <div class={styles.section}>
            <ul class={styles.navList}>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/cookies">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Social Media Icons and GitHub Sponsor Button */}
      <div class={styles.socialContainer}>
        <div class={styles.socialIcons}>
          <a href="https://www.instagram.com/_._upayan_._/" target="_blank" rel="noopener">
            <img src="https://img.icons8.com/?size=256&id=Xy10Jcu1L2Su&format=png" alt="Instagram" />
          </a>
          <a href="https://github.com/upayanmazumder" target="_blank" rel="noopener">
            <img src="https://img.icons8.com/?size=256&id=52539&format=png" alt="GitHub" />
          </a>
        </div>
      </div>
    </aside>
  );
});