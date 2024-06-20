/* eslint-disable qwik/no-use-visible-task */
import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from './certificates.module.css';

// Use Vite's import.meta.glob to import all images from the folder
const images = import.meta.glob('/src/media/certificates/*.jpg');

interface State {
  imageUrls: string[];
}

export default component$(() => {
  const state = useStore<State>({ imageUrls: [] });

  // Load images into state when component mounts
  useVisibleTask$(() => {
    const loadImages = async () => {
      const imagePromises = Object.keys(images).map(async (path) => {
        const imageModule = await images[path]();
        return (imageModule as { default: string }).default;
      });
      state.imageUrls = await Promise.all(imagePromises);
    };
    loadImages();
  });

  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div class="container container-center">
        <h1>Certificates</h1>
        <div class={styles.imageGrid}>
          {state.imageUrls.map((url, index) => (
            // eslint-disable-next-line qwik/jsx-img
            <img class={styles.img}
              key={index}
              src={url}
              alt={`Certificate ${index + 1}`}
            />
          ))}
        </div>a
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Certificates",
  meta: [
    {
      name: "description",
      content: "My Certificates",
    },
  ],
};
