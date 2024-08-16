import http from '@/axios/http'

// 分页查询
export const getInfo = (params: any) => {
    return http.get('/icon/environment/queryByPage', params)
}

export const getTypeInfo = (params: any) => {
    return http.get('/icon/environment/type/queryByPage', params)
}

// 新增
export const addInfo = (params: any) => {
    return http.post('/icon/environment/add', params)
}

// 修改
export const editInfo = (params: any) => {
    return http.put('/icon/environment/edit', params)
}

// 删除
export const delInfo = (params: any) => {
    return http.del('/icon/environment/deleteById', params)
}
