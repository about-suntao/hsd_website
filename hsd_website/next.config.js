/** @type {import('next').NextConfig} */
const nextConfig = {
    // 关闭严格模式 不关闭开发环境会触发两次请求
    reactStrictMode: false,
    sassOptions: {
        prependData: "@import '@/assets/styles/globals.scss';",
    },
    experimental: {
        outputFileTracing: true, // 减少不必要的文件处理
    },
    // 配置阿里云oss图片链接
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'icon-apply.oss-cn-hangzhou.aliyuncs.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'icon-hsd.oss-cn-hangzhou.aliyuncs.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    webpack(config) {
        config.optimization.minimizer.forEach((minimizer) => {
            if (minimizer.constructor.name === 'TerserPlugin') {
                minimizer.options.parallel = 2 // 减少线程数
            }
        })
        return config
    },
}

module.exports = nextConfig
