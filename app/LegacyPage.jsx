"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function LegacyPage({ bodyClass = "", html, slider = false }) {
  useEffect(() => {
    document.body.className = bodyClass;
    return () => {
      document.body.className = "";
    };
  }, [bodyClass]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/alke/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/alke/js/popper.min.js" strategy="afterInteractive" />
      <Script src="/alke/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/alke/js/plugins.js" strategy="afterInteractive" />
      {slider ? <Script src="/alke/js/slider-hero-plugin.js" strategy="afterInteractive" /> : null}
      {slider ? <Script src="/alke/js/slider-hero.js" strategy="afterInteractive" /> : null}
      <Script src="/alke/js/custom.js" strategy="afterInteractive" />
    </>
  );
}
