import request from '@/utils/httpInvoker';
import { stringify } from 'qs';

//列表
async function list(params){
    //return request(`/api/hi/main?${encodeURIComponent(`hi=24AXRBU571BH?${stringify(params)}`)}`)
    return request(`/api/hi/main?hi=24B5CDRDFOZI&${stringify(params)}`)
}
//添加
async function changeStatus(params){
  
    return request('/api/hi/main?hi=24B5CDRDFOZS',{
        method:"POST",
        body:params
    })
}
 

export default {
    list,changeStatus
}