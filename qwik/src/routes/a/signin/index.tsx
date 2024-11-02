import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import AuthenticateForm from "../../../components/auth/authenticate/authenticate"

export default component$(() => {
  return (
    <>
      <div class="container container-center container-spacing-xl">
        <AuthenticateForm />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sign In!",
  meta: [
    {
      name: "description",
      content: "Sign in"
    }
  ]
};