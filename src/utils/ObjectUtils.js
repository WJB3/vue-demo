function isObject(item){
    return item && typeof item==='object' && !Array.isArray(item);
}

function isArray(item){
    return item && typeof item==="object" &&  Array.isArray(item);
}