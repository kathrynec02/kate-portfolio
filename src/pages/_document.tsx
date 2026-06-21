import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Kathryn Chadwick" />
      </Head>
      <body className="antialiased bg-canvas text-ink">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
