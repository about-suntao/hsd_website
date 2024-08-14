import service from './request'

const post = (url: string, data: any, header?: any) => {
    return new Promise((resolve, reject) => {
        service
            .post(url, data, header)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

const get = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
        service
            .get(url, { params })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

const put = (url: string, data: any) => {
    return new Promise((resolve, reject) => {
        service
            .put(url, data)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

const del = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
        service
            .delete(url, { params })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export default {
    post,
    get,
    put,
    del,
}
