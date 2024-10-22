import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Certificates from "../../components/certificates/certificates";

export default component$(() => {
  return (
    <>
    <div role="presentation" class="ellipsis"></div>
    <div class="override-background">
      <Certificates />
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
