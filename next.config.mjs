/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export" removed — API routes (app/api/) require server runtime.
  // All existing pages continue to render identically on Vercel.
  trailingSlash: true,         // emits /about/index.html (matches your city-page folders)
  images: { unoptimized: true },
  reactStrictMode: true,
  // The original project is loosely typed (esbuild, strict:false). Keep that:
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
