import staffService from '@/services/staffService';
import Vuex from 'vuex';

export default  {
    namespaced:true,
    
    state:{
        data:[],
        pagination:{
            pageSize:10
        },
        no_audit_data:[],
        no_audit_pagination:{
            pageSize:10
        },
        wait_audit_data:[],
        wait_audit_pagination:{
            pageSize:10
        }
    },
    getters:{

    },
    actions:{
        async getList({commit},payload){//已审核
            try{    
                const list=await staffService.list(payload);
        
                commit("updateState",{
                    list
                })
            }catch(e){
                console.error(e);
            }
        },
        async getNoAuditList({commit},payload){//审核未通过
            try{    
                const list=await staffService.no_audit_list(payload);
        
                commit("updateNoState",{
                    list
                })
            }catch(e){
                console.error(e);
            }
        },
        async getWaitAuditList({commit},payload){//审核未通过
            try{    
                const list=await staffService.wait_audit_list(payload);
        
                commit("updateWaitState",{
                    list
                })
            }catch(e){
                console.error(e);
            }
        },
        async audit({commit,dispatch},payload){
            
            try{    
                const list=await staffService.audit(payload);
                dispatch("getList");
                dispatch("getNoAuditList");
                dispatch("getWaitAuditList");
                if(list){
                    
                    return true;
                }
                 
            }catch(e){
                console.log("我捕获到了错误")
                console.error(e);
                return false;
            }
        },
        async refuse_audit({commit,dispatch},payload){
            
            try{    
                const list=await staffService.refuse_audit(payload);
                dispatch("getList");
                dispatch("getNoAuditList");
                dispatch("getWaitAuditList");
                if(list){
                    
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
           
            state.data=payload.list.rows;
            const pagination={
                ...state.pagination
            }
            state.pagination=payload.list.rows && payload.list.rows.length>0?{total:payload.list.rows[0].count,...pagination}:{}
            Object.assign(state,payload);
        },
        updateNoState(state,payload){
           
            state.no_audit_data=payload.list.rows;
            const pagination={
                ...state.no_audit_pagination
            }
            state.pagination=payload.list.rows && payload.list.rows.length>0?{total:payload.list.rows[0].count,...pagination}:{}
            Object.assign(state,payload);
        },
        updateWaitState(state,payload){
           
            state.wait_audit_data=payload.list.rows;
            const pagination={
                ...state.wait_audit_pagination
            }
            state.pagination=payload.list.rows && payload.list.rows.length>0?{total:payload.list.rows[0].count,...pagination}:{}
            Object.assign(state,payload);
        }
    }
}