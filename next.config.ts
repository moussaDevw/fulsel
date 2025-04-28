import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Commenté pour permettre les routes dynamiques
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  /* config options here */
};

export default nextConfig;
