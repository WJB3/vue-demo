<template>
<div class="login_component">
  <el-form
    :model="ruleForm"
    status-icon
    label-width="100px"
  >
    <el-form-item label="账户" prop="username">
      <el-input  v-model="ruleForm.username" autocomplete="off" style="width:300px;"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off" style="width:300px;"></el-input>
    </el-form-item>
    <el-form-item label="图片验证码" prop="random_password">
      <el-input type="random_password" v-model="ruleForm.pass" autocomplete="off" style="width:150px;"></el-input>
      <random-code width="130px" height="40px" :styleObject="styleObject" v-on:getVerification="getVerificationCode"></random-code>
    </el-form-item>
    <el-form-item label="canvas验证码" prop="canvas_password">
      <el-input type="canvas_password" v-model="ruleForm.pass" autocomplete="off" style="width:150px;"></el-input>
      <canvas-code width="130px" height="40px"  :styleObject="styleObject"  v-on:getCanvasVerification="getVerificationCode"></canvas-code>
    </el-form-item>

    <SlideVerificationCode v-on:onPass="slideVerficationPass"></SlideVerificationCode>

    <white-space height="28px"></white-space>

    <div class="login_component_button">
      <el-button type="primary" @click="handleSubmitForm('ruleForm')">提交</el-button>
      <el-button @click="handleResetForm('ruleForm')">重置</el-button>
    </div>

  </el-form>
</div>
</template>

<script>
import RandomCode from './RandomCode';
import CanvasCode from './CanvasCode';
import SlideVerificationCode from './SlideVerificationCode'
export default {
    data(){
        return {
            ruleForm:{
                username:"",
                password:""
            },
            styleObject:{
              float:"right"
            },
            randomCode:"",
            canvasCode:""
        }
    },
    components:{
      RandomCode,
      CanvasCode,
      SlideVerificationCode
    },
    methods:{
      handleSubmitForm(){

      },
      getVerificationCode:function(code){
        this.randomCode=code;
      },
      getCanvasVerification:function(code){
        this.canvasCode=code;
      },
      slideVerficationPass:function(){
        console.log("解锁成功！")
      }
    },
    
};
</script>

<style lang="less">
.login_component{
    padding:50px 30px;
    border-radius: 4px;
    border:1px solid #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    &_button{
      display:flex;
      justify-content: space-around;
    }
}
</style>