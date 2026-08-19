import { useEffect } from 'react';
import { seoConfig } from '../data/seo';

export default function SEO({ title, description, schemaData }) {
  useEffect(() => {
    const defaultSeo = seoConfig.default;
    
    // Update title
    document.title = title || defaultSeo.title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || defaultSeo.description;

    // Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = document.title;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = metaDesc.content;

    // Handle JSON-LD Structured Data
    let scriptTag = document.getElementById('seo-json-ld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-json-ld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Nivara Developers",
      "image": defaultSeo.ogImage,
      "description": defaultSeo.description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Apex Tower, 123 Premium Developer Blvd",
        "addressLocality": "Pune",
        "addressRegion": "MH",
        "postalCode": "411001",
        "addressCountry": "IN"
      },
      "telephone": "+91 98765 43210"
    };

    const finalSchema = schemaData ? [baseSchema, schemaData] : baseSchema;
    scriptTag.innerHTML = JSON.stringify(finalSchema);

  }, [title, description, schemaData]);

  return null;
}
