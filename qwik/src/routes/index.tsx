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
      content: "Portfolio Site",
    },
  ],
};

export {useGuildStatistics};