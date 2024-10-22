import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <div>
        Sorry, the page you are looking for does not exist.
        <br />
        Please check the URL or return to the homepage.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "404 - Page Not Found",
  meta: [
    {
      name: "description",
      content: "The page you are looking for does not exist.",
    },
  ],
};
