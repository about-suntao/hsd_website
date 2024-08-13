import CryptoJS from 'crypto-js'
//密钥
const secretKey = 'bitALevel12D4C6G'

// 加密函数
export const encryptData = (data: string): string | null => {
    try {
        const iv = CryptoJS.lib.WordArray.random(16) // 生成随机 IV
        const ciphertext = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(secretKey), {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        }).toString()

        // 将 IV 和密文组合在一起
        const encryptedData = iv.toString(CryptoJS.enc.Hex) + ':' + ciphertext
        return encryptedData
    } catch (error) {
        console.error('加密错误:', error)
        return null
    }
}
// 解密函数
export const decryptData = (encryptedData: string): string | null => {
    try {
        const parts = encryptedData.split(':')
        const iv = CryptoJS.enc.Base64.parse(parts[0])
        const ciphertext = parts[1]

        const bytes = CryptoJS.AES.decrypt(ciphertext, CryptoJS.enc.Utf8.parse(secretKey), {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        })
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
        return decryptedData
    } catch (error) {
        console.error('解密错误:', error)
        return null
    }
}
