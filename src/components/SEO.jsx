import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, path = "" }) {
  const siteName = "Learnshiz Engineering";
  const baseUrl = "https://learnshiz.com";
  const url = `${baseUrl}${path}`;
  const ogImage = `${baseUrl}/og-image.jpg`;
  const keywords = "engineering as a service, dedicated engineering team, EaaS, software engineering subscription, AI engineers, cloud engineers, DevOps, forward deployment engineering, product engineering partner";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Learnshiz Engineering",
        "url": baseUrl,
        "description": description,
        "sameAs": [],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-95919-67760",
          "contactType": "sales",
          "availableLanguage": "English"
        }
      })}</script>
    </Helmet>
  );
}
