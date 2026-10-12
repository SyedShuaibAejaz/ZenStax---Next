/** @type {import("next").NextConfig} */


const isDevelopment = process.env.NODE_ENV === "development";

// The demo CRM is a separate Vercel project, served under /demo/crm through a rewrite.
const demoCrmOrigin =
  process.env.DEMO_CRM_ORIGIN || "https://zenstax-crm.vercel.app";
const demoCrmSupabase = "https://bmupclxkzfpepmbovkyi.supabase.co";

function buildCsp(connectSrc) {
  return [
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
    `connect-src ${connectSrc}`,
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

const siteCsp = buildCsp(
  "'self' https://formspree.io https://yawfuqmqrijhyphnhtjj.supabase.co"
);
const demoCrmCsp = buildCsp(`'self' ${demoCrmSupabase}`);

const securityHeaders = [
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
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];


const nextConfig = {
  async headers() {
    return [
      {
        source: "/((?!demo/crm).*)",
        headers: [
          ...securityHeaders,
          { key: "Content-Security-Policy", value: siteCsp },
        ],
      },
      {
        source: "/demo/crm/:path*",
        headers: [
          ...securityHeaders,
          { key: "Content-Security-Policy", value: demoCrmCsp },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      { source: "/demo/crm", destination: `${demoCrmOrigin}/demo/crm` },
      {
        source: "/demo/crm/:path*",
        destination: `${demoCrmOrigin}/demo/crm/:path*`,
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
