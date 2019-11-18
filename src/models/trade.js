import tradeService from '@/services/tradeService';
import Vuex from 'vuex';

export default  {
    namespaced:true,
    
    state:{
        data:[],
        pagination:{
            pageSize:10,
            total:0
        },
        type:"ADD",
        current:{},
        visible:false,
        loading:false,
        searchText:""
    },
    getters:{

    },
    actions:{
        async add({commit,dispatch},payload){
            
            try{    
                const list=await tradeService.add(payload);
                dispatch("getList");
                if(list){
                    
                    return true;
                }
                 
            }catch(e){
                console.log("我捕获到了错误")
                console.error(e);
                return false;
            }
        },
        async edit({commit,dispatch},payload){
            try{    
                const list=await tradeService.edit(payload);
                dispatch("getList");
                if(list){
                    return true;
                }
                 
            }catch(e){
                console.log("我捕获到了错误")
                console.error(e);
                return false;
            }
        },
        async delete({commit,dispatch},payload){//品牌删除
            try{    
                const list=await tradeService.deleteTrade(payload);
                dispatch("getList")
            }catch(e){
                console.error(e);
            }
        },
        async getList({commit},payload){//用户登录
            commit("updateState",{
                loading:true
            })
            try{    
                const list=await tradeService.list(payload);
                commit("updateState",{
                    loading:false
                })
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
            if(payload.list){
                state.data=payload.list.rows;
                const pagination={
                    ...state.pagination
                }
                 
                state.pagination=payload.list.rows && payload.list.rows.length>0?{...pagination,total:payload.list.rows[0].count}:{}
            }
 
            Object.assign(state,payload);
        }
    }
}