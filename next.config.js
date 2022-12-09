/** @type {import('next').NextConfig} */
var authDomain = require("./model/ServerSideDB/config.json").authDomain
const withPWA = require("next-pwa")({
    dest: "public",
});
const NextConfig = {
    images: {
        domains: [authDomain],
    },
};
module.exports = {
    ...withPWA,
    ...NextConfig,
    webpack: (config) => {
        config.resolve.fallback = {...config.resolve.fallback, fs: false};
        return config;
    },
};
