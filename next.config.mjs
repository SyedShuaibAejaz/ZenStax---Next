/** @type {import("next").NextConfig} */

const isDevelopment = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self' https://formspree.io",
  "frame-ancestors 'none'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self' 'unsafe-inline'${
    isDevelopment ? " 'unsafe-eval'" : ""
  }`,
  "connect-src 'self' https://formspree.io",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/services/ai.html",
        destination: "/services/ai",
        permanent: true,
      },
      {
        source: "/services/web-development.html",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/services/mobile-apps.html",
        destination: "/services/mobile-apps",
        permanent: true,
      },
      {
        source: "/services/erp-crm.html",
        destination: "/services/crm-erp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;