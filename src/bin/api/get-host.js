/*
 * @Author: mdzxy 
 * @Date: 2018-09-11 11:34:59 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-11 11:42:47
 */

 export function develop() {
   if (process.env.PROFILE_ACTIVE === 'dev') {
     return 'http://dev/api/' //开发环境地址
   } else if (process.env.PROFILE_ACTIVE === 'test') {
     return 'http://test/api/' //测试环境地址
   } else if (process.env.PROFILE_ACTIVE === 'prod') {
     return 'http://prod/api/' //生产环境地址
   }
 }