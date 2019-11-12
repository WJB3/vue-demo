<template v-if="isChecked">
    <slot></slot>
</template>

<script>
import getAuthority from '@/utils/authorityUtils';
export default {    
    data(){
        return{
            isChecked:false
        }
    },
    mounted:function(){
        this.checkPremission();
    },
    checkPremission:function(){
        const _this=this;
        const AllAuthority=getAuthority();
        for(let i=0;i<AllAuthority.length;i++){
            if(AllAuthority[i]===authority){
                _this.isChecked=true;
            }
        }
    },
    props:{
        authority:String
    }
}
</script>

<style>

</style>