<template>
  <div class="menu_label">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-Energy-"></use>
    </svg>
    <span>闪电管理系统</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.menu_label {
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: 24px;
  transition: all 0.3s;
  background: #fff;
  overflow: hidden;

  .icon {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    width:30px;
  }
}
</style>