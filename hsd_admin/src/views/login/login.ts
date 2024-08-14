import http from '@/axios/http'

export const Login = (data: any) => {
    return http.post('/icon/sysUser/login', data)
}
