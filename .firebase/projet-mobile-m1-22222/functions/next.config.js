"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// model/ServerSideDB/config.json
var require_config = __commonJS({
  "model/ServerSideDB/config.json"(exports2, module2) {
    module2.exports = {
      dbURL: "https://projet-mobile-m1-22222-default-rtdb.europe-west1.firebasedatabase.app/",
      apiKey: "AIzaSyDK0dJw7_eizeBdsopEKf-IWPtlqjRKH-E",
      authDomain: "projet-mobile-m1-22222.firebaseapp.com",
      projectId: "projet-mobile-m1-22222",
      bucket: "projet-mobile-m1-22222.appspot.com",
      senderId: "95370679054",
      appId: "1:95370679054:web:395cfebdf729d5730e7d5f"
    };
  }
});

// next.config.js
var authDomain = require_config().authDomain;
var runtimeCaching = require("next-pwa/cache");
var withPWA = require("next-pwa");
var NextConfig = {
  images: {
    domains: [authDomain]
  }
};
module.exports = {
  ...NextConfig,
  ...withPWA({
    reactStrictMode: true,
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      runtimeCaching,
      buildExcludes: [/middleware-manifest.json$/],
      disable: process.env.NODE_ENV === "development"
    }
  }),
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    return config;
  }
};
