<template>
  <el-container>
    <el-aside :width="isMenuCollapse?'64px':'200px'">
      <main-menu ></main-menu>
    </el-aside>
    <el-container>
      <el-header>
        <main-header v-on:onCollapse="handleCollapse"></main-header>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>
        <main-footer></main-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>

import MainMenu from './MainMenu';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import { mapState } from "vuex";

export default {
  mounted:function(){
    
  },
  components:{
    MainMenu,
    MainHeader,
    MainFooter
  },
  computed:mapState({
    isMenuCollapse:state=>state.isMenuCollapse
  }),
  methods:{
    handleCollapse:function(){
      this.$store.commit("updateState",{
          isMenuCollapse:!this.isMenuCollapse
        }
      ) 
    }
  }

};
</script>

<style lang="less">
.el-container {
  width: 100%;
  height: 100%;
}
.el-aside{
  border-right: 1px solid #f5f5f5;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.08);
}
.el-header{
  border-bottom:1px solid #f5f5f5;
}
.el-footer{
  background-color:#f5f5f5;
}
</style>