import Vue from 'vue';
import Vuex from 'vuex';
import staff from './staff';
import brand from './brand';
import order from './order';
import model from './model';
import discount from './discount';
import trade from './trade';
import activity from './activity';
import statement from './statement';
import credit from './credit';
Vue.use(Vuex);

export default new Vuex.Store({
    namespaced:true,
    modules:{
        staff,
        brand,
        order,
        model,
        discount,
        trade,
        activity,
        statement,
        credit
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
            if(payload.username==="erp"&&payload.password==="123456"){
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