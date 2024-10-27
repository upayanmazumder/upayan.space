import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Infobox from "../../../components/infobox/infobox";

export default component$(() => {
  return (
    <>
      <div class="container container-center container-spacing-xl">
        <h3>Terms of Service</h3>
        <br />
        <p>Please read our terms of service carefully before using our website!</p>
      </div>

      <div class="container container-flex" style="background-color: #000000b8">
        <Infobox>
          <div q:slot="title" class="icon icon-terms">
            Acceptance of Terms
          </div>
          <>
            <p>
              By using this website, you agree to these terms. Additional guidelines may apply to specific services.
            </p>
          </>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-use">
            Use of the Site
          </div>
          <>
            <p>
              You are responsible for your actions on the site. Do not misuse the site or engage in illegal activities.
            </p>
          </>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-changes">
            Changes to Terms
          </div>
          <>
            <p>
              We may update these terms. Changes will be posted on this page.
            </p>
          </>
        </Infobox>
      </div>

      <div class="container container-flex" style="background-color: #000000b8">
        <Infobox>
          <div q:slot="title" class="icon icon-access">
            Termination
          </div>
          <>
            <p>
              We may suspend or terminate access to the site if you violate these terms.
            </p>
          </>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-questions">
            Contact Me
          </div>
          <>
            <p>
              Questions? Contact me at <a href="mailto:support@upayan.space">support@upayan.space</a>
            </p>
          </>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-policy">
            Privacy Policy Changes
          </div>
          <>
            <p>
              We may update our Privacy Policy. Changes will be posted on this page.
            </p>
          </>
        </Infobox>
      </div>

      <div class="container container-center container-spacing-xl">
        <p style="color: white"><strong>Note:</strong> This Terms of service is not legally binding.</p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Terms of Service",
  meta: [
    {
      name: "description",
      content: "Welcome to our Terms of Service page!"
    }
  ]
};
