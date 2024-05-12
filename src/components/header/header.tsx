import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import upayan from "../../media/upayan.svg";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={[styles.wrapper]}>
        <div class={styles.contentWrapper}>
          <div class={styles.logo}>
            <img src={upayan} alt="Upayan" height={100} width={100}/>
          </div>
          <nav class={styles.navbar}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});
