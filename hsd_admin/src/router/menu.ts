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
    // {
    //     path: 'visit',
    //     name: 'visit',
    //     meta: {
    //         title: '预约访校',
    //         icon: 'Management',
    //         hidden: false,
    //     },
    //     children: [
    //         {
    //             path: 'orderInfo',
    //             name: 'orderInfo',
    //             component: () => import('@/views/orderInfo/orderInfo.vue'),
    //             meta: {
    //                 title: '预约信息',
    //                 icon: 'Odometer',
    //                 hidden: false,
    //             },
    //         },
    //         {
    //             path: 'applyInfo',
    //             name: 'applyInfo',
    //             component: () => import('@/views/applyInfo/applyInfo.vue'),
    //             meta: {
    //                 title: '报名信息',
    //                 icon: 'Odometer',
    //                 hidden: false,
    //             },
    //         },
    //         {
    //             path: 'applyItem',
    //             name: 'applyItem',
    //             component: () => import('@/views/applyItem/applyItem.vue'),
    //             meta: {
    //                 title: '报名项目',
    //                 icon: 'Odometer',
    //                 hidden: false,
    //             },
    //         },
    //     ],
    // },
    // {
    //     path: 'banner',
    //     name: 'banner',
    //     component: () => import('@/views/banner/banner.vue'),
    //     meta: {
    //         title: 'banner',
    //         icon: 'Picture',
    //         hidden: false,
    //     },
    // },
    {
        path: 'appointment',
        name: 'appointment',
        component: () => import('@/views/appointment/appointment.vue'),
        meta: {
            title: '预约访校',
            icon: 'Management',
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
        path: 'campusStyle',
        name: 'campusStyle',
        meta: {
            title: '校园风采',
            icon: 'OfficeBuilding',
            hidden: false,
        },
        children: [
            {
                path: 'environment',
                name: 'environment',
                component: () => import('@/views/campusStyle/environment/environment.vue'),
                meta: {
                    title: '校园环境',
                    icon: 'Odometer',
                    hidden: false,
                },
            },
            {
                path: 'schoolType',
                name: 'schoolType',
                component: () => import('@/views/campusStyle/schoolType/schoolType.vue'),
                meta: {
                    title: '环境类型',
                    icon: 'Odometer',
                    hidden: false,
                },
            },
        ],
    },
    {
        path: 'news',
        name: 'news',
        meta: {
            title: '新闻管理',
            icon: 'Reading',
            hidden: false,
        },
        children: [
            {
                path: 'list',
                name: 'newsList',
                component: () => import('@/views/news/list/index.vue'),
                meta: {
                    title: '新闻列表',
                    icon: 'Reading',
                    hidden: false,
                },
                children: [
                    {
                        path: 'editNews',
                        name: 'editNews',
                        component: () => import('@/views/news/add/add.vue'),
                        meta: {
                            title: '编辑文章',
                            icon: 'Reading',
                            hidden: true,
                        },
                    },
                    {
                        path: 'preViewNews',
                        name: 'preViewNews',
                        component: () => import('@/views/news/list/preView/preView.vue'),
                        meta: {
                            title: '编辑文章',
                            icon: 'Reading',
                            hidden: true,
                        },
                    },
                ],
            },
            {
                path: 'addNews',
                name: 'addNews',
                component: () => import('@/views/news/add/add.vue'),
                meta: {
                    title: '新增文章',
                    icon: 'Odometer',
                    hidden: false,
                },
            },
        ],
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
