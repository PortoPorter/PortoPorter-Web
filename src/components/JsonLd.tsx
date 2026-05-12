import React from 'react';
import content from '@/config/content';

const JsonLd = () => {
  const { site, metadata } = content;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": site.name,
    "image": `https://portoporter.com${site.logo}`,
    "@id": "https://portoporter.com",
    "url": "https://portoporter.com",
    "telephone": site.whatsappNumber,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Porto City Center",
      "addressLocality": "Porto",
      "postalCode": "4000",
      "addressCountry": "PT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.1579,
      "longitude": -8.6291
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/portoporter"
    ],
    "description": metadata.home.description
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default JsonLd;
