import VueRouter from "vue-router";
import Vue from 'vue';
import LoginContainer from './../pages/layout/LoginContainer';
import MainContainer from './../pages/layout/MainContainer';

Vue.use(VueRouter);

const routes=[
    {path:'/login',component:LoginContainer},
    {path:"/",component:MainContainer}
];

const router=new VueRouter({
    routes
});

export default router;          