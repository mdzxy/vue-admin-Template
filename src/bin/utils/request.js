/*
 * @Author: mzdxy 
 * @Date: 2018-09-11 11:42:21 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-11 11:51:28
 */

 // 配置符合restful API的传参方式的请求

 import axios from 'axios'
 import querystring from 'querystring'

 var service = axios.create({
   baseURL: process.env.BASE_API, //api的base_url
   timeout: 50000,
   transformRequest: [function (data) {
     return querystring.stringify(data)
   }]
 })

 // 请求拦截器
 service.interceptors.request.use(config => {
   // 在这里配置一些请求头或者拦截处理之类的
   config.headers['Content-Type'] = 'application/json; charset=UTF-8'
   return config
 }, error => {
   return Promise.reject(error)
 })

 // 响应拦截器
 service.interceptors.response.use(response => {
   // 这里做返回数据处理
   const res = response.data
   const status = response.status
   return res
 }, error => {
   alert(error.message)
   return Promise.reject(error)
 })

 export default service