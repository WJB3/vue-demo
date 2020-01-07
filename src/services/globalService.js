import request from '@/utils/httpInvoker';
import { api } from '@/utils/helperUtils';

async function login(params){
    return request(`${api}/session`,{
        method:"POST",
        body:{
            ...params
        }
    })
}

export default {
    login
}