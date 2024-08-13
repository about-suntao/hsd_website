/** @type {import('next').NextConfig} */
const nextConfig = {
    // 关闭严格模式 不关闭开发环境会触发两次请求
    reactStrictMode: false,
    sassOptions: {
        prependData: "@import '@/assets/styles/globals.scss';",
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
}

module.exports = nextConfig
