import { component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { useSession } from '../../../routes/plugin@auth';
import sessionStyles from "./session.module.css";
import unknownPerson from "../../../media/authentication/unknown-person.png";

export default component$(() => {
  const session = useSession();
  const state = useStore({ isLoading: true });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    state.isLoading = false;
  });

  const isSignedIn = session.value?.user;

  if (state.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isSignedIn ? (
        <div class={sessionStyles.container}>
          <a href="/profile">
            <div class={sessionStyles.imgContainer}>
              <img
                class={sessionStyles.img}
                src={session.value.user?.image ?? unknownPerson}
                loading="lazy"
                alt={session.value.user?.name ?? 'User Icon'}
                width="80"
                height="80"
              />
            </div>
          </a>
          <div class={sessionStyles.userInfo}>
            <p class={sessionStyles.name}>{session.value.user?.name}</p>
          </div>
        </div>
      ) : (
        <div class={sessionStyles.loginContainer}>
            <button onClick$={() => window.location.href = '/a/signin'} class={sessionStyles.loginButton}>Login</button>
        </div>
      )}
    </>
  );
});
