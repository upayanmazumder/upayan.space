import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import HeroImage from "../../media/mig21-1.png?jsx";

export default component$(() => {
  return (
    <div class={[styles.hero]}>
      <HeroImage class={styles["hero-image"]} alt="Hero Image" />
      <h1>
        So <span class="highlight">fantastic</span>
        <br />
        to have <span class="highlight">you</span> here
      </h1>
      <div class={styles["button-group"]}>
        {/*LinkedIn Button*/}
          <button
            class={styles["linkedin-button"]}
            onClick$={async () => {
              const defaults = {
                spread: 360,
                ticks: 70,
                gravity: 0,
                decay: 0.95,
                startVelocity: 30,
                colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
                origin: {
                  x: 0.5,
                  y: 0.35,
                },
              };

              function loadConfetti() {
                return new Promise<(opts: any) => void>((resolve, reject) => {
                  if ((globalThis as any).confetti) {
                    return resolve((globalThis as any).confetti as any);
                  }
                  const script = document.createElement("script");
                  script.src =
                    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                  script.onload = () =>
                    resolve((globalThis as any).confetti as any);
                  script.onerror = reject;
                  document.head.appendChild(script);
                  script.remove();
                });
              }

              const confetti = await loadConfetti();

              function shoot() {
                confetti({
                  ...defaults,
                  particleCount: 80,
                  scalar: 1.2,
                });

                confetti({
                  ...defaults,
                  particleCount: 60,
                  scalar: 0.75,
                });
              }

              setTimeout(shoot, 0);
              setTimeout(shoot, 100);
              setTimeout(shoot, 200);
              setTimeout(shoot, 300);
              setTimeout(shoot, 400);

              // Open website in new tab after animation
              setTimeout(() => {
                window.open("https://www.linkedin.com/in/upayanmazumder/", "_blank");
              }, 990); // Adjust the delay time as needed
            }}
          >
            LinkedIn
          </button>
        {/*Github Button*/}
          <button
            class={styles["github-button"]}
            onClick$={async () => {
              const defaults = {
                spread: 360,
                ticks: 70,
                gravity: 0,
                decay: 0.95,
                startVelocity: 30,
                colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
                origin: {
                  x: 0.5,
                  y: 0.35,
                },
              };

              function loadConfetti() {
                return new Promise<(opts: any) => void>((resolve, reject) => {
                  if ((globalThis as any).confetti) {
                    return resolve((globalThis as any).confetti as any);
                  }
                  const script = document.createElement("script");
                  script.src =
                    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                  script.onload = () =>
                    resolve((globalThis as any).confetti as any);
                  script.onerror = reject;
                  document.head.appendChild(script);
                  script.remove();
                });
              }

              const confetti = await loadConfetti();

              function shoot() {
                confetti({
                  ...defaults,
                  particleCount: 80,
                  scalar: 1.2,
                });

                confetti({
                  ...defaults,
                  particleCount: 60,
                  scalar: 0.75,
                });
              }

              setTimeout(shoot, 0);
              setTimeout(shoot, 100);
              setTimeout(shoot, 200);
              setTimeout(shoot, 300);
              setTimeout(shoot, 400);

              // Open website in new tab after animation
              setTimeout(() => {
                window.open("https://github.com/upayanmazumder", "_blank");
              }, 990); // Adjust the delay time as needed
            }}
          >
            Github
          </button>
        {/*Instagram Button*/}
          <button
            class={styles["instagram-button"]}
            onClick$={async () => {
              const defaults = {
                spread: 360,
                ticks: 70,
                gravity: 0,
                decay: 0.95,
                startVelocity: 30,
                colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
                origin: {
                  x: 0.5,
                  y: 0.35,
                },
              };

              function loadConfetti() {
                return new Promise<(opts: any) => void>((resolve, reject) => {
                  if ((globalThis as any).confetti) {
                    return resolve((globalThis as any).confetti as any);
                  }
                  const script = document.createElement("script");
                  script.src =
                    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                  script.onload = () =>
                    resolve((globalThis as any).confetti as any);
                  script.onerror = reject;
                  document.head.appendChild(script);
                  script.remove();
                });
              }

              const confetti = await loadConfetti();

              function shoot() {
                confetti({
                  ...defaults,
                  particleCount: 80,
                  scalar: 1.2,
                });

                confetti({
                  ...defaults,
                  particleCount: 60,
                  scalar: 0.75,
                });
              }

              setTimeout(shoot, 0);
              setTimeout(shoot, 100);
              setTimeout(shoot, 200);
              setTimeout(shoot, 300);
              setTimeout(shoot, 400);

              // Open website in new tab after animation
              setTimeout(() => {
                window.open("https://www.instagram.com/_._upayan_._/", "_blank");
              }, 990); // Adjust the delay time as needed
            }}
          >
            Instagram
          </button>
        {/*Facebook Button*/}
          <button
            class={styles["facebook-button"]}
            onClick$={async () => {
              const defaults = {
                spread: 360,
                ticks: 70,
                gravity: 0,
                decay: 0.95,
                startVelocity: 30,
                colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
                origin: {
                  x: 0.5,
                  y: 0.35,
                },
              };

              function loadConfetti() {
                return new Promise<(opts: any) => void>((resolve, reject) => {
                  if ((globalThis as any).confetti) {
                    return resolve((globalThis as any).confetti as any);
                  }
                  const script = document.createElement("script");
                  script.src =
                    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                  script.onload = () =>
                    resolve((globalThis as any).confetti as any);
                  script.onerror = reject;
                  document.head.appendChild(script);
                  script.remove();
                });
              }

              const confetti = await loadConfetti();

              function shoot() {
                confetti({
                  ...defaults,
                  particleCount: 80,
                  scalar: 1.2,
                });

                confetti({
                  ...defaults,
                  particleCount: 60,
                  scalar: 0.75,
                });
              }

              setTimeout(shoot, 0);
              setTimeout(shoot, 100);
              setTimeout(shoot, 200);
              setTimeout(shoot, 300);
              setTimeout(shoot, 400);

              // Open website in new tab after animation
              setTimeout(() => {
                window.open("https://www.facebook.com/upayan.mazumder", "_blank");
              }, 990); // Adjust the delay time as needed
            }}
          >
            Facebook
          </button>
        {/*Pinterest Button*/}
        <button
          class={styles["pinterest-button"]}
          onClick$={async () => {
            const defaults = {
              spread: 360,
              ticks: 70,
              gravity: 0,
              decay: 0.95,
              startVelocity: 30,
              colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
              origin: {
                x: 0.5,
                y: 0.35,
              },
            };

            function loadConfetti() {
              return new Promise<(opts: any) => void>((resolve, reject) => {
                if ((globalThis as any).confetti) {
                  return resolve((globalThis as any).confetti as any);
                }
                const script = document.createElement("script");
                script.src =
                  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                script.onload = () =>
                  resolve((globalThis as any).confetti as any);
                script.onerror = reject;
                document.head.appendChild(script);
                script.remove();
              });
            }

            const confetti = await loadConfetti();

            function shoot() {
              confetti({
                ...defaults,
                particleCount: 80,
                scalar: 1.2,
              });

              confetti({
                ...defaults,
                particleCount: 60,
                scalar: 0.75,
              });
            }

            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            setTimeout(shoot, 300);
            setTimeout(shoot, 400);

            // Open website in new tab after animation
            setTimeout(() => {
              window.open("https://in.pinterest.com/upayanmazumder/", "_blank");
            }, 990); // Adjust the delay time as needed
          }}
        >
          Pinterest
        </button>
      </div>
    </div>
  );
});