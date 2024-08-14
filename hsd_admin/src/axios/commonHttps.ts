import http from '@/axios/http'

// 图片上传接口
export const uploadImg = (file: any) => {
    return http.post('/oos/upload', file, { headers: { 'Content-Type': 'multipart/form-data' } })
}
