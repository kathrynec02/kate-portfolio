import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { EB_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";

const display = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>kate chadwick — software engineer &amp; designer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Kate Chadwick — iOS engineer at Vanguard, MS CS at Georgia Tech, and founder of Canvas & Kernel. Building at the seam of design and code: UX-led, accessible, well-engineered web experiences."
        />
      </Head>
      <div className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
