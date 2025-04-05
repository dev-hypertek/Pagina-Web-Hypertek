"use client";

import { type FC, type PropsWithChildren, useEffect } from "react";

export const ClientBody: FC<PropsWithChildren> = ({ children }) => {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    document.body.classList.remove(
      // Removes Dark Reader's class on initial load
      "darkreader-scheme-dark",
      "darkreader--sync"
    );
  }, []);

  return <>{children}</>;
};
