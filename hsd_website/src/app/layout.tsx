import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/styles/globals.css'
import '../../public/fonts/fonts.scss'
import { AntdRegistry } from '@ant-design/nextjs-registry';
// swiper 插件
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '华盛达外语学校融合部',
  description: '华盛达外语学校融合部',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: 'https://icon-hsd.oss-cn-hangzhou.aliyuncs.com/2024/07/02/238_logo(1).ico',
    shortcut: 'https://icon-hsd.oss-cn-hangzhou.aliyuncs.com/2024/07/02/238_logo(1).ico',
    apple: 'https://icon-hsd.oss-cn-hangzhou.aliyuncs.com/2024/07/02/238_logo(1).ico',
    other: {
      rel: 'https://icon-hsd.oss-cn-hangzhou.aliyuncs.com/2024/07/02/238_logo(1).ico',
      url: 'https://icon-hsd.oss-cn-hangzhou.aliyuncs.com/2024/07/02/238_logo(1).ico',
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  )
}
