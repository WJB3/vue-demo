<template>
  <div class="random-code" :style="{width:width,height:height,...styleObject}" @click="createCode">
    <div class="random-code_text">
        <span v-for="(item,index) in code" :key="index">
            {{item}}
        </span>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            code:""
        }
    },
    props:{
        width:String,
        height:String,
        styleObject:Object
    },
    methods:{
        createCode(){
            let code="";
            let codeLength=4;//验证码的长度
            let random=new Array(
                0,1,2,3,4,5,6,7,8,9,
                'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
            );//随机数
            for(let i=0;i<codeLength;i++){
                var charIndex=Math.floor(Math.random()*26);//取得随机数的索引   
                code+=random[charIndex];
            }
            this.code=code;
            this.$emit("getVerification",code);
        }
    },
    mounted:function(){
        this.createCode()
    }
}
</script>

<style lang="less">
.random-code{
    display:inline-block;
    background: url("./../../assets/layout/code.png");
    background-repeat:no-repeat;
    background-size: cover;

    &_text{
        color:white;
        display: flex;
        justify-content: space-around;
    }

}
</style>