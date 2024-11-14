import http from '@/axios/http'

// 查询
export const getInfo = (params: any) => {
    return http.get('/icon/student/information/queryByPage', params)
}
