import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Infobox from "../../../components/infobox/infobox";

export default component$(() => {
  return (
    <>
      <div class="container container-center container-spacing-xl">
        <h3>Privacy Policy</h3>
        <br />
        <p>Please go through my privacy policy carefully!</p>
      </div>

      <div class="container" style="background-color: #000000b8">
        <Infobox>
          <div q:slot="title" class="icon icon-info">
            Overview
          </div>
          <p>
            This Privacy Policy outlines how I collect, use, and protect your information when you use my services.
          </p>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-data">
            Information I Collect
          </div>
          <p>
            I may collect personal information you provide directly, such as your name and email address, and usage data like your IP address and device information.
          </p>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-security">
            How I Use Your Information
          </div>
          <p>
            I use the information to provide and improve my services, personalize your experience, and communicate with you.
          </p>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-access">
            Sharing Your Information
          </div>
          <p>
            I do not sell your personal information. I may share it with service providers or if required by law.
          </p>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-questions">
            Security
          </div>
          <p>
            I implement reasonable security measures to protect your information but cannot guarantee absolute security.
          </p>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-policy">
            Your Rights
          </div>
          <p>
            You may have rights regarding your personal information, such as accessing, rectifying, or deleting it.
          </p>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-policy">
            Changes
          </div>
          <p>
            I may update this Privacy Policy from time to time. Please review it periodically for changes.
          </p>
        </Infobox>

        <div class="container container-center container-spacing-xl">
          <p style="color: white"><strong>Note:</strong> This Privacy Policy is not legally binding.</p>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Privacy Policy",
  meta: [
    {
      name: "description",
      content: "Welcome to my Privacy Policy page!"
    }
  ]
};
