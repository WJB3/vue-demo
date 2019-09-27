<template>
  <a-layout-header class="a_header" style="background: #fff;">
    <a-icon
      class="trigger"
      :type="isMenuCollapse ? 'menu-unfold' : 'menu-fold'"
      @click="onCollapse"
    />
    <div class="a_header_right">
      <a-popover placement="bottomRight">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <span>系统管理员</span>
      </a-popover>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  methods: {
    onCollapse: function() {
      this.$emit("onCollapse");
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