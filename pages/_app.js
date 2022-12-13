import "sanitize.css";
import "sanitize.css/typography.css";
import localFont from "@next/font/local";
import { Global, css } from "@emotion/react";
import { Inter } from "../fonts/fonts";
import { PPNeueMachina } from "../fonts/fonts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          p,
          h2,
          h3,
          h4,
          a,
          ul,
          ol,
          li,
          button {
            font-family: ${Inter.style.fontFamily};
          }
          h1 {
            font-family: ${PPNeueMachina.style.fontFamily};
          }
          body {
            -webkit-font-smoothing: antialiased;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
