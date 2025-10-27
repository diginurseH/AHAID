import { Helmet } from "react-helmet";  // You will need to install this

interface MetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export function Metadata({ 
  title, 
  description, 
  keywords = [], 
  ogImage = "/images/nursaerahealth-og.png" 
}: MetadataProps) {
  return (
    <Helmet>
      <title>{title} | Nursaera Health Tech</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      
      {/* OpenGraph tags for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
