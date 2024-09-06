
module.exports= {
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        return config
    },
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['p16-sign-sg.tiktokcdn.com', 'localhost'],
        deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        unoptimized: true
    }
}