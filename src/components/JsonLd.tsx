import React from 'react';

const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Porto Porter",
    "image": "https://portoporter.com/assets/images/logo.jpeg",
    "@id": "https://portoporter.com",
    "url": "https://portoporter.com",
    "telephone": "+351000000000",
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
    "description": "Premium concierge service in Porto delivering hand-picked artisan crafts and gift bundles directly to your accommodation."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default JsonLd;
