import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const baseConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false,
};

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(baseConfig);

export default nextConfig;
