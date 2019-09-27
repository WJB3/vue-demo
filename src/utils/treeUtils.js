function findFieldTitle(target,key){//根据key查找对应得title
    
    let name;
    
    target.forEach((item)=>{
        if(item.key===key){
            name=item.title;
        }
        if(item.children && Array.isArray(item.children)){
            name=findFieldTitle(item.children,key)?findFieldTitle(item.children,key):name;
        }
    })
   
    return name;
}

export {
    findFieldTitle
}