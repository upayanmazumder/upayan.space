/* eslint-disable qwik/jsx-a */
import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import packageJson from "../../../package.json";

export default component$(() => {
  const version = packageJson.version;

  return (
    <footer>
      <a class={styles.anchor}>
        <span>&copy; {new Date().getFullYear()} Upayan. All rights reserved.</span>
        <span class={styles.spacer}>|</span>
        <span>v{version}</span>
      </a>
    </footer>
  );
});
