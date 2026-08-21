"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestorationFix() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser's automatic scroll restoration on reload
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      const ensureTop = () => {
        // If the user refreshed near the top, force exact 0,0 without animation jump
        if (window.scrollY < 120) {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        }
      };

      ensureTop();

      // Guard against layout shifts during initial Framer Motion hydration
      const t1 = setTimeout(ensureTop, 20);
      const t2 = setTimeout(ensureTop, 100);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [pathname]);

  return null;
}
