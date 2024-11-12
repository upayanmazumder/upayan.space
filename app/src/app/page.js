import Image from "next/image";
import styles from "./page.module.css";
import SocialMediaWork from "../components/social-media/work/work";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SocialMediaWork />
      </main>
    </div>
  );
}
