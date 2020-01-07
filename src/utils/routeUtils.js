import { menuRoutes } from '@/router';
import { findFieldTitle } from './treeUtils';

function keyToTitle(arr){//key转化为title
  
    if(arr.length===1){
        return [findFieldTitle(menuRoutes,arr[0])]
    }
    if(arr.length===2){
        return [findFieldTitle(menuRoutes,arr[0]),findFieldTitle(menuRoutes,`${arr[0]}_${arr[1]}`)]
    }
    if(arr.length===3){
        return [findFieldTitle(menuRoutes,arr[0]),findFieldTitle(menuRoutes,`${arr[0]}_${arr[1]}`),findFieldTitle(menuRoutes,`${arr[0]}_${arr[1]}_${arr[2]}`)]
    }
}



export  {
    keyToTitle,
 
}