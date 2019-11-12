export function getAuthority(str){//获取权限
    const authorityString=typeof str==='undefined'?localStorage.getItem('erp-authority'):str;
    let authority;
    try{
        authority=JSON.parse(authorityString);
    }catch(e){
        authority=authorityString;
    }
    if(typeof authority==='string'){
        return [authority];
    }
    return authority || ['admin'];
}

export function setAuthority(authority){//设置权限
    const ErpAuthority=typeof authority==='string'?[authority]:authority;
    return localStorage.setItem('erp-authority',JSON.stringify(ErpAuthority));
}