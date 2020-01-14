import request from '@/utils/httpInvoker';
import { api } from '@/utils/helperUtils';
import { stringify } from 'qs';

 
//编辑
async function edit(params){
    return request(`${api}/hi/main?hi=24B6OD8ON1LB`,{
        method:"POST",
        body:params
    })
}
 
//查详情
async function getDetail(params){
    return request(`${api}/hi/main?hi=24B6OD8ON1KX&${stringify(params)}`)
}


export default {
    edit,getDetail
}