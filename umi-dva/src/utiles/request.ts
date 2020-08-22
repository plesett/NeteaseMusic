/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/axios/axios
 *
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { config } from '@/config'
import { notification } from 'antd';

export const service = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? config.HOST_URL_SOURCE : config.HOST_URL
})

// 拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
    config.data = Object.assign({}, config.data, {
        Authorization: localStorage.getItem('token')
    })
    return config
})

service.interceptors.response.use((resp: AxiosResponse) => {
    if (resp.status === 200) {
        return resp.data
    } else {
        // 全局 异常处理
        notification['error']({
            message: '接口请求失败',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    }
})
