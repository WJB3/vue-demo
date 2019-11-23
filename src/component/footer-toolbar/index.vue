<template>
  <div class="footer-toolbar" :style='{width}'>
      <div class="right"><slot></slot></div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            width:undefined
        }
    },
    mounted:function(){
        window.addEventListener("resize",this.resizeFooterToolbar);
        this.resizeFooterToolbar();
    },
    unmounted:function(){
        window.removeEventListener("resize",this.resizeFooterToolbar);
    },
    methods:{
        resizeFooterToolbar:function(){
            
            const sider=document.querySelector(".ant-layout-sider");
       
            if(sider==null){
                return ;
            }
            const width=`calc(100% - ${sider.style.width})`;
        
            if(width!==this.width){
                this.width=width;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.footer-toolbar{
    position:fixed;
    bottom:0;
    right:0;
    height:56px;
    line-height:56px;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
    background: #fff;
    border-top: 1px solid #e8e8e8;
    padding: 0 24px;
    z-index: 9;
    transition:width 0.1s; 
}
.right{
    float:right;
}
</style>