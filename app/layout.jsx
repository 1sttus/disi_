import "./globals.css";

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
