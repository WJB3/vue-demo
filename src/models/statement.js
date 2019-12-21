import statementService from '@/services/statementService';
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
        searchText:"",
        detail:{goods:'[]'}
    },
    getters:{
        data: state => state.data
    },
    actions:{
        
         
        async getList({commit},payload){//用户登录
            commit("updateState",{
                loading:true
            })
            try{    
                const list=await statementService.list(payload);
                commit("updateState",{
                    loading:false
                })
                commit("updateState",{
                    list
                })
            }catch(e){
                console.error(e);
            }
        },
        async searchList({commit},payload){//用户登录
            commit("updateState",{
                loading:true
            })
            try{    
                const list=await statementService.search(payload);
                commit("updateState",{
                    loading:false
                })
                commit("updateState",{
                    list
                })
            }catch(e){
                console.error(e);
            }
        },
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