import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Kathryn Chadwick — Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Portfolio of Kathryn (Kate) Chadwick — software engineer specializing in frontend and full-stack development, building scalable, intuitive, and accessible web experiences."
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
