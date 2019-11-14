import request from '@/utils/httpInvoker';
import { stringify } from 'qs';

async function list(params){
    //return request(`/api/hi/main?${encodeURIComponent(`hi=24AXRBU571BH?${stringify(params)}`)}`)
    return request(`/api/hi/main?hi=24AXRBU571BH&${stringify(params)}`)
}

export default {
    list
}