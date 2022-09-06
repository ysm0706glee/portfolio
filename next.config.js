/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "www.vectorlogo.zone",
      "media.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
