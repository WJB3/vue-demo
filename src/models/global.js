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
        defaultSelectedKeys:['dashboard']
    },
    getters:{

    },
    actions:{

    },
    mutations:{
        updateState(state,payload){
            
            Object.assign(state,payload);
        }
    }
})