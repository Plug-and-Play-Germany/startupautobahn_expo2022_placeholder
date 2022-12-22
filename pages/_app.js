import "sanitize.css";
import "sanitize.css/typography.css";
import { Global, css } from "@emotion/react";
import { Inter } from "../fonts/fonts";
import { PPNeueMachina } from "../fonts/fonts";
import Seo from "../components/seo";

function MyApp({ Component, pageProps }) {
  let seo = {
    frontmatter: {
      title: "EXPO2023 | STARTUP AUTOBAHN powered by Plug and Play",
      description:
        "EXPO2023 is an invite-only conference showcasing technologies of the future and exposing the power of open innovation between leading corporations and innovative startups. STARTUP AUTOBAHN powered by Plug and Play welcomes over 1,000 entrepreneurs, investors, experts and decision makers in the field of Mobility, Production, Enterprise, Sustainability and beyond to Stuttgart to exchange opinions and experiences on relevant future topics and to experience what can result from successful open collaboration.",
      image: "https://expo2023.pnptc.events/expo_thumbnail.png",
      url: "https://expo2023.pnptc.events",
      twitter_handle: "@startupautobahn",
    },
  };
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
      <Seo seo={seo} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
