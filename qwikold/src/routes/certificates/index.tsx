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
  title: "Upayan - Certificates",
  meta: [
    {
      name: "description",
      content: "View Upayan's Certificates",
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
      content: "Upayan - Certificates",
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
