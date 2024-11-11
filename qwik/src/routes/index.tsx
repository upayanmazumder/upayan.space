import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero, { useGuildStatistics } from "../components/hero/hero"
import Details from "../components/details/details";


export default component$(() => {
  return (
    <div class="container container-center">
      <Hero />

      <Details />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Home",
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
      name: "og:image",
      content: "https://i.imgur.com/sBVSdUh.jpeg",
    },
  ],
};

export { useGuildStatistics };