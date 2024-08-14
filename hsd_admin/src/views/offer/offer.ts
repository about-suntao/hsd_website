import http from '@/axios/http'

// 查询
export const getOffer = (params: any) => {
    return http.get('/icon/study/case/queryByPage', params)
}

// 新增
export const addOffer = (params: any) => {
    return http.post('/icon/study/case/add', params)
}

// 修改
export const editOffer = (params: any) => {
    return http.put('/icon/study/case/edit', params)
}

// 删除
export const delOffer = (params: any) => {
    return http.del('/icon/study/case/deleteById', params)
}
