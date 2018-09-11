/*
 * @Author: mdzxy 
 * @Date: 2018-09-11 11:51:44 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-11 11:56:02
 */

import request from '@/bin/utils/request'
import requestJson from '@/bin/utils/request-json'
import {
    develop
} from '@/bin/api/environment'
let STATICDOMAIN = develop();


// get请求例子
export function getList (params) {
  return request({
    url: STATICDOMAIN + 'xxx/get',
    method: 'get',
    params: params
  })
}

// post请求例子
export function addRecord (data) {
  return request({
    url: STATICDOMAIN + 'xxx/add',
    method: 'post',
    data
  })
}

// 使用json方式传参例子

export function addJson (data) {
  return requestJson({
    url: STATICDOMAIN + 'xxx/addJson',
    method: 'post',
    data
  })
}