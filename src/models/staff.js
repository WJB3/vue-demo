import staffService from '@/services/staffService';
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
        async getList({commit},payload){//用户登录
            try{    
                const list=await staffService.list(payload);
                console.log(list)
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