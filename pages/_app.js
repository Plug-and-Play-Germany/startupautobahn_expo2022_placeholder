import "sanitize.css";
import "sanitize.css/typography.css";
import localFont from "@next/font/local";

const PPNeueMachina = localFont({
  src: "../fonts/PPNeueMachina-InktrapRegular.woff2",
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className={PPNeueMachina.className} />;
}

export default MyApp;
