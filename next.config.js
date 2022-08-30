/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["i.ibb.co", "upload.wikimedia.org", "www.vectorlogo.zone"],
  },
};

module.exports = nextConfig;
