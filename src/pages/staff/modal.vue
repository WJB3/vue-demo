<template>
  <a-modal v-model="visible" title="查看品牌" @cancel="handleCancel"> 
    <template slot="footer">
      <a-button   @click="handleCancel">取消</a-button>
    </template>
  </a-modal>
</template>

<script>
export default {
    props:['visible'],
    mounted:function(){
        
    },
    methods:{
        handleCancel:function(){
            this.$store.commit("brand/updateState",{
                visible:false
            })
        }
    }
};
</script>

<style>
</style>