/** @type {import('next').NextConfig} */
var authDomain = require("./model/ServerSideDB/config.json").authDomain
const runtimeCaching = require("next-pwa/cache")
const withPWA = require("next-pwa")
// const withPWA = require("next-pwa")({
//     dest: "public",
//     register:true,
//     skipWaiting:true,
//     runtimeCaching,
//     buildExcludes: [/middleware-manifest.json$/]
// });
const NextConfig = {
    images: {
        domains: [authDomain],
    },
};
module.exports = {
    ...NextConfig,
    ...withPWA({
        pwa: {
            dest: "public",
            register: true,
            skipWaiting: true,
            runtimeCaching,
            buildExcludes: [/middleware-manifest.json$/],
            disable: process.env.NODE_ENV === "development",
        },
    }),
    webpack: (config) => {
        config.resolve.fallback = {...config.resolve.fallback, fs: false};
        return config;
    },
};
