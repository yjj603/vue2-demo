import axios from 'axios'
import {Message} from 'element-ui'

axios.defaults.baseURL = '/api/';
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
// 请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么，例如加入token
    return config
}, function (error) {
    // 对请求错误做些什么
    return error
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
    // 在接收响应做些什么，例如跳转到登录页
    if (response.data.code !== 200) {
        Message({
            message: '出错了',
            type: 'warning'
        })
    }
    return response.data
}, function ({response}) {
    Message({
        message: '出错了',
        type: 'error'
    })
    // 对响应错误做点什么
    return response
})
export default {
    install: function (Vue) {
        Vue.prototype.$axios = axios
    }
}