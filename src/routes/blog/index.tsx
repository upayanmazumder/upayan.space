import { component$ } from '@builder.io/qwik';
import blog from "./blog.module.css"
export default component$(() => {
  return (
    <div class={blog.introduction}>
        <h1>Welcome to my Blog</h1>
        <p>Discover insightful articles, tutorials, and more!</p>
    </div>
  );
});
