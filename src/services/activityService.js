import request from '@/utils/httpInvoker';
import { stringify } from 'qs';

//列表
async function list(params){
    //return request(`/api/hi/main?${encodeURIComponent(`hi=24AXRBU571BH?${stringify(params)}`)}`)
    return request(`/api/hi/main?hi=24AYONUCZRGQ&${stringify(params)}`)
}
//添加
async function add(params){
  
    return request('/api/hi/main?hi=24AYONUCZRG8',{
        method:"POST",
        body:params
    })
}
//编辑
async function edit(params){
    return request('/api/hi/main?hi=24AYONUCZRGK',{
        method:"POST",
        body:params
    })
}
//删除
async function deleteActivity(params){
    return request('/api/hi/main?hi=24AYONUCZRGY',{
        method:"POST",
        body:params
    })
}

//查详情
async function getDetail(params){
    return request(`/api/hi/main?hi=24AXRBU571II&${stringify(params)}`)
}


export default {
    list,add,edit,deleteActivity,getDetail
}