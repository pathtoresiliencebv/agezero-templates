/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  async rewrites() {
    return [
      // Map / and any subpath (except _next, api, files) to /templates/...
      { source: "/", destination: "/templates" },
      { source: "/:path(.*)", destination: "/templates/:path" },
    ];
  },
};
export default nextConfig;
