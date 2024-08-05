import { component$ } from "@builder.io/qwik";
import { HiHomeOutline, HiDocumentTextOutline } from "@qwikest/icons/heroicons";
import styles from "./header.module.css";
import upayan from "../../media/upayan.svg";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={[styles.wrapper]}>
        <div class={styles.contentWrapper}>
          <div class={styles.logo}>
            <img src={upayan} alt="Upayan" height={100} width={100}/>
            <p class={styles.name}>
              Upayan
            </p>
          </div>
          <nav class={styles.navbar}>
            <ul>
              <li><a href="/"><HiHomeOutline /> Home</a></li>
              <li><a href="/certificates"><HiDocumentTextOutline /> Certificates</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});
