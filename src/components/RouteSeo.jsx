import { useLocation } from "react-router-dom";
import Seo from "./Seo";

const pageSeo = {
  "/": {
    title: "Route-it! | Route Optimization & Client Management for Service Businesses",
    description: "Route-it! helps contractors and service businesses optimize routes, manage clients, track leads, save time, and get more work done. Available on iPhone, Android, and the web."
  },
  "/features": {
    title: "Route Optimization & Client Management Features | Route-it!",
    description: "Explore Route-it! features for route optimization, client management, lead tracking, client imports, Break Mode, and navigation with Apple Maps, Google Maps, or Waze."
  },
  "/pricing": {
    title: "Route-it! Pricing | Route Planning Software for Service Businesses",
    description: "Compare Route-it! plans and start organizing routes, customers, and leads with route planning software built for mobile service businesses."
  },
  "/about": {
    title: "About Route-it! | Built for Mobile Service Professionals",
    description: "Learn why Route-it! was created to help contractors, technicians, and mobile service businesses spend less time driving and more time serving customers."
  },
  "/contact": {
    title: "Contact Route-it! | Product Support and Business Inquiries",
    description: "Contact Route-it! for account help, technical support, feature suggestions, partnerships, or business and enterprise questions."
  },
  "/faq": {
    title: "Route-it! FAQ | Route Planning App Questions Answered",
    description: "Get answers about Route-it! route optimization, navigation apps, saved routes, client imports, lead tracking, Break Mode, pricing, and downloads."
  },
  "/privacy": {
    title: "Route-it! Privacy Policy",
    description: "Read the Route-it! privacy policy and learn how HALLOWTECH collects, uses, and protects account, route, client, device, and location information."
  },
  "/terms": {
    title: "Route-it! Terms of Use",
    description: "Read the terms governing access to and use of Route-it! applications, services, subscriptions, route planning, and client management features."
  },
  "/delete-account": {
    title: "Delete Your Route-it! Account",
    description: "Submit a request to delete your Route-it! account and associated data.",
    robots: "noindex, follow"
  }
};

export default function RouteSeo() {
  const { pathname } = useLocation();

  // Industry routes provide their own page-specific metadata and FAQ schema.
  if (pathname === "/industries" || pathname.startsWith("/industries/")) return null;

  const normalizedPath = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
  const page = pageSeo[normalizedPath] || pageSeo["/"];
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `https://routeitusa.com${normalizedPath === "/" ? "" : normalizedPath}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Route-it!",
      url: "https://routeitusa.com"
    }
  };

  return (
    <Seo
      title={page.title}
      description={page.description}
      path={normalizedPath === "/" ? "" : normalizedPath}
      robots={page.robots}
      schema={schema}
    />
  );
}
