/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export" removed — API routes (app/api/) require server runtime.
  // All existing pages continue to render identically on Vercel.
  // trailingSlash removed — causes redirect loops on Cloudflare Workers.
  images: { unoptimized: true },
  reactStrictMode: true,
  // The original project is loosely typed (esbuild, strict:false). Keep that:
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;
