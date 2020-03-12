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
        isLogin:false,
        selectedKeys:[],
    },
    getters:{

    },
    actions:{
        async login({commit},payload){//用户登录
            if(payload.username==="erp"&&payload.password==="lianghaisy123"){
                localStorage.setItem("AUTHORITY",true);
                return true;
            }
            return false;
        },
        async logout({commit},payload){//用户登出
       
            localStorage.removeItem("AUTHORITY"); 
           
            return true;
        }
    },
    mutations:{
        updateState(state,payload){
            Object.assign(state,payload);
        }
    }
})