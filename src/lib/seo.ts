import { siteConfig } from "./constants";

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/altimi_logo.png`,
    image: `${siteConfig.url}/images/altimi_logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Plot No. 21-C, Khalid Commercial Street #4",
      addressLocality: "DHA Phase-7 Ext",
      addressRegion: "Karachi",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.7936,
      longitude: 67.0562,
    },
    areaServed: {
      "@type": "City",
      name: "Karachi",
    },
    medicalSpecialty: [
      "Hematology",
      "Microbiology",
      "Clinical Chemistry",
      "Histopathology",
      "Cardiology",
    ],
    availableService: [
      { "@type": "MedicalTest", name: "Hematology Testing" },
      { "@type": "MedicalTest", name: "Microbiology Testing" },
      { "@type": "MedicalTest", name: "Clinical Chemistry" },
      { "@type": "MedicalTest", name: "Histopathology" },
      { "@type": "MedicalTest", name: "Holter Heart Monitoring" },
      { "@type": "MedicalTest", name: "Home Sample Collection" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
    sameAs: [],
  };
}
