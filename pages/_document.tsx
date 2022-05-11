import { Global, css } from "@emotion/react";
import { useTheme } from "@spark-web/theme";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const theme = useTheme();
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://spark-web-docs-5at71kbus-brighte.vercel.app/_next/static/css/b1c6707967e86a27.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,700;1,400&amp;display=swap"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Global
        styles={css`
          html body {
            background: ${theme.color.background.surface};
          }
        `}
      />
    </Html>
  );
}
