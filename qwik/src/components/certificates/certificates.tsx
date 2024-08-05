/* eslint-disable qwik/no-use-visible-task */
/* eslint-disable qwik/jsx-img */
import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import styles from './certificates.module.css';
import certificatesData from './certificates.json';

const images = import.meta.glob('/src/media/certificates/*.jpg');

interface ImageDetail {
  title: string;
  src: string;
  tags: string[];
}

interface State {
  imageDetails: ImageDetail[];
}

export default component$(() => {
  const state = useStore<State>({ imageDetails: [] });

  useVisibleTask$(() => {
    const loadImages = async () => {
      const imagePromises = Object.keys(images).map(async (path) => {
        const imageModule = await images[path]();
        return (imageModule as { default: string }).default;
      });

      const loadedImages = await Promise.all(imagePromises);
      state.imageDetails = certificatesData.map((detail, index) => ({
        title: detail.title,
        src: loadedImages[index] || detail.path,
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
          {state.imageDetails.map((imageDetail, index) => (
            <div key={index} class={styles.imageItem}>
              <img
                class={styles.img}
                src={imageDetail.src}
                alt={imageDetail.title}
                decoding="async"
                loading="lazy"
              />
              <p class={styles.imageTitle}>{imageDetail.title}</p>
              <p class={styles.imageTags}>{imageDetail.tags.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
