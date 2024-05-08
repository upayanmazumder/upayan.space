import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./blog.module.css";

export default component$(() => {
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div id="main-content" class={`${styles.container} ${styles.containerCenter}`}>
        <h1>
          Welcome to My Blog
        </h1>
        <p>
          This is the main page of my blog. I am yet to finish making the blog mechanism!
        </p>
        {/*links to latest blog posts here */}
        <p>
          Check out my latest <a href="/blog/post-1">post</a>.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Blog",
  meta: [
    {
      name: "description",
      content: "Welcome to my blog. Explore the latest articles and updates.",
    },
  ],
};
