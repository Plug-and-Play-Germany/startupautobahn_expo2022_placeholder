import React from "react";
import Head from "next/head";

const Seo = ({
  seo: {
    frontmatter: { title, description, image, url, twitter_handle },
  },
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="image" src={image} key="image" />
      <link rel="cononical" href={url} key="url" />
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} key="og_url" />
      <meta property="og:title" content={title} key="og_title" />
      <meta
        property="og:description"
        content={description}
        key="og_description"
      />
      <meta property="og:image" content={image} key="og_image" />

      {/* Twitter Card tags */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter_type"
      />
      <meta
        name="twitter:creator"
        content={twitter_handle}
        key="twitter_user"
      />
      <meta name="twitter:title" content={title} key="twitter_title" />
      <meta
        name="twitter:description"
        content={description}
        key="twitter_description"
      />
      <meta name="twitter:image" content={image} key="twitter_image" />
    </Head>
  );
};

export default Seo;
