import { encryptData, decryptData } from '@/utils/crypto'
import getToken from './getToken'

const fetchRequest = {
    // baseUrl: 'https://back.hsd-elite.org',
    baseUrl: 'http://192.168.111.87:8089',

    get: (url: string, params?: any) => {
        const searchParams = params ? new URLSearchParams(params).toString() : ''
        const requestUrl = searchParams
            ? `${fetchRequest.baseUrl}${url}?${searchParams}`
            : `${fetchRequest.baseUrl}${url}`
        return fetch(requestUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`)
                }
                return response.json()
            })
            .catch((error) => {
                throw error
            })
    },
    post: (url: string, params?: any, methods?: any) => {
        const head = { 'Content-Type': 'application/json' }
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: methods ? methods : head,
            body: params ? JSON.stringify(params) : undefined,
        }

        return fetch(`${fetchRequest.baseUrl}${url}`, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`)
                }
                return response.json()
            })
            .catch((error) => {
                throw error
            })
    },
    postAes: (url: string, params?: any, methods?: any) => {
        const token = getToken()?.token || null
        const head = { 'Content-Type': 'application/json', token: token }
        //加密
        const data: any = JSON.stringify({
            ciphertext: encryptData(JSON.stringify(params)),
        })
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: methods ? methods : head,
            body: params ? data : undefined,
        }

        return fetch(`${fetchRequest.baseUrl}${url}`, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`)
                }
                return response.json()
            })
            .catch((error) => {
                throw error
            })
    },
}

export default fetchRequest
