import axios from 'axios'
import config from './config'
import router from '@/router'

// 1、创建实例
const service = axios.create({
    baseURL: config.baseUrl,
    timeout: 120 * 1000,
})
// 2.请求拦截器
service.interceptors.request.use(
    (config) => {
        if (config.method === 'get' && !config.data) {
            config.data = true
        }
        if (!config.headers['Content-Type']) {
            config.headers['Content-Type'] = 'application/json'
        }
        const token = JSON.parse(localStorage.getItem('Authorization') as string)

        if (token) {
            config.headers['Token'] = token.token
        }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

let isTokenExpired = false

const errorList: any = {
    10001: '身份验证失效，请重新登录',
    10003: '身份过期,请重新登录',
    10007: '您的账户已在其他设备登录，非本人操作请及时修改密码',
}

// 3.响应拦截器
service.interceptors.response.use(
    (res) => {
        if (res.data?.code) {
            if (errorList[res.data.code]) {
                if (!isTokenExpired) {
                    isTokenExpired = true
                    ElMessage.error(errorList[res.data.code])
                    router.replace('/login').then(() => {
                        isTokenExpired = false
                    })
                }
            } else if (res.data.code !== 200) {
                ElMessage.error(res.data.message)
            }
            return res.data
        } else {
            return res
        }
    },
    (error) => {
        if (error.request?.status === 500) {
            ElMessage.error('服务器错误')
        }
        if (error.code === 'ERR_NETWORK') {
            ElMessage.error('请求超时，请重试')
        }
        return Promise.resolve(error.response)
    }
)
//4.导出实例
export default service
