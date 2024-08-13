import { decryptData } from '@/utils/crypto'

export default function getToken() {
    const data = JSON.parse(decryptData(localStorage.getItem('user') as string) as string)
    return data
}
