<template>
  <div class="el_header">
    <span class="el-icon-s-fold" @click="onCollapse"></span>
    <el-dropdown>
      <div class="el_header_right">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span>系统管理员</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
          <el-dropdown-item><span class="iconfont icon-tuichudenglu"></span>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </div>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods:{
    onCollapse:function(){
      this.$emit("onCollapse")
    }
  }
};
</script>

<style lang="less">
.el_header {
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &_right {
    display: flex;
    align-items: center;
  }
}
</style>