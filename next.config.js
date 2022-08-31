/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "i.ibb.co",
      "media.graphassets.com",
      "apps.apple.com",
      "mymizu-neptune.herokuapp.com",
      "upload.wikimedia.org",
      "www.vectorlogo.zone",
    ],
  },
};

module.exports = nextConfig;
