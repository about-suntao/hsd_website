import http from '@/axios/http'

// 文章

// 新增资讯文章
export const addNews = (params: any) => {
    return http.post('/icon/news/add', params)
}

// 查询新闻资讯列表
export const getNewsList = (params: any) => {
    return http.get('/icon/news/queryByPage', params)
}

// 删除新闻类型
export const delNews = (params: any) => {
    return http.del(`/icon/news/deleteById?id=${params}`)
}

// 发布撤回新闻资讯
export const changeNewsStatus = (params: any) => {
    return http.put('/icon/news/push/article', params)
}

// 编辑文章

// 查询新闻资讯详情
export const getNewsDetail = (id: any) => {
    return http.get(`/icon/news/${id}`)
}

// 修改新闻资讯
export const editNews = (params: any) => {
    return http.put('/icon/news/edit', params)
}
