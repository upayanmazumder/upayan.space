import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "../components/hero/hero";
import Activity, { useGuildStatistics } from "../components/activity/activity";

export default component$(() => {
  return (
    <>
    <div role="presentation" class="ellipsis"></div>
    <div class="override-background">
      <Hero />
      <div class="container container-center">
        <Activity />
      </div>
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Upayan",
  meta: [
    {
      name: "description",
      content: "Explore the work and skills of Upayan, aspiring data scientist and developer.",
    },
    {
      name: "author",
      content: "Upayan Mazumder",
    },
    {
      name: "theme-color",
      content: "#3877b4",
    },
    {
      property: "og:title",
      content: "Upayan",
    },
    {
      property: "og:description",
      content: "Explore the work and skills of Upayan Mazumder, aspiring data scientist and developer.",
    },
    {
      name: "twitter:image",
      content: "https://i.imgur.com/sBVSdUh.jpeg",
    },
  ],
};


export {useGuildStatistics};