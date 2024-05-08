import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/hero/hero";

export default component$(() => {
  return (
    <>
      <Hero />

      <div role="presentation" class="ellipsis"></div>
      <div class="container">
        TODO.. TODO.. TODO....
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "",
  meta: [
    {
      name: "description",
      content: "Welcome to Upayan's website!",
    },
  ],
};