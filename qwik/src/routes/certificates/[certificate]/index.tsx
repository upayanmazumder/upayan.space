import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Certificate from "../../../components/certificate/certificate";

export default component$(() => {
  return (
    <>
    <div role="presentation" class="ellipsis"></div>
    <div class="override-background">
      <Certificate />
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Certificates",
  meta: [
    {
      name: "description",
      content: "View Upayan's Certificates",
    },
    {
      name: "twitter:image",
      content: "https://i.imgur.com/sBVSdUh.jpeg",
    },
  ],
};
