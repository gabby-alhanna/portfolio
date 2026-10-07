import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: "export",
  // Apply /portfolio subpath only when running inside GitHub Actions
  basePath: isGithubActions ? "/portfolio" : "",
  assetPrefix: isGithubActions ? "/portfolio/" : "",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;