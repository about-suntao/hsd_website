import http from '@/axios/http'

// 查询
export const getInfo = (params: any) => {
    return http.get('/icon/item/queryByPage', params)
}

// 新增
export const addInfo = (params: any) => {
    return http.post('/icon/item/add', params)
}

// 修改
export const editInfo = (params: any) => {
    return http.put('/icon/item/edit', params)
}

// 删除
export const delInfo = (params: any) => {
    return http.del('/icon/item/deleteById', params)
}
