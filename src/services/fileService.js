import request from '@/utils/httpInvoker';

async function postImage(params){
    return request('http://wxdimgs.viphk.ngrok.org/upload',{
        method:"POST",
        headers:{
            'Content-Type': 'multipart/form-data'
        },
        body:{
            ...params
        }
    })
}

export default {
    postImage
}