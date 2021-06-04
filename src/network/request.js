import axios from 'axios'

export function request(config) {
    return new Promise((resolve, reject) => {
        //创建一个请求示例并封装
        const instance = axios.create({
            baseURL: 'http://121.4.100.93:8081', //测试接口
            timeout: 5000
        })

        instance(config).then(value => {
            resolve(value)
        }, reason => {
            reject(reason)
        })
    })
}