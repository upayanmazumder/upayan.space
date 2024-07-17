import { component$ } from "@builder.io/qwik";
import styles from "./activity.module.css";

export default component$(() => {
  return (
    <div class={[styles.hero]}>
    <h1>
      Hello!
    </h1>
    </div>
  );
});