import "sanitize.css";
import "sanitize.css/typography.css";
import localFont from "@next/font/local";
import { Global, css } from "@emotion/react";

const PPNeueMachina = localFont({
  src: "../fonts/PPNeueMachina-InktrapRegular.woff2",
});

const Inter = localFont({
  src: [
    {
      path: "../fonts/Inter.var.woff2",
      style: "normal",
    },
    {
      path: "../fonts/Inter-italic.var.woff2",
      style: "italic",
    },
  ],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          p,
          h1,
          h2,
          h3,
          h4,
          a,
          ul,
          ol,
          li {
            font-family: Inter;
          }
          body {
            -webkit-font-smoothing: antialiased;
          }
        `}
      />
      <Component
        {...pageProps}
        className={(PPNeueMachina.className, Inter.className)}
      />
    </>
  );
}

export default MyApp;
