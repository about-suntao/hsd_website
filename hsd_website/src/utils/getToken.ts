import { decryptData } from '@/utils/crypto'
export default function getToken() {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem('user') ? (decryptData(localStorage.getItem('user') as any) as any) : null
    } else {
        return null
    }
}
