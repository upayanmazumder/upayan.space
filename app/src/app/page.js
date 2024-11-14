'use client'

import Image from "next/image";
import styles from "./page.module.css";
import SocialMediaWork from "../components/social-media/work/work";
import Activity from "../components/activity/activity";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SocialMediaWork />
        <Activity />
      </main>
    </div>
  );
}
