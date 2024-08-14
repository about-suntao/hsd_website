import http from '@/axios/http'

// 查询
export const getInfo = (params: any) => {
    return http.get('/icon/order/queryByPage', params)
}

// 查询报名项目
export const getItemInfo = (params: any) => {
    return http.get('/icon/item/queryByPage', params)
}

// 查询详情
export const getDetail = (id: any) => {
    return http.get(`/icon/signUp/${id}`)
}

// 查询退款记录
export const getRefundRecord = (id: any) => {
    return http.get(`/icon/order/refund/record/${id}`)
}

// 退款
export const refundOrder = (params: any) => {
    return http.post('/icon/order/check/refund', params)
}

// 完成订单
export const completeOrder = (params: any) => {
    return http.put('/icon/order/complete/order', params)
}

// 删除
export const delInfo = (params: any) => {
    return http.del('/icon/sysUser/deleteById', params)
}
