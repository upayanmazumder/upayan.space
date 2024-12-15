import RootLayoutClient from "./RootLayoutClient";

import React from "react";
export const metadata = {
  title: "Upayan",
  description: "Explore my page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}