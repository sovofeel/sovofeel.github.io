
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Export as static HTML
  distDir: "dist", // Output to dist folder
  images: {
    unoptimized: true, // Required for static export
    domains: ["placeholder.svg"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.svg",
        port: "",
        pathname: "**",
      },
    ],
  },
  // Handle GitHub Pages path prefix
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || ""
}

export default nextConfig