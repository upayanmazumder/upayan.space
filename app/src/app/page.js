'use client'

import Image from "next/image";
import styles from "./page.module.css";
import SocialMediaWork from "../components/social-media/work/work";
import Activity from "../components/activity/activity";
import ServicesCarousel from "../components/carousel/carousel";
import Carousel from "../components/carousel/carousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SocialMediaWork />
        <Activity />
        <Carousel />
      </main>
    </div>
  );
}
