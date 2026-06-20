import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";

const root = process.cwd();
const sourceRoot = existsSync(join(root, "alke")) ? root : join(root, "disi");
const sourceDir = join(sourceRoot, "alke");
const publicDir = join(root, "public");
const publicAlkeDir = join(publicDir, "alke");
const appDir = join(root, "app");

const pages = [
  "index.html",
  "index-1.html",
  "index-2.html",
  "index-3.html",
  "index-4.html",
  "studio.html",
  "blog.html",
  "contact.html",
  "project.html",
  "post.html",
];

const routeFor = (file) => {
  if (file === "index.html") return "";
  return basename(file, ".html");
};

const escapeTemplate = (value) =>
  value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const extractBodyClass = (html) => {
  const match = html.match(/<body([^>]*)>/i);
  if (!match) return "";
  const classMatch = match[1].match(/\bclass=(["'])(.*?)\1/i);
  return classMatch ? classMatch[2] : "";
};

const extractBody = (html) => {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!match) return "";

  return match[1]
    .replace(/<!-- JAVASCRIPT[\s\S]*?<!-- End Document[\s\S]*?-->/i, "")
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .trim();
};

const rewriteHtml = (html) =>
  html
    .replace(/href=(["'])index\.html\1/g, 'href="/"')
    .replace(/href=(["'])(index-[1-4]|studio|blog|contact|project|post)\.html\1/g, 'href="/$2"')
    .replace(/href=(["'])favicon\.png\1/g, 'href="/alke/favicon.png"')
    .replace(/href=(["'])apple-touch-icon([^"']*)\.png\1/g, 'href="/alke/apple-touch-icon$2.png"')
    .replace(/src=(["'])img\//g, 'src=$1/alke/img/')
    .replace(/src=(["'])js\//g, 'src=$1/alke/js/')
    .replace(/src=(["'])css\//g, 'src=$1/alke/css/')
    .replace(/url\((["']?)img\//g, "url($1/alke/img/")
    .replace(/url\((["']?)\/?alke\/img\//g, "url($1/alke/img/");

const write = (file, contents) => {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, contents);
};

mkdirSync(publicDir, { recursive: true });
if (existsSync(publicAlkeDir)) {
  rmSync(publicAlkeDir, { recursive: true, force: true });
}
cpSync(sourceDir, publicAlkeDir, { recursive: true });

write(join(publicDir, "fonts-poppins.css"), readFileSync(join(sourceRoot, "css"), "utf8").replace(/url\(s\//g, "url(/s/"));
write(join(publicDir, "fonts-roboto.css"), readFileSync(join(sourceRoot, "css-1"), "utf8").replace(/url\(s\//g, "url(/s/"));
if (!existsSync(join(publicDir, "s"))) {
  cpSync(join(sourceRoot, "s"), join(publicDir, "s"), { recursive: true });
}

write(
  join(root, "package.json"),
  `${JSON.stringify(
    {
      scripts: {
        dev: "next dev",
        build: "next build",
        start: "next start",
        lint: "next lint",
      },
      dependencies: {
        "@next/eslint-plugin-next": "latest",
        eslint: "latest",
        "eslint-config-next": "latest",
        next: "latest",
        react: "latest",
        "react-dom": "latest",
      },
      devDependencies: {},
    },
    null,
    2,
  )}\n`,
);

write(
  join(root, "next.config.mjs"),
  `/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
`,
);

write(
  join(root, ".gitignore"),
  `.next
node_modules
out
*.log
`,
);

write(
  join(appDir, "layout.jsx"),
  `import "./globals.css";

export const metadata = {
  title: "Alke",
  description: "Professional Creative Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#212121" />
        <meta name="msapplication-navbutton-color" content="#212121" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#212121" />
        <link rel="stylesheet" href="/fonts-poppins.css" />
        <link rel="stylesheet" href="/fonts-roboto.css" />
        <link rel="stylesheet" href="/alke/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/alke/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/alke/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/alke/css/animsition.min.css" />
        <link rel="stylesheet" href="/alke/css/style.css" />
        <link rel="icon" type="image/png" href="/alke/favicon.png" />
        <link rel="apple-touch-icon" href="/alke/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/alke/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/alke/apple-touch-icon-114x114.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
`,
);

write(
  join(appDir, "globals.css"),
  `html,
body {
  min-height: 100%;
}
`,
);

write(
  join(appDir, "LegacyPage.jsx"),
  `"use client";

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
`,
);

for (const page of pages) {
  const source = readFileSync(join(sourceDir, page), "utf8");
  const bodyClass = extractBodyClass(source);
  const body = rewriteHtml(extractBody(source));
  const route = routeFor(page);
  const pageDir = route ? join(appDir, route) : appDir;
  const slider = page === "index-1.html";

  write(
    join(pageDir, "page.jsx"),
    `import LegacyPage from ${route ? '"../LegacyPage"' : '"./LegacyPage"'};

const html = \`${escapeTemplate(body)}\`;

export default function Page() {
  return <LegacyPage bodyClass="${bodyClass}" html={html} slider={${slider}} />;
}
`,
  );
}
