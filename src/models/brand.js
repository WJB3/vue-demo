import brandService from '@/services/brandService';
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
        visible:false
    },
    getters:{

    },
    actions:{
        async add({commit,dispatch},payload){
            try{    
                const list=await brandService.add(payload);
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
                const list=await brandService.edit(payload);
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
                const list=await brandService.deleteBrand(payload);
           
                dispatch("getList")
            }catch(e){
                console.error(e);
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