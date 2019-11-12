import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced:true,
    modules:{
        
    },
    state:{
        isMenuCollapse:false,
        routerArr:['控制台'],
        defaultSelectedKeys:['dashboard'],
        isLogin:false
    },
    getters:{

    },
    actions:{
        async login({commit},payload){//用户登录
            if(payload.username==="erp"&&payload.password==="123456"){
                localStorage.setItem("AUTHORITY",true);
                return true;
            }
            return false;
        }
    },
    mutations:{
        updateState(state,payload){
            
            Object.assign(state,payload);
        }
    }
})