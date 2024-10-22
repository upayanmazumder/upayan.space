import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Activity, { useGuildStatistics } from "../components/activity/activity";
import SocialMediaWorkLinks from "../components/social-media/work/work"
export default component$(() => {
  return (
    <>
      <SocialMediaWorkLinks />
      <Activity />
      <div id="about">
        <h2>About</h2>
        <p>About me</p>
      </div>
      <div id="services">
        <h2>Services</h2>
        <p>My services</p>
      </div>
      <div id="contact">
        <h2>Contact</h2>
        <p>How to get in touch</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Welcome to Upayan's website..",
    },
  ],
};

export { useGuildStatistics };