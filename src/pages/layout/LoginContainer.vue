<template>
    <div class="login-container">
        <div class="login-container_title">管理系统</div>
        <Login></Login>

    </div>
</template>

<script>
import Login from "@/component/layout/Login.vue";
export default {
    data(){
        return {}
    },
    components:{
        Login
    }
}
</script>

<style lang="less">
.login-container{
    
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: url("./../../assets/layout/star.jpg");
    background-size:100% 100%;
    background-repeat:no-repeat;


    &_title{
        margin:10% 0 50px 0;
    }

}
</style>