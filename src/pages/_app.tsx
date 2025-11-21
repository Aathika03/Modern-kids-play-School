// src/pages/_app.tsx
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps): React.JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

