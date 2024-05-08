import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "../../media/su27-2-transparent.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgThunder class={styles["hero-image"]} alt="Image thunder" />
      <h1>
        So <span class="highlight">fantastic</span>
        <br />
        to have <span class="highlight">you</span> here
      </h1>
    </div>
  );
});
