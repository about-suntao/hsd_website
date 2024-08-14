import { RouteRecordRaw } from 'vue-router'

// 基础路由
const BaseRouter: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
        meta: {
            title: '登录',
            icon: '',
            hidden: true,
        },
    },
]

export default BaseRouter
