/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Build plain HTML into /out so the site can be hosted as a static site (e.g. Render).
  output: "export",
  // Emit /lineage/index.html instead of /lineage.html so clean URLs work on any static host.
  trailingSlash: true,
};

export default nextConfig;
