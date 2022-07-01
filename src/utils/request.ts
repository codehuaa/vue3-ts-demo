import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: "https://www.fastmock.site/mock/91ddbdcaaa391f363521686e5ddaad06/vue3-ts-demo",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})

// 请求拦截
service.interceptors.request.use(config => {
    // console.log("config: ", config)
    
    // 可在此处添加token
    config.headers = config.headers || {}
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token') || ""
    }

    return config
})


// 相应拦截
service.interceptors.response.use(res => {
    // console.log("res: ", res)

    const code:number = res.data.code
    if (code != 200) {
        return Promise.reject(res.data)
    } else {
        return res.data
    }
}, err => {
    console.log(err);
})

export default service