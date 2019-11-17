import VueRouter from "vue-router";
import Vue from 'vue';
import LoginContainer from './../pages/layout/LoginContainer';
import MainContainer from './../pages/layout/MainContainer';
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Dashboard=()=>import("@/pages/dashboard/index.vue");
const Discount=()=>import("@/pages/discount/index.vue");
const Info=()=>import("@/pages/info/index.vue");
const Model=()=>import("@/pages/model/index.vue");
const Brand=()=>import("@/pages/brand/index.vue");
const Score=()=>import("@/pages/score/index.vue");
const Trade=()=>import("@/pages/trade/index.vue");
const Staff=()=>import("@/pages/staff/index.vue");
const Order=()=>import("@/pages/order/index.vue");
const Activity=()=>import("@/pages/activity/index.vue");
const TestCanvas=()=>import("@/pages/test/canvas/index.vue");
const SvgCanvas=()=>import("@/pages/test/svg/index.vue");
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
        path:"/user",
        key:"user",
        title:"用户管理",
        icon:"user",
        component:Staff
    },
    {
        path:"/order",
        key:"order",
        title:"订单管理",
        icon:"key",
        component:Order
    },
    {
        path:"/brand",
        key:"brand",
        title:"品牌管理",
        icon:"ant-design",
        component:Brand
    },
    {
        path:"/activity",
        key:"activity",
        title:"活动管理",
        icon:"key",
        component:Activity
    },
    // {
    //     path:"/score",
    //     key:"score",
    //     title:"积分管理",
    //     icon:"key",
    //     component:Score
    // },
    {
        path:"/trade",
        key:"trade",
        title:"商品管理",
        icon:"gift",
        component:Trade
    },
    {
        path:"/model",
        key:"model",
        title:"型号管理",
        icon:"appstore",
        component:Model
    },
     
    {
        path:"/discount",
        key:"discount",
        title:"优惠券管理",
        icon:"shopping-cart",
        component:Discount
    },
    // {
    //     path:"/info",
    //     key:"info",
    //     title:"公司信息介绍",
    //     icon:"database",
    //     component:Info
    // },
    // {
    //     path:"/staff",
    //     key:"staff",
    //     title:"人员管理",
    //     component:RouteView,
    //     icon:"user",
    //     children:[
    //         {
    //             path:"files",
    //             key:"staff_files",
    //             title:"人事档案",
    //             component:StaffFiles
    //         },
    //         {
    //             path:"labor",
    //             key:"staff_labor",
    //             title:"合同变更",
    //             component:RouteView,
    //             children:[
    //                 {
    //                     path:"version",
    //                     key:"staff_labor_version",
    //                     title:"版本变更",
    //                     component:StaffLaborVersion
    //                 },
    //                 {
    //                     path:"renewal",
    //                     key:"staff_labor_renewal",
    //                     title:"合同续签",
    //                     component:StaffLaborRenewrecord
    //                 },
    //                 {
    //                     path:"renewrecord",
    //                     key:"staff_labor_renewrecord",
    //                     title:"续签记录",
    //                     component:StaffLaborRenewal
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     path:"/test",
    //     key:"test",
    //     title:"测试管理",
    //     icon:"meh",
    //     component:RouteView,
    //     children:[
    //         {
    //             path:"canvass",
    //             key:"test_canvass",
    //             title:"canvas测试",
    //             component:TestCanvas
    //         },
    //         {
    //             path:"svg",
    //             key:"test_svg",
    //             title:"svg测试",
    //             component:SvgCanvas
    //         }
    //     ]
    // }
]

const routes=[
    {path:'/login',component:LoginContainer},
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

router.beforeEach((to,from,next)=>{
    if(to.matched.some(record=>record.meta.requireAuth)){
        if(localStorage.getItem("AUTHORITY")){
            next()
        }else{
            next({
                path:"/login",
            })
        }
    }else{
        next()
    }
})

export {
    routes,router,menuRoutes
};          