/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["photos.app.goo.gl"], // Add the external image domain here
  },
  webpack: {
    configure: (config) => {
      config.module.rules.push({
        test: /\.js$/,
        loader: "swc-loader",
      });
    },
  },
};

module.exports = nextConfig;
