import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    const token = req.cookies.get('token')

    // 处理路径重定向逻辑：如果路径不包含 /zh 或 /en
    if (!pathname.startsWith('/zh') && !pathname.startsWith('/en')) {
        const url = req.nextUrl.clone()

        // // 获取用户的语言设置
        // const userLang = req.headers.get('accept-language') || 'en'

        // if (userLang.startsWith('zh')) {
        //     url.pathname = `/zh${pathname}`
        // } else {
        //     url.pathname = `/en${pathname}`
        // }

        url.pathname = `/en${pathname}`

        return NextResponse.redirect(url)
    }

    // 登录验证逻辑：仅对特定路由进行验证
    if (['/dashboard', '/visit', '/selectProject', '/apply', '/search'].some((route) => pathname.startsWith(route))) {
        if (!token) {
            const loginUrl = new URL('/login', req.url)
            return NextResponse.redirect(loginUrl)
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/visit/:path*',
        '/selectProject/:path*',
        '/apply/:path*',
        '/search/:path*',
        '/((?!_next/static|_next/image|favicon.ico).*)', // 匹配其他需要处理语言重定向的路径
    ],
}
