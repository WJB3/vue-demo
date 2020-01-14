import companyService from '@/services/companyService';
import Vuex from 'vuex';

export default  {
    namespaced:true,
    
    state:{
        data:[],
        pagination:{
            pageSize:10,
            total:0
        },
        type:"EDIT",
        current:{},
        visible:false,
        loading:false,
        searchText:""
    },
    getters:{

    },
    actions:{
        async getDetail({commit,dispatch},payload){
            
            try{    
                const list=await companyService.getDetail(payload);
                commit("updateState",{
                    list
                })
                if(list){
                    return list;
                }
                 
            }catch(e){
                console.log("我捕获到了错误")
                console.error(e);
                return false;
            }
        },
        async edit({commit,dispatch},payload){
            commit("updateState",{
                loading:true
            })
            try{    
                const list=await companyService.edit(payload);
             
                if(list){
                    commit("updateState",{
                        loading:false
                    })
                    return true;
                }
                 
            }catch(e){
                console.log("我捕获到了错误")
                console.error(e);
                return false;
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
                state.current=payload.list.rows && payload.list.rows.length>0?payload.list.rows[0]:{}
                state.pagination=payload.list.rows && payload.list.rows.length>0?{...pagination,total:payload.list.rows[0].count}:{}
            }
 
            Object.assign(state,payload);
        }
    }
}