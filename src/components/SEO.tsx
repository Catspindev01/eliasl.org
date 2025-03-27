import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

export function SEO({ 
  title = "Elias Lindholm | eliasl.org",
  description = "Welcome to my personal space on the web. I'm a passionate developer creating meaningful experiences through technology and design.",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&h=630",
  article = false 
}: SEOProps) {
  
  const url = window.location.href;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* OpenGraph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="eliasl.org" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@Catspin_swe" />

      {/* Additional */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}