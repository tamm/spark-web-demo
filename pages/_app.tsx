import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SparkProvider } from "@spark-web/core";
import { UniversalNextLink } from "@spark-web/next-utils";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SparkProvider linkComponent={UniversalNextLink}>
      <Component {...pageProps} />
    </SparkProvider>
  );
}

export default MyApp;
