import request from '@/utils/httpInvoker';
import { api } from '@/utils/helperUtils';
import { stringify } from 'qs';

//列表
async function list(params){
    //return request(`/api/hi/main?${encodeURIComponent(`hi=24AXRBU571BH?${stringify(params)}`)}`)
    return request(`${api}/hi/main?hi=24B6OD8ON5Q6&${stringify(params)}`)
}
//添加
async function add(params){
  
    return request(`${api}/hi/main?hi=24B6OD8ON5OU`,{
        method:"POST",
        body:params
    })
}
//编辑
async function edit(params){
    return request(`${api}/hi/main?hi=24B6OD8ON5P7`,{
        method:"POST",
        body:params
    })
}
//删除
async function deleteLesson(params){
    return request(`${api}/hi/main?hi=24B6OD8ON5PC`,{
        method:"POST",
        body:params
    })
}

//查详情
async function getDetail(params){
    return request(`${api}/hi/main?hi=24AXRBU571II&${stringify(params)}`)
}


export default {
    list,add,edit,deleteLesson,getDetail
}