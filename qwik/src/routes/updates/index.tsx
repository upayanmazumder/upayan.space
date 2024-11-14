import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div role="presentation"></div>
      <div class="container container-center">
        <h1>Domain Updated</h1>
        <p>
          My domain has been updated from <strong>upayan.space</strong> to <strong>upayan.dev</strong>.
        </p>
        <p>
          Please try visiting the site you were initially trying to, but instead replace the <strong>.space</strong> extension with <strong>.dev</strong>.
        </p>
        <p>
          If you have any questions, feel free to email me at <a href="mailto:support@upayan.dev">support@upayan.dev</a>.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Domain Updated",
  meta: [
    {
      name: "description",
      content: "Our domain has been updated from upayan.space to upayan.dev. Please update your bookmarks.",
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
      content: "Domain Updated",
    },
    {
      property: "og:description",
      content: "Our domain has been updated from upayan.space to upayan.dev. Please update your bookmarks.",
    },
    {
      name: "og:image",
      content: "https://i.imgur.com/sBVSdUh.jpeg",
    },
  ],
};
