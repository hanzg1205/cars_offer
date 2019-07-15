import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: '',
    // withCredentials: true, // 跨域请求时发送 cookies
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    // config => {
    //     // 判断是否有登录态
    //     if(getToken()){
    //         // 让每个请求者都携带token
    //         config.headers['authorization'] = getToken()
    //     }
    //     return config;
    // },
    // error => {
    //     return Promise.reject(error)
    // }
)

// response interceptor
service.interceptors.response.use(
    (response:any) => response.data,
    (error:any) => {
        return Promise.reject(error)
    }
)

export default service