const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Disabled to allow use of API routes/backend
    basePath: isProd ? '/AWATAR9' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
