import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import blog from "./blog.module.css";

export default component$(() => {
  return (
    <>
    <div class={blog.introduction}>
        <h1>Welcome to my Blog</h1>
        <p>Find out what I am up to!</p>
    </div>
    <div role="presentation" class="ellipsis"></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Upayan | Blog",
  meta: [
    {
      name: "description",
      content: "Visit my blog!",
    },
  ],
};
