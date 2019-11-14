import brandService from '@/services/brandService';
import Vuex from 'vuex';

export default  {
    namespaced:true,
    
    state:{
        data:[],
        pagination:{
            pageSize:10
        }
    },
    getters:{

    },
    actions:{
        async add({commit},payload){
            try{    
                const list=await brandService.add(payload);
                commit("getList");
                if(list){
                    return true;
                }
                 
            }catch(e){
                console.log("我捕获到了错误")
                console.error(e);
                return false;
            }
        },
        async getList({commit},payload){//用户登录
            try{    
                const list=await brandService.list(payload);
           
                commit("updateState",{
                    list
                })
            }catch(e){
                console.error(e);
            }
        }
    },
    mutations:{
        updateState(state,payload){
            console.log(payload)
            state.data=payload.list.rows;
            const pagination={
                ...state.pagination
            }
            state.pagination=payload.list.rows && payload.list.rows.length>0?{total:payload.list.rows[0].count,...pagination}:{}
            Object.assign(state,payload);
        }
    }
}