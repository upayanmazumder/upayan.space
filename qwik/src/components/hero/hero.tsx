/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import Activity, { useGuildStatistics } from "../activity/activity";
import SocialMediaWorkLinks from "../social-media/work/work"

export default component$(() => {

  return (
    <>
      <SocialMediaWorkLinks />
      <Activity />
    </>
  );
});

export { useGuildStatistics };