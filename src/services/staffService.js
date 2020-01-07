import request from '@/utils/httpInvoker';
import { stringify } from 'qs';

/*
 * 已审核
 */
async function list(params){
    //return request(`/api/hi/main?${encodeURIComponent(`hi=24AXRBU571BH?${stringify(params)}`)}`)
    return request(`/api/hi/main?hi=24AXRBU571BH&${stringify(params)}`)
}

/*
 * 审核不通过
 */
async function no_audit_list(params){
    //return request(`/api/hi/main?${encodeURIComponent(`hi=24AXRBU571BH?${stringify(params)}`)}`)
    return request(`/api/hi/main?hi=24B1PXVN40EA&${stringify(params)}`)
}

/*
 * 待审核
 */
async function wait_audit_list(params){
    //return request(`/api/hi/main?${encodeURIComponent(`hi=24AXRBU571BH?${stringify(params)}`)}`)
    return request(`/api/hi/main?hi=24B1PXVN40DU&${stringify(params)}`)
}

async function audit(params){
    //return request(`/api/hi/main?${encodeURIComponent(`hi=24AXRBU571BH?${stringify(params)}`)}`)
    return request(`/api/hi/main?hi=24B1PXVN40DJ`,{
        method:"POST",
        body:params
    })
}

async function refuse_audit(params){
    //return request(`/api/hi/main?${encodeURIComponent(`hi=24AXRBU571BH?${stringify(params)}`)}`)
    return request(`/api/hi/main?hi=24B1PXVN40DL`,{
        method:"POST",
        body:params
    })
}

async function bindDiscount(params){
    return request(`/api/hi/main?hi=24B6OD8OMLUS`,{
        method:"POST",
        body:params
    })
}

async function unBindDiscount(params){
    return request(`/api/hi/main?hi=24B6OD8OMQY7`,{
        method:"POST",
        body:params
    })
}

async function viewDiscount(params){
    return request(`/api/hi/main?hi=24B6OD8OMLV4&${stringify(params)}`)
}

export default {
    list,
    no_audit_list,
    wait_audit_list,
    audit,
    refuse_audit,
    bindDiscount,
    viewDiscount,
    unBindDiscount
}