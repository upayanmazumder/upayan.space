import { component$ } from '@builder.io/qwik';
import { useSession, useSignIn } from '~/routes/plugin@auth';
import signedInStyles from "./authenticate-1.module.css";
import signInStyles from "./authenticate-2.module.css"
import { Form } from '@builder.io/qwik-city';
import { BsDiscord, BsGithub, BsGoogle } from "@qwikest/icons/bootstrap";

export default component$(() => {
  const session = useSession();
  const signIn = useSignIn();
  const isSignedIn = session.value?.user;

  return (
    <div class="container container-center">
      {isSignedIn ? (
        <div class={signedInStyles.container}>
          <h3>Already signed in!</h3>
          <p>You are already signed in!</p>
          <button class={signedInStyles.homeButton} onClick$={() => window.location.href = '/'}>
            Go to Home
          </button>
        </div>
      ) : (
        <div class={signInStyles.authenticateContainer}>
          <h3>Sign in!</h3>
          <p style="color: white">Use any of the methods below to sign in!</p>
          <div class={signInStyles.authenticateContainerForm}>
            <Form action={signIn} class={signInStyles.form}>
              <input type="hidden" name="providerId" value="google" />
              <input type="hidden" name="options.redirectTo" value="/a/signedin" />
              <button class={signInStyles.iconButton}>
                <BsGoogle />
              </button>
            </Form>

            <Form action={signIn} class={signInStyles.form}>
              <input type="hidden" name="providerId" value="discord" />
              <input type="hidden" name="options.redirectTo" value="/a/signedin" />
              <button class={signInStyles.iconButton}>
                <BsDiscord />
              </button>
            </Form>

            <Form action={signIn} class={signInStyles.form}>
              <input type="hidden" name="providerId" value="github" />
              <input type="hidden" name="options.redirectTo" value="/a/signedin" />
              <button class={signInStyles.iconButton}>
                <BsGithub />
              </button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
});
