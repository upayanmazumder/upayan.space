/* eslint-disable qwik/jsx-a */
/* eslint-disable qwik/jsx-img */
import { component$, $ } from "@builder.io/qwik";
import styles from "./sidebar.module.css";
import upayanlogo from "../../media/upayan.png";
import hamburgerIcon from "../../media/hamburger.svg";
import instagramIcon from "../../media/instagram.png";
import githubIcon from "../../media/github.png";
import linkedinIcon from "../../media/linkedin.png";
import facebookIcon from "../../media/facebook.png"
import pinterestIcon from "../../media/pinterest.png"
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
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Social Media Icons and GitHub Sponsor Button */}
      <div class={styles.socialContainer}>
        <div class={styles.socialIcons}>
          <a href="https://github.com/upayanmazumder" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" /></a>
          <a href="https://www.instagram.com/_._upayan_._/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
          <a href="https://www.linkedin.com/in/upayanmazumder/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
          <a href="https://www.facebook.com/upayan.mazumder" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="https://in.pinterest.com/upayanmazumder/" target="_blank" rel="noopener noreferrer"><img src={pinterestIcon} alt="Pinterest" /></a>
        </div>
      </div>
    </aside>
  );
});
