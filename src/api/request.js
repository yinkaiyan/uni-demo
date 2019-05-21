

import {baseUrl} from '../common/whole.js';

//引入fly实例
var fly=require("flyio");
//添加请求拦截器
fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    request.headers["Content-Type"]="application/json";
    //打印出请求体
    console.log(request.body);
    return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        console.log(response);
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        console.log(err);
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
);

export const postRequest = (Interface,data) => {
    return fly.post(baseUrl+Interface, {
        data: data,
    })
    // .then(function (response) {
    //     console.log(response);
    // })
};
