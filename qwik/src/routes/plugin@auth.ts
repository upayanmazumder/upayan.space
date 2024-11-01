import { QwikAuth$ } from "@auth/qwik";
import Google from "@auth/qwik/providers/google";
import Discord from "@auth/qwik/providers/discord"

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Google,
      Discord,
    ],
    pages: {
      signIn: "/a/signin/",
      signOut: "/a/signout/",
    },
  }),
);
