import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import HeroImage from "../../../media/mig21-1.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
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
          onClick$={async (evt) => {
            // Get button position
            const buttonRect = evt.target.getBoundingClientRect();

            // Calculate position relative to the viewport
            const x = buttonRect.left + buttonRect.width / 2;
            const y = buttonRect.top + buttonRect.height / 2;

            const defaults = {
              spread: 360,
              ticks: 70,
              gravity: 0,
              decay: 0.95,
              startVelocity: 30,
              colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
              origin: {
                x: x / window.innerWidth, // Convert to relative position
                y: y / window.innerHeight, // Convert to relative position
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
          onClick$={async (evt) => {
            // Get button position
            const buttonRect = evt.target.getBoundingClientRect();

            // Calculate position relative to the viewport
            const x = buttonRect.left + buttonRect.width / 2;
            const y = buttonRect.top + buttonRect.height / 2;

            const defaults = {
              spread: 360,
              ticks: 70,
              gravity: 0,
              decay: 0.95,
              startVelocity: 30,
              colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
              origin: {
                x: x / window.innerWidth, // Convert to relative position
                y: y / window.innerHeight, // Convert to relative position
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
      </div>
    </div>
  );
});