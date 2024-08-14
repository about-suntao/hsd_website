import { RouteRecordRaw } from 'vue-router'

// 根据当前路由生成菜单

const MenuRouter: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'dashboard',
        redirect: '/visit/orderInfo',
        meta: {
            title: '仪表盘',
            icon: 'Odometer',
            hidden: true,
        },
    },
    {
        path: 'visit',
        name: 'visit',
        meta: {
            title: '预约访校',
            icon: 'Management',
            hidden: false,
        },
        children: [
            {
                path: 'orderInfo',
                name: 'orderInfo',
                component: () => import('@/views/orderInfo/orderInfo.vue'),
                meta: {
                    title: '预约信息',
                    icon: 'Odometer',
                    hidden: false,
                },
            },
            {
                path: 'applyInfo',
                name: 'applyInfo',
                component: () => import('@/views/applyInfo/applyInfo.vue'),
                meta: {
                    title: '报名信息',
                    icon: 'Odometer',
                    hidden: false,
                },
            },
            {
                path: 'applyItem',
                name: 'applyItem',
                component: () => import('@/views/applyItem/applyItem.vue'),
                meta: {
                    title: '报名项目',
                    icon: 'Odometer',
                    hidden: false,
                },
            },
        ],
    },
    {
        path: 'banner',
        name: 'banner',
        component: () => import('@/views/banner/banner.vue'),
        meta: {
            title: '首页banner',
            icon: 'Picture',
            hidden: false,
        },
    },
    {
        path: 'team',
        name: 'team',
        component: () => import('@/views/team/team.vue'),
        meta: {
            title: '师资团队',
            icon: 'Histogram',
            hidden: false,
        },
    },
    {
        path: 'offer',
        name: 'offer',
        component: () => import('@/views/offer/offer.vue'),
        meta: {
            title: '升学案例',
            icon: 'Star',
            hidden: false,
        },
    },
    {
        path: 'campusStyle',
        name: 'campusStyle',
        component: () => import('@/views/campusStyle/campusStyle.vue'),
        meta: {
            title: '校园风采',
            icon: 'OfficeBuilding',
            hidden: false,
        },
    },
    {
        path: 'problem',
        name: 'problem',
        component: () => import('@/views/problem/problem.vue'),
        meta: {
            title: '常见问题',
            icon: 'QuestionFilled',
            hidden: false,
        },
    },
    {
        path: 'news',
        name: 'news',
        component: () => import('@/views/news/news.vue'),
        meta: {
            title: '新闻资讯',
            icon: 'Document',
            hidden: false,
        },
    },
    {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/admin/admin.vue'),
        meta: {
            title: '账户管理',
            icon: 'User',
            hidden: false,
        },
    },
]

export default MenuRouter
