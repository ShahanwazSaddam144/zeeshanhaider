import "./globals.css";
import "./tailwind-out.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./component/Navbar";

// ✅ SEO Metadata
export const metadata = {
  metadataBase: new URL("https://zeeshanhaider.com"),
  title: {
    default: "Zeeshanhaider — SAP BI / BW4HANA & Datasphere Consultant",
    template: "%s | Zeeshanhaider",
  },
  description:
    "Syed Zeeshan — SAP BI/BW4HANA & Datasphere consultant with 20+ years of IT experience. I collect, transform and present data so your business can make timely decisions. Services: data warehousing, optimization, analytics, reporting and SAP migrations.",
  keywords: [
    "SAP BW",
    "BW4HANA",
    "Datasphere",
    "SAP BI",
    "Data Warehousing",
    "Data Optimization",
    "Data Presentation",
    "HANA",
    "Business Intelligence",
    "Project Management",
    "SAP Consultant",
  ],
  authors: [{ name: "Syed Zeeshan", url: "https://zeeshanhaider.com" }],
  creator: "Syed Zeeshan",
  publisher: "Zeeshanhaider",
  openGraph: {
    title: "Zeeshanhaider — SAP BI / BW4HANA & Datasphere Consultant",
    description:
      "SAP BI/BW4HANA & Datasphere consultant. 20+ years in IT, 15+ years in SAP BI. Data warehousing, optimization, analytics and reporting.",
    url: "https://zeeshanhaider.com",
    siteName: "Zeeshanhaider",
    images: [
      {
        url: "https://zeeshanhaider.com/wp-content/uploads/2021/05/bg-05-free-img.jpg",
        width: 1200,
        height: 630,
        alt: "Zeeshanhaider — Portfolio Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeeshanhaider — SAP BI / BW4HANA & Datasphere Consultant",
    description:
      "Data warehousing, optimization, analytics and reporting. 20+ years IT experience — SAP BW/BW4HANA expert.",
    images: [
      "/portfolio-01-free-img.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// ✅ Google Fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});


const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Syed Zeeshan",
  url: "https://zeeshanhaider.com",
  email: "mailto:zeeshanhaider@gmail.com",
  telephone: "+966562870409",
  jobTitle: "SAP BI / BW4HANA / Datasphere Consultant",
  description:
    "SAP BI/BW4HANA & Datasphere consultant with 20+ years in IT and 15+ years in SAP BI; specializes in data warehousing, optimization and analytics.",
  worksFor: {
    "@type": "Organization",
    name: "Zeeshanhaider",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
