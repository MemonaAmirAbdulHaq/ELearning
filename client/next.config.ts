import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    turbo: false, // disable Turbopack
  },
  images:{
    domains:['res.cloudinary.com']
  },
};

export default nextConfig;
