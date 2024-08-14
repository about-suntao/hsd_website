import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LayoutVue from '@/components/layouts/Layout.vue'
import BaseRouter from './base'
import MenuRouter from './menu'

const routes: Array<RouteRecordRaw> = [
    // 后台管理系统的路由
    {
        path: '/',
        name: 'layout',
        component: LayoutVue,
        children: [...MenuRouter],
    },
    // 基础路由
    ...BaseRouter,
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
// 路由守卫
router.beforeEach((to, _from, next) => {
    if (to.path == '/login') {
        // 登录或者注册才可以往下进行
        next()
    } else {
        // 获取 token
        const token = localStorage.getItem('Authorization')
        // token 不存在
        if (token === null || token === '') {
            ElMessage.error('请先登录')
            next('/login')
        } else {
            next()
        }
    }
})

export default router
