import request from '@/utils/httpInvoker';

async function login(params){
    return request('/api/session',{
        method:"POST",
        body:{
            ...params
        }
    })
}

export default {
    login
}