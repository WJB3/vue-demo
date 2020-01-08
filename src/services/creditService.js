import request from '@/utils/httpInvoker';
import { api } from '@/utils/helperUtils';
import { stringify } from 'qs';

//列表
async function list(params){
    //return request(`/api/hi/main?${encodeURIComponent(`hi=24AXRBU571BH?${stringify(params)}`)}`)
    return request(`${api}/hi/main?hi=24B6OD8OMXG9&${stringify(params)}`)
}
 
//添加
async function changeStatus(params){
  
    return request(`${api}/hi/main?hi=24B6OD8OMXH0`,{
        method:"POST",
        body:params
    })
}
 

export default {
    list ,
    changeStatus
}