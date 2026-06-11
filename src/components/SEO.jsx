import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description }) {
  const siteName = "LearnShiz";
  const url = "https://learnshiz.com"; // Default URL, could be made dynamic
  const defaultImage = "https://learnshiz.com/og-image.jpg"; // Placeholder for an actual OG image

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
    </Helmet>
  );
}
