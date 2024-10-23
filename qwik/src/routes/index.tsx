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
      content: "Welcome to Upayan's website..",
    },
  ],
};

export { useGuildStatistics };