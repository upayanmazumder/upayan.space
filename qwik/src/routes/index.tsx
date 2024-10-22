import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Activity, { useGuildStatistics } from "../components/activity/activity";
import SocialMediaWorkLinks from "../components/social-media/work/work";
import Hero from "../components/hero/hero";

export default component$(() => {
  return (
    <div class="container container-center">
      <SocialMediaWorkLinks />
      <Activity />
      <Hero />

    </div>
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
