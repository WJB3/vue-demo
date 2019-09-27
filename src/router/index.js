import VueRouter from "vue-router";
import Vue from 'vue';
import LoginContainer from './../pages/layout/LoginContainer';
import MainContainer from './../pages/layout/MainContainer';

Vue.use(VueRouter);

const routes=[
    {path:'/login',component:LoginContainer},
    {
        path:"/",
        component:MainContainer,
        key:"index",
        title:"首页",
        children:menuRoutes
    }
];

const menuRoutes=[
    {
        path:"/dashboard",
        key:"dashboard",
        title:"控制台",
    },
    {
        path:"/staff",
        key:"staff",
        title:"人员管理",
        children:[
            {
                path:"/staff/files",
                key:"staff_files",
                title:"人事档案"
            },
            {
                path:"/staff/labor",
                key:"staff_labor",
                title:"合同变更",
                children:[
                    {
                        path:"/staff/labor/version",
                        key:"staff_labor_version",
                        title:"版本变更"
                    },
                    {
                        path:"/staff/labor/renewal",
                        key:"staff_labor_renewal",
                        title:"合同续签"
                    },
                    {
                        path:"/staff/labor/renewrecord",
                        key:"staff_labor_renewrecord",
                        title:"续签记录"
                    }
                ]
            }
        ]
    }
]

const router=new VueRouter({
    routes
});

export {
    routes,router,menuRoutes
};          