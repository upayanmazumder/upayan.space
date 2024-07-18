/* eslint-disable qwik/no-use-visible-task */
/* eslint-disable qwik/jsx-img */
import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import styles from './certificates.module.css';
import certificatesData from './certificates.json';

const images = import.meta.glob('/src/media/certificates/*.jpg?jsx');

interface State {
  imageUrls: { title: string; url: string; tags: string[] }[];
}

export default component$(() => {
  const state = useStore<State>({ imageUrls: [] });

  useVisibleTask$(() => {
    const loadImages = async () => {
      const imagePromises = Object.keys(images).map(async (path) => {
        const imageModule = await images[path]();
        return (imageModule as { default: string }).default;
      });

      const loadedImages = await Promise.all(imagePromises);
      state.imageUrls = certificatesData.map((detail, index) => ({
        title: detail.title,
        url: loadedImages[index] || detail.path,
        tags: detail.tags,
      }));
    };

    loadImages();
  });

  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div class="container container-center">
        <h1>Certificates</h1>
        <div class={styles.imageGrid}>
          {state.imageUrls.map((image, index) => (
            <div key={index} class={styles.imageItem}>
              <img
                class={styles.img}
                src={image.url}
                alt={image.title}
                decoding="async"
                loading="lazy"
              />
              <p class={styles.imageTitle}>{image.title}</p>
              <p class={styles.imageTags}>{image.tags.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
