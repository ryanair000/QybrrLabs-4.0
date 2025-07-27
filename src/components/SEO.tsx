import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  pathname?: string;
}

const SITE_URL = 'https://qybrrlabs.com';

const SEO = ({ title, description = '', image, pathname = '/' }: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* OpenGraph */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />} 
    {image && <meta property="og:image" content={image} />} 
    <meta property="og:url" content={`${SITE_URL}${pathname}`} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    {description && <meta name="twitter:description" content={description} />} 
    {image && <meta name="twitter:image" content={image} />} 
  </Helmet>
);

export default SEO;
