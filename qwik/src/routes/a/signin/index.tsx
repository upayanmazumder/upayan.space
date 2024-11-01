import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import AuthenticateForm from "../../../components/auth/authenticate/authenticate"

export default component$(() => {
  return (
    <>
      <div class="container container-center container-spacing-xl">
        <h3>Sign in!</h3> <br/>
        <p style="color: white">Use any of the methods below to sign in!</p>
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