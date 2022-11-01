/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public"
});
const NextConfig = {
  images: {
    domains: ["localhost"]
  },
  sass: true,
  modules: true
};
module.exports = {
  ...withPWA,
  ...NextConfig,
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = {...config.resolve.fallback, fs: false}
    return config
  }
};
