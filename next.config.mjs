/** @type {import('next').NextConfig} */
const nextConfig = {
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