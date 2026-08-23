import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@/styles/pages/Home.css";
import "@/styles/pages/Contact.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
