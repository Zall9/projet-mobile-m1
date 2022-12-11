/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});
const NextConfig = {
  images: {
    domains: ["localhost"],
  },
  sass: true,
  modules: true,
};
module.exports = withPWA({
  ...NextConfig,
});
