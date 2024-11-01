import { component$ } from '@builder.io/qwik';
import { useSession, useSignIn } from '~/routes/plugin@auth';
import sessionStyles from "./authenticate.module.css";
import { Form } from '@builder.io/qwik-city';
import { BsDiscord, BsGoogle } from "@qwikest/icons/bootstrap";

export default component$(() => {
  const session = useSession();
  const signIn = useSignIn();
  const isSignedIn = session.value?.user;

  return (
    <>
      {isSignedIn ? (
        <div class={sessionStyles.container}>
          <p>You are already signed in!</p>
        </div>
      ) : (
        <div class={sessionStyles.authenticateContainer}>
          <Form action={signIn} class={sessionStyles.form}>
            <input type="hidden" name="providerId" value="google" />
            <input type="hidden" name="options.redirectTo" value="/a/signedin" />
            <button class={sessionStyles.iconButton}>
              <BsGoogle />
            </button>
          </Form>

          <Form action={signIn} class={sessionStyles.form}>
          <input type="hidden" name="providerId" value="discord" />
          <input type="hidden" name="options.redirectTo" value="/a/signedin" />
          <button class={sessionStyles.iconButton}>
            <BsDiscord />
          </button>
          </Form>
        </div>
      )}
    </>
  );
});
