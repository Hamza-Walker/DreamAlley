/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;

export const webpack = (config, { isServer }) => {
 if (!isServer) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify")
    };
 }

 return config;
};

