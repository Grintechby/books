/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig;

module.exports = {
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
};

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          "fs": false,
          "path": false,
          "os": false,
        }
      }
      return config
    },
  }
}
