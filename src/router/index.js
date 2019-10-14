import VueRouter from "vue-router";
import Vue from 'vue';
import LoginContainer from './../pages/layout/LoginContainer';
import MainContainer from './../pages/layout/MainContainer';

const Dashboard=()=>import("@/pages/dashboard/index.vue");
const TestCanvas=()=>import("@/pages/test/canvas/index.vue");
const StaffFiles=()=>import("@/pages/staff/files/index.vue");
const RouteView=()=>import("@/component/route/RouteView.vue");
const StaffLaborVersion=()=>import("@/pages/staff/labor/version/index.vue");
const StaffLaborRenewal=()=>import("@/pages/staff/labor/renewal/index.vue");
const StaffLaborRenewrecord=()=>import("@/pages/staff/labor/renewrecord/index.vue");

Vue.use(VueRouter);

const menuRoutes=[
    {
        path:"/dashboard",
        key:"dashboard",
        title:"控制台",
        icon:"dashboard",
        component:Dashboard
    },
    {
        path:"/staff",
        key:"staff",
        title:"人员管理",
        component:RouteView,
        icon:"user",
        children:[
            {
                path:"files",
                key:"staff_files",
                title:"人事档案",
                component:StaffFiles
            },
            {
                path:"labor",
                key:"staff_labor",
                title:"合同变更",
                component:RouteView,
                children:[
                    {
                        path:"version",
                        key:"staff_labor_version",
                        title:"版本变更",
                        component:StaffLaborVersion
                    },
                    {
                        path:"renewal",
                        key:"staff_labor_renewal",
                        title:"合同续签",
                        component:StaffLaborRenewrecord
                    },
                    {
                        path:"renewrecord",
                        key:"staff_labor_renewrecord",
                        title:"续签记录",
                        component:StaffLaborRenewal
                    }
                ]
            }
        ]
    },
    {
        path:"/test",
        key:"test",
        title:"测试管理",
        icon:"meh",
        component:RouteView,
        children:[
            {
                path:"canvass",
                key:"test_canvass",
                title:"canvas测试",
                component:TestCanvas
            }
        ]
    }
]

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

const router=new VueRouter({
    routes
});

export {
    routes,router,menuRoutes
};          