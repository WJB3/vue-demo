import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced:true,
    modules:{

    },
    state:{
        isMenuCollapse:false
    },
    getters:{

    },
    actions:{

    },
    mutations:{
        updateState(state,payload){
            console.log(state);
            console.log(payload)
            Object.assign(state,payload);
        }
    }
})