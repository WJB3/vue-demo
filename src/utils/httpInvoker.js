import axios from 'axios';

axios.defaults.timeout=5000;
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.common['X-Requested-With']='XMLHttpRequest';

//request拦截器Post传参序列化
axios.interceptors.request.use(
    config=>{
        return config;
    },error=>{
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    response=>{
        const responseData=response.data;
        return responseData;
    },error=>{
        return Promise.reject(error.response.data);
    }
)

export default function request(url,options){

    const defaultOptions={//默认设置
        credentials:"include"
    };

    const newOptions={...defaultOptions,...options};

    if(newOptions.multipartForm){
        newOptions.headers={
            ...newOptions.header,
        }
    }else{
        if(newOptions.method==='POST'||newOptions.method==="PUT"){
            newOptions.headers={
                Accept:'application/json',
                'Content-Type':'application/json;charset=utf-8',
                ...newOptions.headers
            };
            newOptions.body=JSON.stringify(newOptions.body);
        }
    }

    return axios({
        method:newOptions.method,
        url:url,
        data:newOptions.body,
        headers:newOptions.headers
    })
    .catch(error=>{
        console.log(error);
    })
}