import request from '@/utils/httpInvoker';
import { api } from '@/utils/helperUtils';
import { stringify } from 'qs';

//列表
async function list(params){
    //return request(`/api/hi/main?${encodeURIComponent(`hi=24AXRBU571BH?${stringify(params)}`)}`)
    return request(`${api}/hi/main?hi=24B6OD8ON5QG&${stringify(params)}`)
}
//添加
async function add(params){
  
    return request(`${api}/hi/main?hi=24B6OD8ON5PG`,{
        method:"POST",
        body:params
    })
}
//编辑
async function edit(params){
    return request(`${api}/hi/main?hi=24B6OD8ON5PR`,{
        method:"POST",
        body:params
    })
}
//删除
async function deleteArticle(params){
    return request(`${api}/hi/main?hi=24B6OD8ON5Q2`,{
        method:"POST",
        body:params
    })
}

export default {
    list,add,edit,deleteArticle
}