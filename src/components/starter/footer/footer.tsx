import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <a href="#" class={styles.anchor}>
        <span>©️ upayan.space</span>
      </a>
    </footer>
  );
});
