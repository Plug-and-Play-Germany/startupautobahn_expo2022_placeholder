import localFont from "@next/font/local";

export const PPNeueMachina = localFont({
  src: "../fonts/PPNeueMachina-InktrapRegular.woff2",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Open Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
  preload: true,
});

export const Inter = localFont({
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
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Open Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
  preload: true,
});
