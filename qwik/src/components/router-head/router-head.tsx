import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const title = "Upayan - " + head.title;

  return (
    <>
      <title>{title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="theme-color" content="#3046399" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={loc.url.href} />
      <meta name="twitter:image" content="https://i.imgur.com/sBVSdUh.jpeg" />
      <meta name="twitter:description" content={head.meta.find(m => m.name === 'description')?.content || 'Welcome to Upayan\'s website'} />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.script })}
        />
      ))}
    </>
  );
});
