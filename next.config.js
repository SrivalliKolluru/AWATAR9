const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
// Trigger build - 2026-03-03
const nextConfig = {
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
