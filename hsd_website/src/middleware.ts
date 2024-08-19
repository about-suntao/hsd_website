import { NextRequest, NextResponse } from 'next/server'

// 中间件
export function middleware(req: NextRequest) {
    // 判断是否登录
    const token = req.cookies.get('token')
    if (!token) {
        const loginUrl = new URL('/login', req.url)
        return NextResponse.redirect(loginUrl)
    }
    return NextResponse.next()
}

export const config = {
    //匹配执行路由
    matcher: ['/dashboard/:path*', '/visit/:path*', '/selectProject/:path*', '/apply/:path*', '/search/:path*'],
}
