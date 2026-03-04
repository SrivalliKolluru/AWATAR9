const isProd = process.env.NODE_ENV === 'production';
const BASE_PATH = isProd ? '/AWATAR9' : '';

/** @type {import('next').NextConfig} */
// Trigger build - 2026-03-03
const nextConfig = {
    output: 'export',
    basePath: isProd ? '/AWATAR9' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
