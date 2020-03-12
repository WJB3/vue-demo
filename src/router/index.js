import VueRouter from "vue-router";
import Vue from 'vue';
 
import MainContainer from './../pages/MainContainer';
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Dashboard=()=>import("@/pages/Dashboard.vue");
 
 
 
Vue.use(VueRouter);

const menuRoutes=[
    {
        path:"/dashboard",
        key:"dashboard",
        title:"控制台",
        icon:"dashboard",
        component:Dashboard
    },
     
]

const routes=[
    {
        path:"/",
        component:MainContainer,
        key:"index",
        title:"首页",
        children:menuRoutes,
        meta:{
            title:"",
            requireAuth:true
        }
    }
];

const router=new VueRouter({
    routes
});

 

export {
    routes,router,menuRoutes
};          