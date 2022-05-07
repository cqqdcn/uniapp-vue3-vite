import { request } from './axios.ts'

/**
 * @description -封装User类型的接口方法
 */
export class UserService {       // 模块一
    /**
     * @description 用户登录
     * @param {string} username - 用户名
     * @return {HttpResponse} result
     */
    static async login1(params) {   // 接口一
        return request('/data.php?type=banner', params, 'get')
    }
    static async login2(url,params) {   // 接口二
        return request(url,params, 'get')
    }
    static async login3(params) {   // 接口三
        return request('api/profiles/category',params, 'get')
    }
}

export class landRelevant {     // 模块二
    /**
     * @description 获取地列表
     * @return {HttpResponse} result
     */
    static async landList(url) {
        return request(url, 'get')
    }
}
