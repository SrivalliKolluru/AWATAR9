const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
// Trigger build - 2026-03-03
const nextConfig = {
    output: 'export', // Enabled for GitHub Pages deployment
    basePath: isProd ? '/AWATAR9' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
