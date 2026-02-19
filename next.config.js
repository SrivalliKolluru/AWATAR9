const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enabled for GitHub Pages deployment
    basePath: isProd ? '/AWATAR9' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
