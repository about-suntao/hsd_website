import http from '@/axios/http'

// 查询
export const getInfo = (params: any) => {
    return http.get('/icon/people/queryByPage', params)
}

// 查询类型
export const getTypeInfo = (params: any) => {
    return http.get('/icon/team/queryAll', params)
}

// 新增
export const addInfo = (params: any) => {
    return http.post('/icon/people/add', params)
}

// 修改
export const editInfo = (params: any) => {
    return http.put('/icon/people/edit', params)
}

// 删除
export const delInfo = (params: any) => {
    return http.del('/icon/people/deleteById', params)
}
