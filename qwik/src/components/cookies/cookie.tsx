import { $, component$, useStore } from '@builder.io/qwik';
import styles from './cookie.module.css';

export default component$(() => {
  const state = useStore({
    isVisible: true,
    accepted: false,
  });

  const acceptCookies = $(() => {
    document.cookie = "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 30;
    state.accepted = true;
    state.isVisible = false;
  });

  const declineCookies = $(() => {
    document.cookie = "cookieConsent=false; path=/; max-age=" + 60 * 60 * 24 * 30;
    state.accepted = false;
    state.isVisible = false;
  });

  return (
    state.isVisible && (
      <div class={styles.container}>
        <p>
          I use cookies to enhance your experience. Do you accept cookies?
        </p>
        <button onClick$={acceptCookies} class={`${styles.button} ${styles.accept}`}>
          Accept
        </button>
        <button onClick$={declineCookies} class={`${styles.button} ${styles.decline}`}>
          Decline
        </button>
      </div>
    )
  );
});
