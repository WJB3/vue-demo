<template>
  <a-layout-header class="a_header" style="background: #fff;">
    <a-icon
      class="trigger"
      :type="isMenuCollapse ? 'menu-unfold' : 'menu-fold'"
      @click="onCollapse"
    />
    <div class="a_header_right">
      <a-popover placement="bottomRight"   >
        <template slot="content">
          <div class="flexbox_row_center_center cursor_pointer" @click="handleLogout" >
            <a-icon type="logout" style="margin-right:10px" />退出登录
          </div>
        </template>
        <template slot="title">
          <span>设置</span>
        </template>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <span>系统管理员</span>
      </a-popover>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  data(){
    return {
      visible:false
    }
  },
  methods: {
    onCollapse: function() {
      this.$emit("onCollapse");
    },
    handleLogout:function(){
      const _this=this;
 
      this.$store.dispatch({
        type:"logout",
         
      }).then(res=>{
        if(res){
 
          _this.$router.push({path:"/"})
        }
      })
    }
  },
  props: {
    isMenuCollapse: Boolean
  }
};
</script>

<style lang="less">
.a_header {
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;

  .trigger {
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }

  &_right {
    display: flex;
    align-items: center;
  }
}
</style>