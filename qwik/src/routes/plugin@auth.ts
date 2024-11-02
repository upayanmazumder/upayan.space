import { QwikAuth$ } from "@auth/qwik";
import Google from "@auth/qwik/providers/google";
import Discord from "@auth/qwik/providers/discord"
import Github from "@auth/qwik/providers/github"

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Google,
      Discord,
      Github
    ],
    pages: {
      signIn: "/a/signin/",
      signOut: "/a/signout/",
    },
  }),
);
