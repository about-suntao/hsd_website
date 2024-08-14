const config: any = {
    baseUrl: '',
    socketUrl: '',
}

if (process.env.NODE_ENV === 'development') {
    config.baseUrl = 'http://192.168.111.87:8089'
} else if (process.env.NODE_ENV === 'production') {
    config.baseUrl = 'https://back.hsd-elite.org'
}

export default config
